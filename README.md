## Installing
```
yarn add @tannerjs/scheme-ui
```
or
```
npm i @tannerjs/scheme-ui
```

## Storybook
```
yarn storybook
```

### Publishing
Build the packages:
```
cd packages/scheme-ui
yarn run build
```

## Publishing tailwind
1. Make changes to specific `package`, update `package.json` version.
```
yarn run buildjs --packages [package-name]
```
2. In package directory
```
npm publish --access=public
```

## Publishing storybook
Build the Storybook static files:
```
yarn run build-storybook
```
Deploy to Github pages:
```
yarn run deploy-storybook
```