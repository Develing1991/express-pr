import puppeteer from "puppeteer";
import * as cheerio from 'cheerio';
import mongoose from "mongoose";
import { StarBucks } from "./models/starbucks.model.js";

mongoose.set("strictQuery", false);
await mongoose.connect('mongodb://localhost:27017/devlee');

( async ()=>{
    const browser = await puppeteer.launch(); // default { headless: true }
    const page = await browser.newPage(); // custom browser window size : {width: 1280, height: 300}

    await page.goto('https://www.starbucks.co.kr/menu/drink_list.do');
    await new Promise(r => setTimeout(r, 1000));

    const content = await page.content();
    const $ = cheerio.load(content);
    const ddEls = $('#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd');
    ddEls.each((_, ddEl)=>{
        const liEls = $(ddEl).find('> ul > li');
        
        liEls.each(async (_, liEl) => {
            const img = $(liEl).find('> dl > dt > a > img').attr('src');
            const name = $(liEl).find('> dl > dd').text();
            
            const starBucks = new StarBucks({
                img,
                name
            })
            await starBucks.save();
        })
    })

    // const liEls = $('#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(2) > ul > li');
    // liEls.each(async (_, liEl) => {
    //     const img = $(liEl).find('> dl > dt > a > img').attr('src');
    //     const name = $(liEl).find('> dl > dd').text();
        
    //     const starBucks = new StarBucks({
    //         img,
    //         name
    //     })
    //     await starBucks.save();
    // })
   
    await browser.close();                                   
})
();

