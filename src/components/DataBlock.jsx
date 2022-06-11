import { useLoading } from "../utils/useLoading.js";

function LoadingBlock({data, children}) {
  const [isLoading, LoadComponent] = useLoading(data);
  return (
    <>
    { isLoading 
      ? <>{ LoadComponent }</>
      : <>{ children }</>
    }
    </>
  )
}

export default LoadingBlock