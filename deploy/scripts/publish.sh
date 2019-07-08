#!/bin/ash
REGISTRY=https://verdaccio.mathrix.fr
WORKSPACE_DIR=$(dirname $(dirname $(cd $(dirname $0) && pwd)))
DIST_DIR="${WORKSPACE_DIR}/node_modules/@mathrix/$1"

node ${WORKSPACE_DIR}/deploy/scripts/patch-version.js $1 $2
npm publish node_modules/@mathrix/$1 -f
