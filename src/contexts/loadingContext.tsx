'use client'

import { createContext, useState, useCallback } from 'react';
import type { PropsWithChildren } from 'react';
import LoadingModal from '@/components/LoadingModal';

type contextObject = {  
    isLoading: boolean,
    startLoading: () => void,
    stopLoading: () => void
};
const LoadingContext = createContext<contextObject | null>(null);

export const LoadingContextProvider = ({ children }: PropsWithChildren): JSX.Element => {
    const [isLoading, setIsLoading] = useState(false);
    const startLoading = useCallback(() => {
        setIsLoading(true);
    }, []);
    const stopLoading = useCallback(() => {
        setIsLoading(false);
    }, []);

    return (
        <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
            {children}
            <LoadingModal isOpen={isLoading} />
        </LoadingContext.Provider>
    )
}


export default LoadingContext;