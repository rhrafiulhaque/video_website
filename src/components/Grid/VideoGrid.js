import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../../features/videos/videoSLice';
import Loading from '../Loading';
import SingleVideoItem from './SingleVideoItem';

const VideoGrid = () => {

    const dispatch = useDispatch();
    const {tags,search} = useSelector(state=>state.filters)
    const {videos,isLoading,isError, errorMessage} = useSelector((state)=>state.videos);

    

    useEffect(()=>{
        dispatch(fetchVideos({tags,search}));
    },[dispatch,tags,search]);

    let content;

    if (isLoading) content = <Loading />;
    if (!isLoading && isError)
        content = <div className="col-span-12">{errorMessage}</div>;

    if (!isError && !isLoading && videos?.length === 0) {
        content = <div className="col-span-12">No videos found!</div>;
    }

    if (!isError && !isLoading && videos?.length > 0) {
        content = videos.map((video) => (
            <SingleVideoItem key={video.id} video={video} />
        ));
    }
    return (
        <section className="pt-12">
            <section className="pt-12">
                <div
                    className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
                >
                    {/* <!-- single video --> */}
                    {content}
                    {/* <!-- error section
                    <div className="col-span-12">some error happened</div> --> */}
                </div>
            </section>
        </section>
    );
};

export default VideoGrid;