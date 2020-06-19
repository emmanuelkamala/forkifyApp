
// Global app controller
 
import Search from './js/models/Search';
import * as searchView from './js/views/searchView';
import { elements } from './js/views/base';

const state = {};

const controlSearch = async () => {
   const query = searchView.getInput();
   console.log(query);

   if (query) {
       state.search = new Search(query);


      await state.search.getResults();

      console.log(state.search.result);
   }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
})


