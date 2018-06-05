import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from "./components/search_bar";
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyCsQ0jkJ3a7Cs7qgVdTZy0jeZD3fIhlp8w';



//Create a new component. this component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: []};       //videos is a property name of state and it is array of list or object          
  
    YTSearch(
      {key: API_KEY, term: 'surfboards'}, (videos) => {       
      this.setState({ videos });   //when first time app pops up user will get some list of videos.we set state to data(list of videos)
      console.log(videos);                                   //here key is videos and values is data for setState.
   });                                  
}
  
render(){
  return(
    <div>
        <SearchBar />
        <VideoList videos ={this.state.videos} />
    </div>
  );
}
}

//Take this components's generated HTML and put it on the page (in the DOM)

ReactDOM.render(
    <App />,
  document.getElementById("root")
)
 