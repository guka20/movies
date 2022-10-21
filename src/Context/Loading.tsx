import {
  useEffect,
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type LoadingContextProps = {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};
type LoadingProps = {
  children: ReactNode;
};
export const LoadingContext = createContext<LoadingContextProps>({
  isLoading: false,
  setIsLoading: () => {},
});
export const Loading = ({ children }: LoadingProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    // console.log(isLoading);
  }, [isLoading]);
  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
