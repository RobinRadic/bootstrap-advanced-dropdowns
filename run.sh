#!/usr/bin/env bash


preupdate(){
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
}

ghpages(){
    rm -rf demo
    grunt demo
    rm -rf gh-pages
    mkdir gh-pages
    cp -rf demo/* gh-pages
    cd gh-pages
    git init
    git remote add origin https://github.com/robinradic/bootstrap-advanced-dropdowns
    git checkout -b gh-pages
    git add -A
    git commit -m "ghpages"
    git push -u origin gh-pages -f
    cd ..
    rm -rf gh-pages
}


$*
