#!/bin/bash

# Claude Code が編集禁止ファイルを変更しようとした際にブロックするフック
# exit 0: 許可, exit 2: ブロック

FILE_PATH=$(cat | jq -r '.tool_input.file_path // .tool_input.command // empty')

if [ -z "$FILE_PATH" ]; then
  exit 0
fi

# Gatsby 自動生成ディレクトリ
if [[ "$FILE_PATH" == *"/.cache/"* ]] || [[ "$FILE_PATH" == */public/* ]]; then
  echo "Gatsby が自動生成するディレクトリです。直接編集しないでください。" >&2
  exit 2
fi

# node_modules
if [[ "$FILE_PATH" == *"/node_modules/"* ]]; then
  echo "node_modules 内のファイルは直接編集しないでください。" >&2
  exit 2
fi

# サードパーティ SCSS ライブラリ (skel.scss)
if [[ "$FILE_PATH" == *"/scss/libs/_skel.scss" ]]; then
  echo "skel.scss はサードパーティライブラリです。直接編集しないでください。Sass の警告は gatsby-config.js の silenceDeprecations で対処してください。" >&2
  exit 2
fi

# 静的 CSS (font-awesome 等)
if [[ "$FILE_PATH" == *"/assets/css/"* ]]; then
  echo "assets/css/ 内はサードパーティの静的 CSS です。直接編集しないでください。" >&2
  exit 2
fi

# yarn.lock (yarn install で自動管理)
if [[ "$FILE_PATH" == *"/yarn.lock" ]]; then
  echo "yarn.lock は直接編集しないでください。yarn install / yarn add で管理してください。" >&2
  exit 2
fi

exit 0
