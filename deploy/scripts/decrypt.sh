#!/usr/bin/env bash
# -------------------
# Decrypt the SSH key
# -------------------
#gcloud kms decrypt \
#  --ciphertext-file=deploy/ssh/id_ed25519.enc \
#  --plaintext-file=/root/.ssh/id_ed25519 \
#  --location=global \
#  --keyring=librairies-keyring \
#  --key=silicate-key

gcloud kms decrypt \
  --ciphertext-file=deploy/ssh/verdaccio.mathrix.fr.txt.enc \
  --plaintext-file=deploy/ssh/verdaccio.mathrix.fr.txt \
  --location=global \
  --keyring=librairies-keyring \
  --key=silicate-key
