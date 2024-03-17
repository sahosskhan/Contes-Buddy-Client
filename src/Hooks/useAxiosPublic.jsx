import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://contes-buddy-server.vercel.app/'
})
const useAxiosPublic = () => {

    return axiosPublic;
};

export default useAxiosPublic;