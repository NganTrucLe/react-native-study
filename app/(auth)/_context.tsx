import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

interface IForgotPassword {
  email?: string;
}

interface IAuthContextProps {
  forgotPassword: IForgotPassword;
  setForgotPassword: Dispatch<SetStateAction<IForgotPassword>>;
}

const AuthContext = createContext<IAuthContextProps>({
  forgotPassword: {},
  setForgotPassword: () => {},
} as IAuthContextProps);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [forgotPassword, setForgotPassword] = useState<IForgotPassword>({});

  return <AuthContext.Provider value={{ forgotPassword, setForgotPassword }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
