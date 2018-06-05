import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) =>{
  //  const videos = props.videos;
  //className="col-md-4 list-group"
 const videoItems =  props.videos.map((video) =>{
      return <VideoListItem key = {video.etag} video ={video} />
  });
    return (
    <ul >  
    {/* {props.videos.length}               */}
    {videoItems}
    </ul>
    );
};

export default VideoList;