import { configureStore } from '@reduxjs/toolkit';
import videosReducer from '../features/videos/videoSLice';
import tagsReducer from '../features/tags/tagsSlice';
import videoReducer from '../features/video/videoSlice';
import relatedVideosReducer from '../features/relatedVideos/relatedVideosSlice'
import filterSliceReducer from '../features/filter/filter'

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagsReducer,
    video: videoReducer,
    relatedVideos: relatedVideosReducer,
    filters : filterSliceReducer,
            
  },
});
