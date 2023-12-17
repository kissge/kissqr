# kissqr

[![npm version](https://badge.fury.io/js/%40kissge%2Fkissqr.svg)](https://badge.fury.io/js/%40kissge%2Fkissqr)

QR Code generator with logo image embedded adhesive.

# Demo

https://kissge.github.io/kissqr/

# Sample

```typescript
import * as KissQR from "@kissge/kissqr";

KissQR.create({ data, logo }).then((qr) => {
  console.log({
    svg: KissQR.renderToSVGString(qr),
    png: KissQR.renderToPNGDataURL(qr),
  });
});
```
