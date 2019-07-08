#!/usr/bin/env bash
# -------------------
# Decrypt the SSH key
# -------------------
gcloud kms decrypt \
  --ciphertext-file=deploy/registry/verdaccio.mathrix.fr.txt.enc \
  --plaintext-file=deploy/registry/verdaccio.mathrix.fr.txt \
  --location=global \
  --keyring=librairies-keyring \
  --key=silicate-key
