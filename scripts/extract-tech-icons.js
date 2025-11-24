#!/usr/bin/env node
// Extract a subset of SVG icons from the `tech-stack-icons` package into `src/assets/extracted`.
// Usage: node scripts/extract-tech-icons.js

import fs from 'fs';
import path from 'path';
const __dirname = import.meta.dirname;
const outDir = path.resolve(__dirname, '..', 'src', 'assets', 'extracted');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function tryRequire(name) {
  try {
    return require(name);
  } catch (e) {
    return null;
  }
}

const pkg = tryRequire('tech-stack-icons/dist') || tryRequire('tech-stack-icons');
if (!pkg) {
  console.error('Unable to require tech-stack-icons. Make sure it\'s installed.');
  process.exit(1);
}

// Attempt to locate the internal icons data object.
const iconsData = pkg.typedIconsData || pkg.icons || (pkg.default && pkg.default.typedIconsData) || (pkg.default && pkg.default.icons);
if (!iconsData) {
  console.error('Could not locate icons data inside tech-stack-icons package. The package layout may have changed.');
  process.exit(1);
}

// List of icon slugs to extract. Edit this array if you add/remove skills in Skills.tsx.
const ICONS_TO_EXTRACT = [
  'js','typescript','java','python','csharp','c++','go','bash','html5','css3',
  'nodejs','react','nextjs','vitejs','graphql','apache','swagger','tailwindcss','carbon','net','wordpress',
  'gcloud','okta','kubernetes','redhat','ubuntu','github','github-actions','mysql','postgresql','cloudant','redis','mongodb',
  'milvus','cloudflare','fortinet','tcpip','udp','sonarqube','selenium','letsencrypt','vault','privacy','datadog','fluentd','prometheus',
  'openai','lmstudio','claude','copilot','unity','unreal-engine','epic-games','roblox','android'
];

let extracted = 0;
for (const name of ICONS_TO_EXTRACT) {
  const def = iconsData[name];
  if (!def) {
    console.warn(`Icon not found in package: ${name}`);
    continue;
  }
  // Prefer dark variant then light then any available
  const svgObj = def.svg || def;
  const svg = (svgObj.dark || svgObj.light || Object.values(svgObj)[0]);
  if (!svg) {
    console.warn(`No svg variant found for ${name}`);
    continue;
  }
  // Some svgs are stored as strings without <svg> wrapper; ensure we write full svg.
  const filename = path.join(outDir, `${name}.svg`);
  fs.writeFileSync(filename, svg, 'utf8');
  extracted++;
  console.log(`Extracted ${name} -> ${path.relative(process.cwd(), filename)}`);
}

console.log(`Done. Extracted ${extracted} icons to ${outDir}`);
