import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";
const usePaymentHistory = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: paymentHistory = [], refetch } = useQuery({
    queryKey: ["selectedClass", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/paymentHistory?email=${user?.email}`);
      return res.data;
    },
  });
  return [paymentHistory, refetch];
};

export default usePaymentHistory;
