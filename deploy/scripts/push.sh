#!/usr/bin/env bash
WORKSPACE_DIR=$(dirname $(dirname $(cd $(dirname $0) && pwd)))
DIST_DIR="${WORKSPACE_DIR}/dist/$1"

# Clone the git repo from GitHub
mv ${DIST_DIR} /tmp/$1
git clone git@github.com:mathrix-education/$1.git ${DIST_DIR}
mv /tmp/$1/* ${DIST_DIR}/
rm -rf /tmp/$1
cd ${DIST_DIR}
git add .
git commit -m "chore(build): Build ${SHORT_SHA}" \
  -m "See https://github.com/mathrix-education/silicate/commit/${COMMIT_SHA}"
git push
