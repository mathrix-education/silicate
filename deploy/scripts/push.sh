#!/usr/bin/env bash
WORKSPACE_DIR=$(dirname $(dirname $(cd $(dirname $0) && pwd)))
GIT_DIR="${WORKSPACE_DIR}/git/$1"
DIST_DIR="${WORKSPACE_DIR}/dist/$1"

# Clone the git repo from GitHub
mkdir -p ${GIT_DIR}
git clone git@github.com:mathrix-education/$1.git ${GIT_DIR}
cp -r ${DIST_DIR}/* ${GIT_DIR}
cd ${GIT_DIR}
git add .
git commit -m "chore(build): Build $2" \
  -m "See https://github.com/mathrix-education/silicate/commit/$2"
git push
