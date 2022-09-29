import axios from "../../components/util/axios";
export const reactionUpdate = async(id, reactionMethode) =>{
    const {data} =await axios.get(`/videos/${id}`);
    if(data){
        let updateReaction = reactionMethode === 'like'?{likes:data.likes+1}:{unlikes:data.unlikes+1};
        const response = await axios.patch(`/videos/${id}`,updateReaction);
        return response.data;
    }
}