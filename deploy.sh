#!/usr/bin/env sh

# 오류 발생 시 중단
set -e

# 빌드
npm run build

# 빌드 출력 디렉터리로 이동
cd dist

# 사용자 지정 도메인에 배포하는 경우
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# https://<USERNAME>.github.io에 배포하는 경우
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# https://<USERNAME>.github.io/<REPO>에 배포하는 경우
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -
