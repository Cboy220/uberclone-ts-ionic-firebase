import { useContext } from "react";
import { RouteComponentProps } from "react-router";
import { __RouterContext } from "react-router";


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const code = urlParams.get('code')

export const useRouter = <TParams extends object = {queryString: any, pickup:any, dropoff:any;}>() => {
  return useContext(__RouterContext) as RouteComponentProps<TParams>;
};

//https://codesandbox.io/s/3rwq8r85p?file=/src/useRouter.ts
