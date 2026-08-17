#!/bin/bash

# Claude Code が編集禁止ファイルを変更しようとした際にブロックするフック
# exit 0: 許可, exit 2: ブロック

FILE_PATH=$(cat | jq -r '.tool_input.file_path // .tool_input.command // empty')

if [ -z "$FILE_PATH" ]; then
  exit 0
fi

# Astro のビルド出力・キャッシュ（public/ は手書きの静的ファイル置き場なので対象外）
if [[ "$FILE_PATH" == */dist/* ]] || [[ "$FILE_PATH" == *"/.astro/"* ]]; then
  echo "Astro のビルド出力／キャッシュです。直接編集しないでください（yarn build で再生成されます）。" >&2
  exit 2
fi

# node_modules
if [[ "$FILE_PATH" == *"/node_modules/"* ]]; then
  echo "node_modules 内のファイルは直接編集しないでください。" >&2
  exit 2
fi

# yarn.lock (yarn install で自動管理)
if [[ "$FILE_PATH" == *"/yarn.lock" ]]; then
  echo "yarn.lock は直接編集しないでください。yarn install / yarn add で管理してください。" >&2
  exit 2
fi

exit 0
