import axios from "../../components/util/axios";

const getRelatedVideos = async ({id, tags})=>{
    const limit = 5;
    const queryString = tags.map(tag=>`tags_like=${tag}`).join('&')+`&id_ne=${id}`+`&limit=${limit}`;
    const response = await axios.get(`videos?${queryString}`)
    return response.data;
};

export default getRelatedVideos;
