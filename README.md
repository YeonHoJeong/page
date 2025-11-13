# 포트폴리오 블로그

이 프로젝트는 React와 Vite를 사용하여 구축된 단일 페이지 포트폴리오 블로그입니다. FSD(Feature-Sliced Design) 아키텍처를 따르며 Markdown 파일을 사용하여 블로그 게시물을 작성합니다.

## 주요 기술

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [React Markdown](https://github.com/remarkjs/react-markdown)
- [FSD (Feature-Sliced Design)](https://feature-sliced.design/)

## 시작하기

### 설치

저장소를 복제하고 종속성을 설치합니다.

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

### 빌드

프로덕션을 위해 애플리케이션을 빌드하려면 다음을 실행합니다.

```bash
npm run build
```

## GitHub Pages에 배포

이 프로젝트는 GitHub Pages에 배포되도록 구성되어 있습니다.

1.  `vite.config.js` 파일에서 `base` 속성을 GitHub 저장소 이름으로 업데이트합니다.

    ```js
    // vite.config.js
    export default defineConfig({
      plugins: [react()],
      base: '/<your-repo-name>/',
    });
    ```

2.  `deploy.sh` 스크립트를 실행합니다.

    ```bash
    ./deploy.sh
    ```

    이 스크립트는 프로젝트를 빌드하고 빌드된 파일을 `gh-pages` 브랜치에 푸시합니다.
