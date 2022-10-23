import React, { createContext, ReactNode, useContext, useRef } from 'react';
import toast from 'react-hot-toast';


type ContentType = {
  inputRef: any;
  action: () => void;
}

const initValues: ContentType = {
  inputRef: null,
  action: () => {}
}
export const WelcomeContext = createContext<ContentType>(initValues);

type Props = {
  children: ReactNode
}
export const WelcomeProvider = (props: Props) => {
  const { children } = props;
  const inputRef = useRef<any>(null);

  const action = () => {
    if (inputRef.current.value) {
      const { value } = inputRef.current;
      toast.success(`Hello ${value}`);
      inputRef.current.value = '';
    }
  }

  const values: ContentType = {
    inputRef,
    action
  }
  return (
    <WelcomeContext.Provider value={values}>
      {children}
    </WelcomeContext.Provider>
  );
}

const  useWelcome = () => {
  const context = useContext(WelcomeContext);
  return context;
}

export default useWelcome;