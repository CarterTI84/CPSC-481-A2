import { useContext } from "react";
import LoadingContext from "@/contexts/loadingContext";

export default function useLoadingContext() {
    const contextObject = useContext(LoadingContext)

    if(!contextObject)
        throw new Error('useLoadingContext should be used within a LoadingContextProvider')

    return contextObject
}