import { createContext, ReactNode, useState } from "react";
import { User } from "../types/user";
type LoginUserContextType = {
  loginUser: User | null;
  setLoginUser: React.Dispatch<React.SetStateAction<User | null>>;
};
export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);
export default function LoginUserProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [loginUser, setLoginUser] = useState<User | null>(null);
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
}
