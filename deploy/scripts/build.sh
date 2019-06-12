#!/usr/bin/env bash
WORKSPACE_DIR=$(dirname $(dirname $(cd $(dirname $0) && pwd)))
DIST_DIR="${WORKSPACE_DIR}/dist/$1"
NODE_MODULES_DIR="${WORKSPACE_DIR}/node_modules/@mathrix/$1"

cd ${WORKSPACE_DIR}

ng build $1

# Copy the build module to the node_modules
rm -rf ${NODE_MODULES_DIR}
echo "Copying: ${DIST_DIR} -> ${NODE_MODULES_DIR}"
mkdir -p ${NODE_MODULES_DIR}
cp -rf ${DIST_DIR}/* ${NODE_MODULES_DIR}
