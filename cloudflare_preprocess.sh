#!/usr/bin/env bash

SEARCH_STRING="/abdellaui.github.io/"
REPLACE_STRING="/"

find . -type f \( -name "*.html" -o -name "*.txt" -o -name "*.xml" -o -name "*.xsl" \) -exec sed -i "s|${SEARCH_STRING}|${REPLACE_STRING}|g" {} \;

echo "String replacement completed!"
