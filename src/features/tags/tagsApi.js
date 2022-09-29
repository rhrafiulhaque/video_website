import axios from "../../components/util/axios"

const getTags = async()=>{
    const response = await axios.get("/tags");
    return response.data;
}
export default getTags;