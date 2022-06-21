import { useContext } from "react";
import { RouteComponentProps } from "react-router";
import { __RouterContext } from "react-router";

export const useRouter = <TParams extends object = {}>() => {
  return useContext(__RouterContext) as RouteComponentProps<TParams>;
};

//https://codesandbox.io/s/3rwq8r85p?file=/src/useRouter.ts
