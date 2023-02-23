import { StarBucks } from '../models/starbucks.model.js'

export async function getStarbucks () {
    try {
        return await StarBucks.find();
    } catch (error) {
        console.error(error);
    }
}