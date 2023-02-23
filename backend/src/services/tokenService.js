import { Token } from "../models/token.model.js"
import { sendSMS } from "./userService.js";



export async function tockenCheck (phone, res) {
    const findToken = await Token.findOne({phone})
    if(!findToken || !findToken.isAuth ){
        res.status(422).send("에러:: 핸드폰 번호가 인증되지 않았습니다.")
        return false;
    }
}

export async function createTokenUser(phone){
    const findToken = await Token.findOne({phone});

    if(findToken){
        findToken.token = createToken();
        await findToken.save();
        await sendSMS(findToken);
    }else{
        const newToken = new Token({
            token: createToken(),
            isAuth: false,
            phone: phone,
        });
        await newToken.save();
        await sendSMS(newToken);
    }
}

function createToken(size = 6){
    return String(Math.floor(Math.random() * Math.pow(10, size), size)).padStart(0, size);
}

export async function updateTokenAuth(token, phone){
    try {
        const findToken = await Token.findOne({phone})
        if(!findToken) return { rslt: 'FAIL', message: 'SMS로 인증번호를 발급해주세요'};
        if(findToken.token !== token) return { rslt: 'FAIL', message: '토큰 번호가 일치하지 않습니다.'};
        findToken.isAuth = true;
        findToken.save();
        return { rslt: 'SUCC', message: '인증이 완료되었습니다.'};
    } catch (error) {
        console.error(error);
    }
}