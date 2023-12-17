declare module "qrcode/lib/core/alignment-pattern" {
  function getPositions(version: number): [number, number][];
}

declare module "qrcode/lib/renderer/canvas" {
  function renderToDataURL(
    qr: QRCode.QRCode,
    options?: QRCode.QRCodeRenderersOptions,
  ): string;
}

declare module "qrcode/lib/renderer/svg-tag" {
  function render(
    qr: QRCode.QRCode,
    options?: QRCode.QRCodeRenderersOptions,
  ): string;
}
