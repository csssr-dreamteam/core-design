#!/bin/sh
trap "exit" INT

if [ "$TRAVIS_PULL_REQUEST" = "false" ]; then
  git config --global user.email ${GITHUB_EMAIL}
  git config --global user.name ${GITHUB_USER}

  git checkout master

  git remote set-url origin "https://${GITHUB_TOKEN}@github.com/csssr/core-design.git" > /dev/null 2>&1

  ./node_modules/.bin/lerna version --conventional-commits --no-changelog --yes
fi
