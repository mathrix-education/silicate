#!/usr/bin/env bash
# -------------------
# Decrypt the SSH key
# -------------------
gcloud kms decrypt \
  --ciphertext-file=deploy/ssh/id_25519.enc \
  --plaintext-file=/root/.ssh/id_25519 \
  --location=global \
  --keyring=librairies-keyring \
  --key=silicate-key
