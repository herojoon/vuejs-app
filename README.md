# vuejs-app

### 프로젝트 스펙

* Spring Framework: Spring Boot 2.6.6
* Build: Gradle 6.9.2
* Java: JDK 11
* Front: Vue 2 / Node.js 14.17.6 / NPM 6.14.15

### 코드 참고

Spring Boot + Vue Project One Build 설정:

* node download 및 npm build 명령어 추가: project root / buid.gradle참고
* Vue 프로젝트의 빌드 결과물 위치 변경 설정: project root / vue-project / config / index.js참고


Vue 프로젝트 History Mode View Mapping 설정:

* mode에 history 설정: project root / vue-project / router / index.js참고
* View Mapping 설정: project root / src / main / java / packages.. / controller / WebController참고

### Node Plugin 참고 링크

* https://github.com/node-gradle/gradle-node-plugin/blob/3.2.1/docs/usage.md

### Vue 프로젝트 정보

* Vue 프로젝트 생성 방법: https://herojoon-dev.tistory.com/128
* Vue 프로젝트 실행 방법(project root / vue-project 위치에서 명령어 실행 - node, npm이 설치 되어 있어야 함.): npm run dev
