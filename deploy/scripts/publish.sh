#!/bin/ash
REGISTRY=https://verdaccio.mathrix.fr
WORKSPACE_DIR=$(dirname $(dirname $(cd $(dirname $0) && pwd)))
DIST_DIR="${WORKSPACE_DIR}/node_modules/@mathrix/$1"

yarn publish node_modules/@mathrix/$1 --new-version $2 --registry ${REGISTRY}
