import axios from 'axios';
import * as cheerio from 'cheerio';
import nodemailer from 'nodemailer';

import { User } from '../models/user.model.js'
import coolsmsSdk from 'coolsms-node-sdk';
const coolsms = coolsmsSdk.default;


export async function userOGProfile(prefer){
    const preferHtml = await axios.get(prefer);
    
    const $ = cheerio.load(preferHtml.data);
    let og = {
        title:'',
        description:'',
        image:''
    }
    
    $('meta').each((_, el)=>{
        if($(el).attr("property")){
            const [, key] = $(el).attr('property').split(":")
            const value = $(el).attr('content')
            console.log(`${key}: ${value}`);
            
            if(Object.keys(og).includes(key)){
                og = {
                    ...og,
                    [key]: value
                }
            }
        }
    })
    console.log(og);
    return og;
}

export async function createUser(og, user){
    try {
        const newUser = new User({
            og,
            ...user,
            personal:user.personal.split("-")[0]+"-*******",
        })
        await newUser.save();    
        return newUser.id;
    } catch (error) {
        console.error(error);
    }
}

export async function sendEmail(email){
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;
    const EMAIL_SENDER = process.env.EMAIL_SENDER;
    const transport = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS
        }
    })
    const result = await transport.sendMail({
        from: EMAIL_SENDER,
        to: email,
        subject: "가입 완료되었스빈다.",
        html: `<h1>가입완료 !</h1>`
    })
}

export async function getUsers(){
    return await User.find();
}


export async function sendSMS({phone, token}){
    // apiKey, apiSecret 설정

    const SMS_KEY = process.env.SMS_KEY;
    const SMS_SECRET_KEY = process.env.SMS_SECRET_KEY;
    const SMS_SENDER = process.env.SMS_SENDER;

    const messageService = new coolsms(SMS_KEY, SMS_SECRET_KEY);

    try {
        const res = await messageService.sendOne({
            to: phone,
            from: SMS_SENDER,
            text: `인증번호를 입력해주세요. [${token}]`
        })
        return res;
    } catch (error) {
        console.error('문자 전송 실패');
    }
}
