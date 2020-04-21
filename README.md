[![Build Status](https://travis-ci.org/dotenorio/clipboard-manager-electron.svg?branch=master)](https://travis-ci.org/dotenorio/clipboard-manager-electron)

# Clipboard Manager Electron
A clipboard manager built with Electron

_Preview Windows_

![Preview Windows](https://i.imgur.com/2i26dTv.png)

_Preview Linux Ubuntu 18.10_

![Preview Linux Ubuntu 18.10](https://i.imgur.com/gXMOIXe.png)

_Preview MacOS_

![Preview MacOS](https://i.imgur.com/CSLIxl2.png)

## Windows

### How to do a Windown build (You can go with either Yarn build or Npm build) 
#### Yarn Build

```
$ git clone https://github.com/dotenorio/clipboard-manager-electron.git
$ cd clipboard-manager-electron
$ yarn
$ yarn build --win
```
#### NPM build
```
$ git clone https://github.com/dotenorio/clipboard-manager-electron.git
$ cd clipboard-manager-electron
$ npm install
$ npm run dist
```

Go to folder `dist` and execute the `clipboard-manager-electron X.X.X.exe` or `clipboard-manager-electron Setup X.X.X.exe` and be happy.

## Linux

### How to do a Linux build (You can go with either Yarn build or Npm build)
#### Yarn Build

```
$ git clone https://github.com/dotenorio/clipboard-manager-electron.git
$ cd clipboard-manager-electron
$ yarn
$ yarn build --linux
```

#### NPM build
```
$ git clone https://github.com/dotenorio/clipboard-manager-electron.git
$ cd clipboard-manager-electron
$ npm install
$ npm run dist
```

Go to folder `dist/` and execute the `clipboard-manager-electron_X.X.X_<arch>.deb` or `clipboard-manager-electron_X.X.X_<arch>.rpm` and be happy.

## Mac

### How to do a Mac build (You can go with either Yarn build or Npm build)
#### Yarn Build
```
$ git clone https://github.com/dotenorio/clipboard-manager-electron.git
$ cd clipboard-manager-electron
$ yarn
$ yarn build --mac
```

#### NPM build
```
$ git clone https://github.com/dotenorio/clipboard-manager-electron.git
$ cd clipboard-manager-electron
$ npm install
$ npm run dist
```

Go to folder `dist` and execute the `clipboard-manager-electron-X.X.X.dmg` and be happy.

## Releases

### Download latest release

If don´t want do a build, you can download the [latest release](https://github.com/dotenorio/clipboard-manager-electron/releases/latest)!
