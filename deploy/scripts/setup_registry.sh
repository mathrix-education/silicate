#!/bin/ash
WORKSPACE_DIR=$(dirname $(dirname $(cd $(dirname $0) && pwd)))
TOKEN=$(cat ${WORKSPACE_DIR}/deploy/registry/verdaccio.mathrix.fr.txt)
CMD="npm config set //verdaccio.mathrix.fr/:_authToken ${TOKEN}"
echo ${CMD}
$(${CMD})
