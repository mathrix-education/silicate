#!/usr/bin/env bash
libs=$(ls dist/)

for lib in ${libs}
do
  cd dist/${lib}
  yarn unlink
  yarn link
  cd ../..
  yarn link "@mathrix/${lib}"
done

