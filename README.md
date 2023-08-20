# ffvm (Ffmpeg Version Manager)

This is an nvm equivalent for ffmpeg. Automatically installs ffmpeg, ffprobe and ffplay based on your platform based on the builds at https://ffbinaries.com/

## Installation

Add the following to your bashrc or zshrc

``

// Option 1 (Alias ffvm commands)
alias ffmpeg = npx ffvm ffmpeg
alias ffprobe = npx ffvm ffprobe
alias ffplay = npx ffvm ffplay

// Option 2 (Usage as FFMPEG env vars, can be used for fluent-ffmpeg)
export FFMPEG_PATH = ~/.ffvm/current/ffmpeg
export FFPLAY_PATH = ~/.ffvm/current/ffplay
export FPROBE_PATH = ~/.ffvm/current/ffprobe

// Option 3: Add to path.
export PATH=$PATH:~/.ffvm/current/
``

## Usage

```
// Switch to correct ffmpeg version based on an `.ffrc` file.
ffvm switch

// Use a specific ffmpeg version
ffvm use 5.3.2

// Use your system wide default
ffvm use default

// Set a specific ffmpeg version to load when your shell starts
ffvm set default 5.3.2
```

## Configs

Configs are built using cosmiconfig, which means any format will work in the same way tools like prettier do.
The config will be found anywhere above the current working directory.
It can be any of the following

```
- package.json (as an ff property)
- .ffrc
- .ffrc.json
- .ffrc.yaml
- .ffrc.yml
- .ffrc.js
- .ffrc.mjs
- .ffrc.cjs
- ff.config.js
- ff.config.mjs
- ff.config.cjs
```

## Automatic switching

### Zsh

// TODO: https://github.com/nvm-sh/nvm#zsh
