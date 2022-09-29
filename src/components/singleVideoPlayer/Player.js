import React from 'react';
import LikeIcon from '../../assets/like.svg'; 
import UnLikeIcon from '../../assets/unlike.svg'; 
import { reactionUpdate } from '../../features/likeUnlike/likeUnlikeSlice';

const Player = ({video}) => {
    const{id, title,description,date,link,likes,unlikes}= video;

    const handleReaction = (id, reaction)=>{
        reactionUpdate(id,reaction);
    }
    return (
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
            {/* <!-- video player --> */}
            <iframe
                width="100%"
                className="aspect-video"
                src={link}
                title={title}
                frameBorder=""
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>

            {/* <!-- video description --> */}
            <div>
                <h1
                    className="text-lg font-semibold tracking-tight text-slate-800"
                >
                    {title}
                </h1>
                <div
                    className="pb-4 flex items-center space-between border-b"
                >
                    <h2
                        className="text-sm leading-[1.7142857] text-slate-600 w-full"
                    >
                        Uploaded on {date}
                    </h2>

                    {/* <!-- like/unlike --> */}
                    <div className="flex gap-10 w-48">
                        <div className="flex gap-1">
                            <div className="shrink-0">
                                <img
                                    className="w-5 block cursor-pointer"
                                    src={LikeIcon}
                                    alt="Like"
                                    onClick={()=>handleReaction(id,'like')}
                                />
                            </div>
                            <div
                                className="text-sm leading-[1.7142857] text-slate-600 "
                            >
                                {likes}
                            </div>
                        </div>
                        <div className="flex gap-1">
                            <div className="shrink-0">
                                <img
                                    className="w-5 block cursor-pointer"
                                    src={UnLikeIcon}
                                    alt="Unlike"
                                    onClick={()=>handleReaction(id,'unlike')}
                                />
                            </div>
                            <div
                                className="text-sm leading-[1.7142857] text-slate-600 "
                            >
                                {unlikes}
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="mt-4 text-sm text-[#334155] dark:text-slate-400"
                >
                    {description}
                </div>
            </div>
        </div>
    );
};

export default Player;

