# Jules 개발 가이드

이 문서는 AI 에이전트 Jules가 프로젝트를 개발할 때 반드시 참고해야 할 지침을 담고 있습니다.

## 1. 기술 스택 (Tech Stack)

- **프레임워크/라이브러리:** React, Vite
- **라우팅:** `react-router-dom`
- **마크다운 렌더링:** `react-markdown`

## 2. 프로젝트 아키텍처 (Architecture)

- 이 프로젝트는 **Feature-Sliced Design (FSD)** 아키텍처를 따릅니다. 코드 작성 시 FSD의 원칙과 구조를 반드시 준수해야 합니다.

## 3. 개발 환경 설정 (Development Setup)

- **의존성 설치:** 프로젝트를 시작하기 전에 다음 명령어를 실행하여 모든 의존성을 설치해야 합니다.
  ```bash
  npm install
  ```
- **개발 서버 실행:** 로컬에서 개발 서버를 실행하려면 다음 명령어를 사용합니다.
  ```bash
  npm run dev
  ```

## 4. 콘텐츠 관리 (Content Management)

- **블로그 게시물:** 모든 블로그 게시물은 마크다운(`.md`) 파일 형식으로 작성되고 관리됩니다.

## 5. 배포 (Deployment)

- **배포 대상:** 이 프로젝트는 GitHub Pages를 통해 배포되는 것을 목표로 하는 단일 페이지 포트폴리오 블로그입니다.
- **배포 스크립트:** 배포 시에는 루트 디렉토리에 있는 `deploy.sh` 스크립트를 사용합니다.
- **Vite 설정:** `vite.config.js` 파일의 `base` 속성은 배포할 GitHub 레포지토리 이름과 일치하도록 정확하게 설정해야 합니다.

## 6. 언어 및 커뮤니케이션 (Language and Communication)

- **공식 언어:** 모든 사용자 대면 메시지, 코드 주석, `README.md` 파일을 포함한 모든 공식 문서는 **반드시 한국어(한글)**로 작성해야 합니다.
