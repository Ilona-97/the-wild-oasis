import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

  export function useAddCabin() {

    const queryClient = useQueryClient();
    const {mutate: addCabin, isLoading: isAdding} = useMutation({
        mutationFn: addEditCabin,
        onSuccess: ()=>{
        toast.success('New cabin created successfully');
        queryClient.invalidateQueries({queryKey: ["cabins"]});
        },
        onError: (err)=>toast.error(err.message)
        
    });
    return {isAdding, addCabin};
    }