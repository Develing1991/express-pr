/**
*  @swagger
*  tags:
*    name: Token
*    description: 인증 관련 API 문서 입니다.
*/

/**
*  @swagger
*  paths:
*   /tokens/phone:
*     post:
*       summary: 휴대폰 인증 토큰 전송
*       description: 휴대폰 SMS로 인증번호 6자리를 전송합니다.
*       tags: [Token]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Phone'
*       responses:
*         "200":
*           description: "핸드폰으로 인증 문자가 전송되었습니다!"
*     patch:
*       summary: 휴대폰 인증 토큰 입력 인증처리
*       tags: [Token]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Token'
*       responses:
*         "200":
*           description: 성공
*/


/** 
* @swagger
*     components:
*         schemas:
*             Token:
*                 type: object
*                 required:
*                     - token
*                     - phone
*                     - isAuth
*                 properties:
*                     token:
*                         type: string
*                         description: 유저에게 발급된 토큰 입니다.
*                         example: "234567"
*                     phone:
*                         type: string
*                         description: 유저의 휴대폰번호 입니다.
*                         example: "01022223333"
*/

/** 
* @swagger
*     components:
*         schemas:
*             Phone:
*                 type: object
*                 required:
*                     - phone
*                 properties:
*                     phone:
*                         type: string
*                         description: 유저의 휴대폰번호 입니다.
*                         example: "01022223333"
*/