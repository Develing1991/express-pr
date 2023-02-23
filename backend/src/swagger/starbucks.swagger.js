/**
*  @swagger
*  tags:
*    name: Starbucks
*    description: 크롤링 저장 된 스타벅스 데이터 관련 API 문서 입니다.
*/

/**
*  @swagger
*  paths:
*   /starbucks:
*     get:
*       summary: 스타벅스 목록 조회
*       description: 스타벅스 목록을 조회합니다.
*       tags: [Starbucks]
*       responses:
*         "200":
*           description: 스타벅스 목록
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   $ref: '#/components/schemas/Starbucks'
*/

/** 
* @swagger
*     components:
*         schemas:
*             Starbucks:
*                 type: object
*                 required:
*                     - name
*                     - image
*                 properties:
*                     name:
*                         type: string
*                         description: 스타벅스 상품 이름입니다.
*                         example: "콜드브루"
*                     image:
*                         type: string
*                         description: 스타벅스 상품 이미지 url입니다.
*                         example: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg"
*/
