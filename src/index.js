import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCzhtakiKoBaZIZkKJ7u737_64jm0sLa_k';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
	console.log(data);
});

//Create a new component.  This component should produce some HTML.
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}



//Take this component's generate HTML and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));  //render the component (App), and put it in the container on index.html