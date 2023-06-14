import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const { user, loading } = useContext(AuthContext);
    console.log(user);
    const [axiosSecure] = useAxiosSecure();
  
  
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
      queryKey: ["isAdmin", user?.email],
      enabled: !loading,
      queryFn: async () => {
        const response = await axiosSecure.get(`/users/admin/${user?.email}`);
        // console.log(response);
        return response.data.admin;
      },
    });
    return [isAdmin, isAdminLoading];
};

export default useAdmin;