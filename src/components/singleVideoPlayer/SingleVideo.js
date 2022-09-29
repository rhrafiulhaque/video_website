import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchvideo } from '../../features/video/videoSlice';
import Loading from '../Loading';
import Player from './Player';
import RelatedVideos from './RelatedVideos';

const SingleVideo = () => {
    const { videoId } = useParams();
    const dispatch = useDispatch();
    const { video, isError, isLoading, errorMessage } = useSelector((state) => state.video)


    useEffect(() => {
        dispatch(fetchvideo(videoId));
    }, [dispatch, videoId])

    let content = null;
    if (isLoading) content = <Loading />
    if (!isLoading && isError) content = errorMessage;
    if (!isLoading && !isError && !video?.id) content = <div className="col-span-12">No video found!</div>;
    if (!isLoading && !isError && video?.id) {
        content = (
            <div className="grid grid-cols-3 gap-2 lg:gap-8">
                <Player key={videoId} video = {video} />

                {/* <!-- related videos --> */}
                <RelatedVideos currentVideoId={videoId} tags={video?.tags} />

            </div>
        )
    }



    return (
        <section className="pt-6 pb-20">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                {content}
            </div>
        </section>

    );
};

export default SingleVideo;