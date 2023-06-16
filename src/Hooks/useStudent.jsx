import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useStudent = () => {
    const { user, loading } = useContext(AuthContext);
    console.log(user);
    const [axiosSecure] = useAxiosSecure();
  
  
    const { data: isStudent, isLoading: isStudentLoading } = useQuery({
      queryKey: ["isStudent", user?.email],
      enabled: !loading,
      queryFn: async () => {
        const response = await axiosSecure.get(`/users/student/${user?.email}`);
        return response.data.student;
      },
    });
    return [isStudent, isStudentLoading];
};

export default useStudent;