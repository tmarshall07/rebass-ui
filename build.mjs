import { execSync } from 'child_process';
import yargs from 'yargs';

const projectMap = {
  'tailwind-base': 'tailwind-base/src',
  'tailwind-components': 'tailwind-components/src',
  'scheme-ui': 'scheme-ui/src',
};

const argv = yargs(process.argv.slice(2))
  .option('packages', {
    alias: 'p',
    describe: 'packages to build',
    demandOption: true,
    array: true,
    choices: Object.keys(projectMap),
  })
  .parse();

const { packages } = argv;

for (let i = 0; i < packages.length; i += 1) {
  const p = packages[i];
  const target = `./packages/${projectMap[p]}`;
  const outEsm = `./packages/${packages[i]}/lib/esm`;
  const outCjs = `./packages/${packages[i]}/lib/cjs`;

  // Build ESM
  execSync(`
    cross-env BABEL_ENV=esmUnbundled babel --config-file ./.babelrc.js ${target} --extensions '.ts','.tsx' --out-dir '${outEsm}' --source-maps
  `);

  console.log(`✅ Built ${p} ESM`);

  // Build CJS
  execSync(`
    cross-env BABEL_ENV=cjs babel --config-file ./.babelrc.js ${target} --extensions '.ts','.tsx' --out-dir '${outCjs}' --source-maps
  `);

  console.log(`✅ Built ${p} CJS`);

  // Build ts
  execSync(`
    tsc -p ./packages/${p}/tsconfig.json
  `);

  console.log(`✅ Built ${p} TS`);
}
