# 기술 스택
<div style="display:flex; flex-wrap:wrap; gap:10px;">
<img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white"/> 
<img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=Docker&logoColor=white"/>
<img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white"/>
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=white"/>
</div>

## lib
- Backend Server

  - express, nodemon, axios, mongoose, coolsms-node-sdk, nodemailer, swagger-ui-express, swagger-jsdocs, dotenv, cors
  
- MongoDB Server

  - cheerio, pupetteer, mongoose

<br/>
<br/>

## 구현 기능

- 사용자
  - 사용자 등록
    - 사용자 입력 데이터 prefer 사이트 데이터 스크래핑 (og:title, og:description, og:image 저장)
    - 가입 성공 메일 전송
  - 사용자 목록 조회

- 토큰
  - 사용자 가입 시 인증토큰 발급 - SMS 인증번호 전송
  - 사용자 가입 시 인증토큰 인증 - 인증상태 업데이트

- 스타벅스
  - 스타벅스 데이터 크롤링 및 데이터 저장
  - 스타벅스 데이터 목록 조회

<br/>
<br/>

## 파이프라인 구성도

![스크린샷 2023-02-24 오전 3 56 51](https://user-images.githubusercontent.com/54789601/221003998-fac3b95c-b801-4c4e-a694-e1466d677084.png)

## Swagger 문서

![스크린샷 2023-02-24 오전 3 39 53](https://user-images.githubusercontent.com/54789601/221001472-3242151f-2ec5-493c-9f2b-b0b8a5e17307.png)

## MongoDB 조회

![스크린샷 2023-02-24 오전 3 40 13](https://user-images.githubusercontent.com/54789601/221001516-e41fb581-1ddf-4b06-99af-4317f61f7906.png)

## Postman API

![스크린샷 2023-02-24 오전 3 45 15](https://user-images.githubusercontent.com/54789601/221001535-f40f3e2c-994f-4f0b-bd05-589359fcd9ff.png)
