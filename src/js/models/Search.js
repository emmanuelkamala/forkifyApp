import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }


    async getResults() {
        const key = '710a4de4299c4cb5a8e40985d09c12b1';
        try {
            const res = await axios(`https://api.spoonacular.com/food/products/search?query=${this.query}&apiKey=${key}`);
            this.result = res.data.products;
            //console.log(this.result);
        } catch(error){
            alert(error);
        }
        
    }

}