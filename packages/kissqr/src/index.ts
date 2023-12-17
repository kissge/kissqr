import QRCode from "qrcode";
import * as CanvasRenderer from "qrcode/lib/renderer/canvas";
import * as SVGRenderer from "qrcode/lib/renderer/svg-tag";
import { getPositions } from "qrcode/lib/core/alignment-pattern";
import type { LogoDefinition, LogoDefinitionSet } from "./types";

export async function create(args: { data: string; logo?: LogoDefinitionSet }) {
  if (!args.logo) {
    return QRCode.create(args.data, { errorCorrectionLevel: "H" });
  }

  const { qr, logo } = tryCreateUntilPreferredSize(args.data, args.logo);

  return embedLogo(qr, logo);
}

export function renderToPNGDataURL(qr: QRCode.QRCode) {
  return CanvasRenderer.renderToDataURL(qr, { scale: 10 });
}

export function renderToSVGString(qr: QRCode.QRCode) {
  const svg = SVGRenderer.render(qr);
  const match = svg.match(
    /^(.+)(<path fill="#ffffff" d="M0 0h\d+v\d+H0z"\/><path stroke="#000000" d=")(.+)("\/><\/svg>)\n$/,
  );

  if (!match) {
    throw new Error("SVG parse error");
  }

  return (
    match[1] +
    '<path fill="#000000" d="' +
    match[3]
      .match(/M\d+ \d+\.5|m\d+ 0|h\d+/g)
      ?.map((cmd) => {
        switch (cmd[0]) {
          case "M":
            return cmd.slice(0, -2);
          case "m":
            return cmd;
          case "h":
            return "v1" + cmd + "v-1";
          default:
            throw new Error("SVG parse error");
        }
      })
      .join("") +
    match[4]
  );
}

/**
 * 短すぎるとロゴを埋め込めないので無害そうな文字で埋める
 */
function tryCreateUntilPreferredSize(data: string, logo: LogoDefinitionSet) {
  const max = Object.keys(logo).reduce(
    (a, b) => Math.max(a, Number.parseInt(b)),
    0,
  );

  for (let url = data; ; url += "\n") {
    const qr = QRCode.create(url, { errorCorrectionLevel: "H" });

    if (qr.modules.size in logo || qr.modules.size > max) {
      return {
        qr,
        logo: logo[qr.modules.size] ?? logo[max],
      };
    }
  }
}

function embedLogo(qr: QRCode.QRCode, logo: LogoDefinition) {
  const bitmap = Array.from(qr.modules.data);

  const logoWidth = logo[0].length;
  const logoHeight = logo.length;
  const qrSize = qr.modules.size;
  const offsetX = Math.floor((qrSize - logoWidth) / 2);
  const offsetY = Math.floor((qrSize - logoHeight) / 2);

  const isForbidden = buildForbiddenAreaDeterminer(qr.version);

  for (let logoY = 0; logoY < logoHeight; logoY++) {
    for (let logoX = 0; logoX < logoWidth; logoX++) {
      if (logo[logoY][logoX]) {
        const x = offsetX + logoX;
        const y = offsetY + logoY;

        if (!isForbidden(x, y)) {
          bitmap[y * qrSize + x] = logo[logoY][logoX] - 1;
        }
      }
    }
  }

  qr.modules.data = new Uint8Array(bitmap);

  return qr;
}

function buildForbiddenAreaDeterminer(version: number) {
  const qrSize = version * 4 + 17;
  const matrixSize = Math.floor(version / 7) + 2;
  const aligns = getPositions(version);

  if (matrixSize % 2 === 0) {
    // 中央付近の4つを除外する
    aligns.splice((matrixSize / 2) * matrixSize + matrixSize / 2 - 1 - 2, 2);
    aligns.splice(
      (matrixSize / 2 - 1) * matrixSize + matrixSize / 2 - 1 - 2,
      2,
    );
  } else {
    // 中央の1つを除外する
    aligns.splice((aligns.length + 3 - 1) / 2 - 2, 1);
  }

  return (x: number, y: number) =>
    /** タイミングパターン */
    x === 6 ||
    y === 6 ||
    /** ファインダパターン & フォーマット情報 */
    (x <= 8 && y <= 8) ||
    (x >= qrSize - 8 && y <= 8) ||
    (x <= 8 && y >= qrSize - 8) ||
    /** アライメントパターン */
    aligns.some(
      ([ax, ay]) => ax - 2 <= x && x < ax + 3 && ay - 2 <= y && y < ay + 3,
    );
}

export type * from "./types";
