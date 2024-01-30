import { execSync } from 'child_process';
import * as fs from 'fs';
import yargs from 'yargs';

const packageNames = fs.readdirSync('./packages');
const SRC_FILENAME = 'src';
const ESM_BUILD = 'esm';
const CJS_BUILD = 'cjs';
const TS_BUILD = 'ts';

const argv = yargs(process.argv.slice(2))
  .option('packages', {
    alias: 'p',
    describe: 'packages to build',
    demandOption: true,
    array: true,
    choices: packageNames,
  })
  .option('builds', {
    alias: 'b',
    describe: 'build types to include, defaults to all',
    array: true,
    choices: [ESM_BUILD, CJS_BUILD, TS_BUILD],
  })
  .parse();

const { packages = [], builds = [] } = argv;

for (let i = 0; i < packages.length; i += 1) {
  const p = packages[i];

  console.log(`📦 Building ${p}...`);

  const target = `./packages/${p}/${SRC_FILENAME}`;
  const outEsm = `./packages/${packages[i]}/lib/esm`;
  const outCjs = `./packages/${packages[i]}/lib/cjs`;

  // Build ESM
  if (!builds.length || builds.includes(ESM_BUILD)) {
    execSync(`
      cross-env BABEL_ENV=esmUnbundled babel --config-file ./.babelrc.js ${target} --extensions '.ts','.tsx' --out-dir '${outEsm}' --source-maps
    `);
    console.log(` └─── ✅ Built ${p} ESM`);
  }

  if (!builds.length || builds.includes(CJS_BUILD)) {
    // Build CJS
    execSync(`
    cross-env BABEL_ENV=cjs babel --config-file ./.babelrc.js ${target} --extensions '.ts','.tsx' --out-dir '${outCjs}' --source-maps
  `);
    console.log(` └─── ✅ Built ${p} CJS`);
  }

  if (!builds.length || builds.includes(TS_BUILD)) {
    // Build ts
    execSync(`
      tsc -p ./packages/${p}/tsconfig.json
    `);
    console.log(` └─── ✅ Built ${p} TS`);
  }
}
