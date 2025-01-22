#!/bin/sh

PACKAGE_JSON="data/package.json"
REQUIREMENTS_TXT="data/requirements.txt"

if [ -f "$PACKAGE_JSON" ]; then
    npm i -g
fi

if [ -f "$REQUIREMENTS_TXT" ]; then
    pip install --no-cache-dir -r "$REQUIREMENTS_TXT"
fi

./xuanwu