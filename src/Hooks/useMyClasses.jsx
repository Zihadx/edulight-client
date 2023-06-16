import{ useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../Providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';

const useMyClasses = () => {
    const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: myClass = [], refetch } = useQuery({
    queryKey: ["myClass", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/myClass?email=${user?.email}`);
      return res.data;
    },
  });
  return [myClass, refetch];
};

export default useMyClasses;