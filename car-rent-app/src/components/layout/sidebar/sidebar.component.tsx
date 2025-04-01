'use client';

import React from 'react';
import { useSidebar } from "@/store";
import {Box, Drawer, Backdrop, styled, Typography, Fab, Stack, Button} from '@mui/material';
import {Logo} from "@/components";
import {IconBrandFacebookFilled, IconBrandInstagram, IconBrandTelegram, IconX} from "@tabler/icons-react";
import Link from "next/link";

const SidebarDrawer = styled(Drawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
        width: 500,
        height: '100vh',
        position: 'fixed',
        right: 0,
        top: 0,
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[16],
    },
}));

const BlurredBackdrop = styled(Backdrop)(({ theme }) => ({
    zIndex: theme.zIndex.drawer,
    backdropFilter: 'blur(5px)',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
}));

const SidebarContent = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
    padding: theme.spacing(5),
}));

const socialItems = [
    { icon: <IconBrandFacebookFilled width={20} height={20} />, href: '/' },
    { icon: <IconBrandInstagram width={20} height={20} />, href: '/' },
    { icon: <IconBrandTelegram width={20} height={20} />, href: '/' },
    { icon: <IconBrandFacebookFilled width={20} height={20} />, href: '/' },
    { icon: <IconBrandInstagram width={20} height={20} />, href: '/' },
    { icon: <IconBrandTelegram width={20} height={20} />, href: '/' }
];

const Sidebar: React.FC = () => {
    const { open, setClose } = useSidebar();

    return (
        <>
            <BlurredBackdrop
                open={open}
                onClick={setClose}
            />

            <SidebarDrawer
                variant="temporary"
                anchor="right"
                open={open}
                onClose={setClose}
            >
                <SidebarContent>
                    <Fab
                        sx={{position: 'absolute', top: 16, right: 16}}
                        size='small'
                        onClick={setClose}
                    >
                        <IconX/>
                    </Fab>
                    <Logo/>
                    <Typography>
                        Quisque imperdiet dignissim enim dictum finibus. Sed consectetutr convallis enim eget laoreet.
                        Aenean vitae nisl mollis, porta risus vel Etiam ac suscipit eros.
                    </Typography>
                    <Stack
                        width='95%'
                        direction='row'
                        justifyContent='space-between'
                        alignItems='center'
                    >
                        <Button
                            variant='contained'
                            color='primary'
                            size='large'
                        >
                            История
                        </Button>
                        <Stack
                            direction='row'
                            spacing={1}
                        >
                            <Stack direction='row' spacing={1} alignItems='center'>
                                {socialItems.map((item, index) => (
                                    <Link
                                        href={item.href} key={index} passHref
                                        className='text-white bg-black hover:bg-blue-500 transition-colors rounded-full p-1.5'
                                    >
                                        {item.icon}
                                    </Link>
                                ))}
                            </Stack>
                        </Stack>
                    </Stack>
                    <div className='w-full h-[1px] bg-gray-300'/>
                </SidebarContent>
            </SidebarDrawer>
        </>
    );
};

export { Sidebar };
export default Sidebar;
