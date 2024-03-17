import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic";


const useMyContest = () => {
const axiosPublic = useAxiosPublic();
const { data: myContest = [], isLoading, refetch} = useQuery({ 
    queryKey: ['contest'],
    queryFn: async() => {
        const res = await axiosPublic.get('/added-contest');
        return res.data;
        
    }
    
})


return {myContest, refetch, isLoading} ;
};
export default useMyContest;