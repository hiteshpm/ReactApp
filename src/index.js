import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from "./components/search_bar";
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const API_KEY = 'AIzaSyCsQ0jkJ3a7Cs7qgVdTZy0jeZD3fIhlp8w';



//Create a new component. this component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [] ,      //videos is a property name of state and it is array of list or object      
      selectedVideo:null
    };           
  
    YTSearch(
      {key: API_KEY, term: 'surfboards'}, (videos) => {       //when first time app pops up user will get some list of videos.we set state to data(list of videos)
      this.setState({ 
        videos:videos,                              //here key is videos and values is data for setState.
        selectedVideo:videos[0]     //we need to play first video in search result
      });   
      console.log(videos);                                   
   });                                  
}
  
render(){
  return(
    <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
           onVideoSelect={selectedVideo => this.setState({selectedVideo})}  //callback function takes a video and update state on app and it update the selected videos.
           videos ={this.state.videos} />
    </div>
  );
}
}

//Take this components's generated HTML and put it on the page (in the DOM)

ReactDOM.render(
    <App />,
  document.getElementById("root")
)
 