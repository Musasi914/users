import { useContext } from "react";
import { LoginUserContext } from "../provider/loginUserProvider";

export const useLoginUserContext = () => {
  const { loginUser, setLoginUser } = useContext(LoginUserContext);
  return { loginUser, setLoginUser };
};
