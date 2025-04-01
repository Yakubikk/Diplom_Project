import React from 'react';
import Link from 'next/link';
import {
    IconBrandFacebookFilled,
    IconBrandInstagram,
    IconBrandTelegram,
    IconMail,
    IconPhoneCall,
} from '@tabler/icons-react';
import { Box, Divider, Stack, Typography } from '@mui/material';

const contactItems = [
    {
        href: 'tel:+375 29 123 45 67',
        icon: <IconPhoneCall />,
        text: '+375 29 123 45 67'
    },
    {
        href: 'mailto:mail@example.com',
        icon: <IconMail />,
        text: 'mail@example.com'
    }
];

const navItems = [
    { href: '/help', text: 'Помощь' },
    { href: '/support', text: 'Поддержка' },
    { href: '/contact', text: 'Контакты' }
];

const socialItems = [
    { icon: <IconBrandFacebookFilled width={20} height={20} />, href: '/' },
    { icon: <IconBrandInstagram width={20} height={20} />, href: '/' },
    { icon: <IconBrandTelegram width={20} height={20} />, href: '/' }
];

const UpperHeader: React.FC = () => {
    return (
        <Box className='flex items-center justify-between py-3 pl-10 pr-5'>
            {/* Контактная информация */}
            <Stack
                direction='row'
                divider={<Divider orientation='vertical' flexItem className='bg-black' />}
                spacing={2}
            >
                {contactItems.map((item, index) => (
                    <Link href={item.href} key={index} passHref>
                        <Stack
                            direction='row'
                            alignItems='center'
                            spacing={1}
                            className='group'
                        >
                            {item.icon}
                            <Typography className='group-hover:text-blue-600 transition-colors'>
                                {item.text}
                            </Typography>
                        </Stack>
                    </Link>
                ))}
            </Stack>

            {/* Навигация и соцсети */}
            <Stack direction='row' spacing={4} alignItems='center'>
                {/* Навигационные ссылки */}
                <Stack
                    direction='row'
                    divider={<Divider orientation='vertical' flexItem className='bg-black' />}
                    spacing={2}
                >
                    {navItems.map((item, index) => (
                        <Link href={item.href} key={index} passHref>
                            <Typography className='hover:text-blue-600 transition-colors'>
                                {item.text}
                            </Typography>
                        </Link>
                    ))}
                </Stack>

                {/* Социальные сети */}
                <Stack direction='row' spacing={1} alignItems='center'>
                    {socialItems.map((item, index) => (
                        <Link
                            href={item.href} key={index} passHref
                            className='text-white bg-black hover:bg-blue-600 transition-colors rounded-full p-1.5'
                        >
                            {item.icon}
                        </Link>
                    ))}
                </Stack>
            </Stack>
        </Box>
    );
};

export { UpperHeader };
export default UpperHeader;
