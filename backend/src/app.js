import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc'

import mongodbLoader from './loaders/mongodbLoader.js';
import { createUser, getUsers, sendEmail, userOGProfile } from './services/userService.js';
import { createTokenUser, tockenCheck, updateTokenAuth } from './services/tokenService.js';
import { getStarbucks } from './services/starbucksService.js';
import { swaggerOptions } from './swagger/option.js';

dotenv.config();

const app = express();
const port = 3000;
const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use(cors({
    origin: 'http://127.0.0.1:5500'
}))
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/users', async (req, res)=>{
    const users = await getUsers();
    res.send(users);
})

app.post('/users', async (req, res)=>{
    const user = req.body;
    const {prefer, phone, email} = user;
    
    // 인증번호 확인여부 
    await tockenCheck(phone, res);
    
    // user og 추출
    const og = await userOGProfile(prefer);
    // 유저 저장
    const _id = await createUser(og, user);

    // 성공메일 전송
    await sendEmail(email);
    
    // 응답 user._id
    res.send(_id);
})



// token
app.post('/tokens/phone', async (req, res)=>{
    const { phone } = req.body;
    await createTokenUser(phone);
    res.send("핸드폰으로 인증 문자가 전송되었습니다!");
})

// token auth
app.patch('/tokens/phone', async (req, res)=>{
    const { token, phone } = req.body;
    const rslt = await updateTokenAuth(token, phone);
    res.send(rslt);
})

// starbucks
app.get('/starbucks', async (req, res)=>{
    const rslt = await getStarbucks();
    res.send(rslt);
})



await mongodbLoader();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})