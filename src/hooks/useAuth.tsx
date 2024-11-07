import axios from "axios";
import { User } from "../types/user";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import { useLoginUserContext } from "./useLoginUserContext";

const useAuth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { setLoginUser } = useLoginUserContext();
  const login = useCallback((id: string) => {
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setIsLoading(true);
        if (res.data) {
          setLoginUser(res.data);
          navigate("/home");
        } else {
          alert("ユーザーが見つからない");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { isLoading, login };
};

export default useAuth;
