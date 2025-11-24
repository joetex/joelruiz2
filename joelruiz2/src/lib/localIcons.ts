// This module maps icon slugs to imported SVG asset paths that are extracted
// from `tech-stack-icons` (or placed manually). After you run
// `node scripts/extract-tech-icons.js` the extracted SVGs will appear in
// `src/assets/extracted` and these imports will resolve.

// Note: Keep this list small — only import the icons you actually need.
// This module maps icon slugs to imported SVG asset paths that are extracted
// from `tech-stack-icons` (or placed manually). After you run
// `node scripts/extract-tech-icons.js` the extracted SVGs will appear in
// `src/assets/extracted` and these imports will resolve.

import jsSvg from '../assets/extracted/JavaScript.svg';
import typeScriptSvg from '../assets/extracted/TypeScript.svg';
import javaSvg from '../assets/extracted/Java.svg';
import pythonSvg from '../assets/extracted/Python.svg';
import goSvg from '../assets/extracted/Go.svg';
import reactSvg from '../assets/extracted/React.svg';
import nodejsSvg from '../assets/extracted/Node.js.svg';
import nextjsSvg from '../assets/extracted/Next.js.svg';
import vitejsSvg from '../assets/extracted/Vite.js.svg';
import graphqlSvg from '../assets/extracted/GraphQL.svg';
import tailwindCssSvg from '../assets/extracted/Tailwind CSS.svg';
import html5Svg from '../assets/extracted/HTML5.svg';
import css3Svg from '../assets/extracted/CSS3.svg';
import cppSvg from '../assets/extracted/CPlusPlus.svg';
import csharpSvg from '../assets/extracted/CSharp.svg';
import bashSvg from '../assets/extracted/Bash.svg';

import kafkaSvg from '../assets/extracted/Apache.svg';
import OpenAPISvg from '../assets/extracted/OpenAPI.svg';
import NETSvg from '../assets/extracted/NET.svg';
import WordPressSvg from '../assets/extracted/WordPress.svg';

import mysqlSvg from '../assets/extracted/MySQL.svg';
import postgresqlSvg from '../assets/extracted/PostgresSQL.svg';
import redisSvg from '../assets/extracted/Redis.svg';

import redhatSvg from '../assets/extracted/RedHat.svg';
import UbuntuSvg from '../assets/extracted/Ubuntu.svg';
import kubernetesSvg from '../assets/extracted/Kubernetes.svg';
import gcloudSvg from '../assets/extracted/GoogleCloud.svg';
import githubSvg from '../assets/extracted/github-svgrepo-com.svg';

import cloudflareSvg from '../assets/extracted/Cloudflare.svg';
import androidSvg from '../assets/extracted/Android.svg';
import mongoDbSvg from '../assets/extracted/MongoDB.svg';
// Note: only include icons you actually use to keep the bundle small.
export const ICON_FILES: Record<string, string> = {
    js: jsSvg,
    typescript: typeScriptSvg,
    java: javaSvg,
    python: pythonSvg,
    go: goSvg,
    react: reactSvg,
    nodejs: nodejsSvg,
    nextjs: nextjsSvg,
    vitejs: vitejsSvg,
    graphql: graphqlSvg,
    tailwindcss: tailwindCssSvg,
    html5: html5Svg,
    css3: css3Svg,
    'c++': cppSvg,
    csharp: csharpSvg,
    bash: bashSvg,

    redhat: redhatSvg,
    ubuntu: UbuntuSvg,

    kafka: kafkaSvg,
    openapi: OpenAPISvg,
    net: NETSvg,
    wordpress: WordPressSvg,
    mysql: mysqlSvg,
    postgresql: postgresqlSvg,
    redis: redisSvg,

    kubernetes: kubernetesSvg,
    gcloud: gcloudSvg,
    github: githubSvg,
    cloudflare: cloudflareSvg,
    android: androidSvg,
    mongodb: mongoDbSvg,
};

export default ICON_FILES;
