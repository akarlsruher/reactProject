import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCzhtakiKoBaZIZkKJ7u737_64jm0sLa_k';

//Create a new component.  This component should produce some HTML.
class App extends Component {
	constructor(props) {
		super(props);

		//initialize state with empty object
		this.state = { 
			videos: [],
			selectedVideo: null
			};

		this.videoSearch('surfboards');
	}

	videoSearch(term){
		YTSearch({key: API_KEY, term: term}, (videos) => {
			//console.log(data);
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
		});		
	}

	render() {

		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos} />
			</div>
		);
	}
}



//Take this component's generate HTML and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));  //render the component (App), and put it in the container on index.html