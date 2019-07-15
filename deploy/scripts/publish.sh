#!/bin/ash

REGISTRY=https://verdaccio.mathrix.fr
WORKSPACE_DIR=$(dirname $(dirname $(cd $(dirname $0) && pwd)))

while getopts ":p:c:t:" opt; do
  case ${opt} in
    p)
      project=${OPTARG}
      ;;
    c)
      commit=${OPTARG}
      ;;
    t)
      tag=${OPTARG}
      ;;
    \?)
      echo "Invalid option: -$OPTARG"
      ;;
  esac
done

DIST_DIR="${WORKSPACE_DIR}/node_modules/@mathrix/${project}"

if [[ ! -z ${tag} ]]
then
  # We will deploy a stable version
  npm publish node_modules/@mathrix/${project} --tag v${tag}
else
  # We will deploy a latest version
  node ${WORKSPACE_DIR}/deploy/scripts/patch-version.js ${project} ${commit}
  npm publish node_modules/@mathrix/${project} --tag latest
fi

