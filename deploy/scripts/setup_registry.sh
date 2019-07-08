#!/usr/bin/env bash
WORKSPACE_DIR=$(dirname $(dirname $(cd $(dirname $0) && pwd)))
TOKEN=$(cat ${WORKSPACE_DIR}/deploy/scripts/verdaccio.mathrix.fr.txt)
npm config set //verdaccio.mathrix.fr/:_authToken \"${TOKEN}\"
npm config set //verdaccio.mathrix.fr/:always-auth true
