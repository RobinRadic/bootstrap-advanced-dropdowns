#!/usr/bin/env bash
grunt build
git add -A
git commit -m "pre-tag build"

git_current_branch(){
    branch_name=$(git symbolic-ref -q HEAD)
    branch_name=${branch_name##refs/heads/}
    branch_name=${branch_name:-HEAD}
    echo "${branch_name}"
}

git push -u origin "$(git_current_branch)"