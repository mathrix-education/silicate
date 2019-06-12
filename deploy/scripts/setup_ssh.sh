#!/usr/bin/env bash
# -------------------------
# Setup the SSH environment
# -------------------------
chmod 600 /root/.ssh/id_ed25519
cat <<EOF >/root/.ssh/config
Hostname github.com
IdentityFile /root/.ssh/id_ed25519
EOF
git config --global user.name "CloudBuild Bot"
git config --global user.email "cloudbuild@mathrix.fr"
mv deploy/ssh/known_hosts /root/.ssh/known_hosts
