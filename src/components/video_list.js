import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) =>{
  //  const videos = props.videos;
  //className="col-md-4 list-group"
 const videoItems =  props.videos.map((video) =>{
      return( 
      <VideoListItem      //we will passing callback that is inside prop(prop is from APP) into VideoListItem 
       onVideoSelect={props.onVideoSelect} //we are taking the prop which coming from App and passing into VideoListItem so now VideoListItem has access to the property onVideoSelect
       key = {video.etag} 
       video ={video} />
      );
  });
    return (
    <ul >  
    {/* {props.videos.length}               */}
    {videoItems}
    </ul>
    );
};

export default VideoList;