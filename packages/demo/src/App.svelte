<script lang="ts">
  import { onMount } from 'svelte';
  import * as KissQR from '@kissge/kissqr';

  let data = '';
  let embedLogo = true;

  let output: { svg: string; png: string } | null = null;

  let logo: KissQR.LogoDefinitionSet | null = null;

  $: if (data) {
    KissQR.create({ data, logo: (embedLogo && logo) || undefined }).then((qr) => {
      output = {
        svg: URL.createObjectURL(new Blob([KissQR.renderToSVGString(qr)], { type: 'image/svg+xml' })),
        png: KissQR.renderToPNGDataURL(qr),
      };
    });
  }

  $: filename = 'kissqr-' + data.replace(/[^a-zA-Z0-9.=-]+/g, '_');

  onMount(async () => {
    const logoName = new URLSearchParams(location.search).get('logo') || 'kissge';
    await import(`./logo/logo-${logoName}.ts`)
      .then((module) => (logo = module.default))
      .catch(() => {
        logo = null;
        embedLogo = false;
      });

    data = location.href;
  });
</script>

<main>
  <input bind:value={data} type="url" placeholder="https://..." />
  <section class="input-options">
    <label><input type="checkbox" bind:checked={embedLogo} disabled={!logo} />ロゴ入り</label>
  </section>

  {#if output}
    <a href={output.png} download={filename + '.png'}>
      <img src={output.png} alt="QRコード" />
    </a>

    <section class="download-buttons">
      <a href={output.png} download={filename + '.png'} class="button primary">
        画像ダウンロード <small>(PNG)</small>
      </a>
      <a href={output.svg} download={filename + '.svg'} class="button secondary">
        画像ダウンロード <small>(SVG)</small>
      </a>
    </section>

    <p>⚠️ 出来上がったQRコードが読み取れるか必ず確認してから使ってください。</p>
  {/if}
</main>

<footer>
  <a href="https://twitter.com/p_km">
    Made by <img src="https://kissge.github.io/shared/me-mini-512.png" alt="Yusuke Kido" />
  </a>
  <a href="https://badge.fury.io/js/%40kissge%2Fkissqr">
    <img src="https://badge.fury.io/js/%40kissge%2Fkissqr.svg" alt="npm version" />
  </a>
</footer>
