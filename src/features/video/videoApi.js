import axiox from "../../components/util/axios";

const getVideo = async (id)=>{
    const response = await axiox.get(`videos/${id}`);
    return response.data;
}

export default getVideo;