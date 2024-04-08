'use client'

import Lottie from "lottie-react";
import loading from '@/lib/lottie/loading.json';

type Props = {
    onCompleteMount?: () => void,
    width: string,
    height: string,
    onComplete?: () => void,
    shouldLoop: boolean,
    animationName: 'loading',
    maxWidth?: string,
    maxHeight?: string 
}

const lottieAnimations = {
    'loading': loading
}

export default function LottieComponent({ width, height, onComplete, shouldLoop, animationName, onCompleteMount, maxWidth, maxHeight }: Props) {
    const data = lottieAnimations[animationName];

    return (
        <Lottie 
            onDOMLoaded={onCompleteMount} 
            onComplete={onComplete} 
            style={{ width, height, maxWidth, maxHeight }} 
            animationData={data} 
            loop={shouldLoop} 
        />
    )
}