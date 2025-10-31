import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcImages = path.join(__dirname, 'assets/images/');
const destImages = path.join(__dirname, 'assets/images/min/');
const destWebP = path.join(__dirname, 'assets/images/min/webp/');

(async () => {
  const { default: imagemin } = await import('imagemin');
  const { default: mozjpeg } = await import('imagemin-mozjpeg');
  const { default: pngquant } = await import('imagemin-pngquant');
  const { default: webp } = await import('imagemin-webp');

  // Lista apenas imagens originais
  const files = fs.readdirSync(srcImages).filter(file =>
    /\.(jpe?g|png)$/i.test(file) && !file.includes('.min.')
  );

  // Cria pastas de destino se não existirem
  fs.mkdirSync(destImages, { recursive: true });
  fs.mkdirSync(destWebP, { recursive: true });

  // Compressão JPEG e PNG
  await imagemin(files.map(f => path.join(srcImages, f)), {
    destination: destImages,
    plugins: [
      mozjpeg({ quality: 75 }),
      pngquant({ quality: [0.6, 0.8] })
    ]
  });

  // Versão WebP
  await imagemin(files.map(f => path.join(srcImages, f)), {
    destination: destWebP,
    plugins: [
      webp({ quality: 75 })
    ]
  });

  console.log('✅ Imagens otimizadas com sucesso!');
})();
