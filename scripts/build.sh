#!/usr/bin/env bash
libs=$(ls src/)

for lib in ${libs}
do
  ng build ${lib}
done
