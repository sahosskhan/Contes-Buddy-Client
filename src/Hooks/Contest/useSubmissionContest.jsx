import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic";


const useSubmissionContest= () => {
const axiosPublic = useAxiosPublic();
const { data: submissionContest = [], refetch, isLoading} = useQuery({ 
    queryKey: ['submit'],
    queryFn: async() => {
        const res = await axiosPublic.get('/added-submission');
        return res.data;
        
    }
    
})


return {submissionContest, refetch,isLoading} ;
};
export default useSubmissionContest;