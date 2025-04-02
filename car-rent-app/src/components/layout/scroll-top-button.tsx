'use client';

import React, { useEffect, useState } from 'react';
import { Fab, useScrollTrigger, Zoom } from '@mui/material';
import {IconArrowUp} from "@tabler/icons-react";

const ScrollTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 200,
    });

    useEffect(() => {
        setIsVisible(trigger);
    }, [trigger]);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Zoom in={isVisible}>
            <div
                onClick={handleClick}
                role='presentation'
                style={{
                    position: 'fixed',
                    bottom: 24,
                    right: 24,
                    zIndex: 1000,
                }}
            >
                <Fab color='primary' size='large' aria-label='scroll back to top'>
                    <IconArrowUp />
                </Fab>
            </div>
        </Zoom>
    );
};

export { ScrollTopButton };
export default ScrollTopButton;
