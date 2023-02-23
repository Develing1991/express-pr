import mongoose from 'mongoose';
//  mongoose.connect('mongodb://localhost:27017/devlee');
export default async function (){
    try {
        await mongoose.connect('mongodb://database:27017/devlee');
        console.log('Mongo DB Connected!');    
    } catch (error) {
        console.error('Mongo DB Connect fail...');    
        console.error(error);
    }
    
}