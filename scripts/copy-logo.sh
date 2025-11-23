#!/bin/sh
# Copy the provided logo into the project's public/images folder
# Usage: sh ./scripts/copy-logo.sh

set -e
SRC_PATH="/Users/pranavcs/Documents/moonsellerslogo.png"
DEST_DIR="public/images"
DEST_PATH="$DEST_DIR/moonsellers-logo.png"

if [ ! -f "$SRC_PATH" ]; then
  echo "Source file not found: $SRC_PATH"
  echo "Please make sure the file exists at that path, or update SRC_PATH in this script."
  exit 1
fi

mkdir -p "$DEST_DIR"
cp "$SRC_PATH" "$DEST_PATH"
chmod 644 "$DEST_PATH"

echo "Copied $SRC_PATH -> $DEST_PATH"
ls -l "$DEST_PATH"
