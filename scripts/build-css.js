const fs = require('fs');
const path = require('path');
const { compile } = require('@tailwindcss/node');
const { Scanner } = require('@tailwindcss/oxide');

async function buildCss() {
  const rootDir = path.resolve(__dirname, '..');
  const cssPath = path.join(rootDir, 'app', 'globals.css');
  const outPath = path.join(rootDir, 'app', 'globals.compiled.css');

  const css = fs.readFileSync(cssPath, 'utf-8');
  const compiler = await compile(css, {
    base: rootDir,
    from: cssPath,
    onDependency: () => {},
    shouldRewriteUrls: true,
  });

  const scanner = new Scanner({
    sources: [{ base: rootDir, pattern: '**/*', negated: false }],
  });
  const candidates = scanner.scan();
  const output = compiler.build(candidates);

  fs.writeFileSync(outPath, output, 'utf-8');
  console.log(`[Tailwind] Successfully compiled ${candidates.length} utility classes (${(output.length / 1024).toFixed(1)} KB) -> app/globals.compiled.css`);
}

buildCss().catch((err) => {
  console.error('[Tailwind] Build failed:', err);
  process.exit(1);
});
