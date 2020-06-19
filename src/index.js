//710a4de4299c4cb5a8e40985d09c12b1
// https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=API-KEY
// Global app controller
 
import Search from './js/models/Search';

const search = new Search('pizza');
console.log(search);

search.getResults();