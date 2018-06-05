import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {   //instead of props we will use ES6 to access video dirrectly by using {video}
  // const video = props.video;   //inside video_list.js when we created a VideListItem we passed in the "video" as property video which is {video}, so we need this video inside video_list_itme by props.video
   //const onVideoSelect = props.onVideoSelect
   console.log(video);   //we will get separate console log for each video
  
  const imageUrl = video.snippet.thumbnails.default.url;
  return(                               
   <li  onClick={ () => onVideoSelect(video)} className="list-group-item">   
     <div className="video-list-media">
       <div className="media-left">
          <img className="media-object" src ={imageUrl} />
     </div>
     <div className ="media-body">
       <div className="media-heading"> {video.snippet.title}</div>
       </div>
       </div>
   </li>
  );
};

export default VideoListItem;