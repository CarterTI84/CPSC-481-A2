import { useContext } from "react";
import HomeContext from "@/contexts/homeContext";

export default function useHomeContext() {
    const contextObject = useContext(HomeContext)

    if(!contextObject)
        throw new Error('useHomeContext should be used within a HomeContextProvider')

    return contextObject
}