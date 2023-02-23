/**
*  @swagger
*  tags:
*    name: User
*    description: 유저 관련 API 문서 입니다.
*/

/**
*  @swagger
*  paths:
*   /users:
*     get:
*       summary: 사용자 목록 조회
*       description: 등록된 사용자 목록을 조회합니다.
*       tags: [User]
*       responses:
*         "200":
*           description: 유저 목록
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   $ref: '#/components/schemas/User'
*     post:
*       summary: 신규 유저 등록
*       tags: [User]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/User'
*       responses:
*         "200":
*           description: 성공
*         "422":
*           description: 휴대 번호 인증번호 미인증.
*/

/** 
* @swagger
*     components:
*         schemas:
*             User:
*                 type: object
*                 required:
*                     - name
*                     - eamil
*                     - personal
*                     - prefer
*                     - pwd
*                     - phone
*                 properties:
*                     name:
*                         type: string
*                         description: 유저의 이름입니다.
*                         example: "싸이"
*                     email:
*                         type: string
*                         description: 유저의 이메일입니다.
*                         example: "completed0728@naver.com"
*                     personal:
*                         type: string
*                         description: 개인 고유 식별 번호입니다.
*                         example: "220728-1234567"
*                     prefer:
*                         type: string
*                         description: 오픈 그래프 데이터를 스크랩하여 프로필을 장식하기 위한 url 입니다.
*                         example: "http://naver.com"
*                     pwd:
*                         type: string
*                         description: 패스워드 입니다.
*                         example: "123456"
*                     phone:
*                         type: string
*                         description: 휴대전화 번호입니다.
*                         example: "01022223333"
*/