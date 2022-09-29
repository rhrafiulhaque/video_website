import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedVideos } from '../../features/relatedVideos/relatedVideosSlice';
import Loading from '../Loading';
import SingleRelatedVideo from './SingleRelatedVideo';

const RelatedVideos = ({currentVideoId,tags}) => {
    const dispatch = useDispatch();
    const {relatedVideos,isLoading,isError,errorMessage} = useSelector((state)=>state.relatedVideos)


    useEffect(()=>{
        dispatch(fetchRelatedVideos({id:currentVideoId, tags}));
    },[dispatch,currentVideoId,tags])

    let content = null;
    if(isLoading) content=  <Loading/>
    if(!isLoading && isError) content= <div className="col-span-12">{errorMessage}</div>
    if(!isLoading && !isError && relatedVideos?.length === 0) content= <div className="col-span-12">No video found!</div>
    if(!isLoading && !isError && relatedVideos?.length > 0){
        content= relatedVideos.map(video=><SingleRelatedVideo key={video.id} video={video}/>)
    } 


    return (
        <div
            className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
        >
            {/* <!-- single related video --> */}
            {content}
        </div>
    );
};

export default RelatedVideos;