import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
    const { user, loading } = useContext(AuthContext);
    console.log(user);
    const [axiosSecure] = useAxiosSecure();
  
  
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
      queryKey: ["isInstructor", user?.email],
      enabled: !loading,
      queryFn: async () => {
        const response = await axiosSecure.get(`/users/instructor/${user?.email}`);
        return response.data.isInstructor;
      },
    });
    return [isInstructor, isInstructorLoading];
};

export default useInstructor;