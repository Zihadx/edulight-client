import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const useSelectedClass = () => {
  const { user } = useContext(AuthContext);

  const {
    data: selectedClass = [],
    refetch 
  } = useQuery({
    queryKey: ["selectedClass", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/selectedClass?email=${user?.email}`
      );
      return res.json();
    },
  });
  return [selectedClass, refetch]
};

export default useSelectedClass;
