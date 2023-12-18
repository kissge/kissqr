import QRCode from "qrcode";
import * as CanvasRenderer from "qrcode/lib/renderer/canvas";
import * as SVGRenderer from "qrcode/lib/renderer/svg-tag";

export function renderToPNGDataURL(
  qr: QRCode.QRCode,
  options?: QRCode.QRCodeRenderersOptions,
) {
  return CanvasRenderer.renderToDataURL(qr, options);
}

export function renderToSVGString(
  qr: QRCode.QRCode,
  options?: QRCode.QRCodeRenderersOptions,
) {
  const svg = SVGRenderer.render(qr, options);
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
