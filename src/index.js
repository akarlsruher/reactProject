import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyA0ghLpLd1XrxsiMRp79g6dLI0OlzjwJwQ';

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