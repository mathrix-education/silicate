#!/usr/bin/env bash
yarn install
libs=$(ls dist/)
for lib in ${libs}
do
  yarn --cwd "dist/${lib}" install
done

