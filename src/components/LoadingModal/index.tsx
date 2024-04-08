"use client"

import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import LottieComponent from '@/components/LottieComponent';
import { Box } from '@mui/material';

const modalBoxStyles = {
    maxWidth: '430px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 375,
    width: '30vw',
    outline: 'none',
    p: 3,
    paddingTop: '0px',
    paddingBottom: '0px'
};

type Props = { 
    isOpen: boolean
}
export default function LoadingModal({ isOpen }: Props) {
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isOpen}
                closeAfterTransition
                components={{
                    Backdrop
                }}
                componentsProps={{
                    backdrop: {
                        timeout: 500,
                    }
                }}
            >
                <Fade in={isOpen}>
                    <Box component="div" sx={modalBoxStyles}>
                        <LottieComponent 
                            animationName={"loading"} width={"100%"} 
                            height={"100%"} shouldLoop={true}
                        /> 
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}