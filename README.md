# Installations

## Live-server

### Install live-server
```
yarn add global live-server   <!-- if doesn't work replace yarn with npm -->
```
### Run live-server
```
live-server {{folder name}}
```

## Babel-cli

### Install babel-cli 
```
yarn add global babel-cli@6.24.1   <!-- if doesn't work replace yarn with npm -->
```
### Install babel presets (react and env)
```
yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2   <!-- if doesn't work replace yarn with npm -->
```
### Run babel compiler and watch for file changes
```
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```