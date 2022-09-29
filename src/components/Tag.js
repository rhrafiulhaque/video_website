import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tagRemoved, tagSelect } from '../features/filter/filter';

const Tag = ({ tag }) => {
    const dispatch = useDispatch();
    const { tags, search } = useSelector((state) => state.filters)
    const isSelected = tags.includes(tag?.title) ? true : false;

    const handleSelected = () => {
        if(isSelected){
            dispatch(tagRemoved(tag?.title));
        }else{
            dispatch(tagSelect(tag?.title));
        }
    }
    let style="";
    if(isSelected){
        style= "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer";
    }else{
        style = "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";
    }

    return (
        <div
            className={style}
            onClick={() => handleSelected()}
        >
            {tag.title}
        </div>
        // {/* <!-- selected --> */}
        // <div
        //     className="bg-blue-600 text-white px-4 py-1 rounded-full cu rsor-pointer"
        // >
        //     redux
        // </div>
    );
};

export default Tag;