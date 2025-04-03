import React from "react";
import {Stack, Typography} from "@mui/material";
import {Logo} from "@/components";
import './get-buttons.css';
import FooterCarImage from "@/images/Footer-Car-Image-Main-1.jpg";
import Image from "next/image";
import Link from "next/link";
import {IconBrandFacebookFilled, IconBrandInstagram, IconBrandTelegram} from "@tabler/icons-react";
import SubscribeFormFooter from "./subscribe-form";

interface LinkProps {
    href: string
    text: string
}

interface LinksBlock {
    title: string
    links: LinkProps[]
}

const linksBlocks: LinksBlock[] = [
    {
        title: 'Быстрые ссылки',
        links: [
            { href: '/', text: 'Главная' },
            { href: '/', text: 'О нас' },
            { href: '/', text: 'Карьера' },
            { href: '/', text: 'Последние новости' },
            { href: '/', text: 'Галерея' },
            { href: '/', text: 'Свяжитесь с нами' },
        ]
    },
    {
        title: 'Информация',
        links: [
            { href: '/', text: 'Забронировать авто' },
            { href: '/', text: 'Обслуживание' },
            { href: '/', text: 'Гарантия' },
            { href: '/', text: 'Помощь на дороге' },
            { href: '/', text: 'Настройки cookie' },
            { href: '/', text: 'Карта сайта' },
        ]
    },
]

const socialItems = [
    { icon: <IconBrandFacebookFilled width={20} height={20} />, href: '/' },
    { icon: <IconBrandInstagram width={20} height={20} />, href: '/' },
    { icon: <IconBrandTelegram width={20} height={20} />, href: '/' }
];

const contactItems = [
    { label: 'Директор:', email: 'mail@example.com' },
    { label: 'Водитель:', email: 'mail@example.com' },
    { label: 'Арендатор:', email: 'mail@example.com' },
    { label: 'Приложение:', text: 'Нажмите здесь', href: '/' }
];

const FooterComponent: React.FC = () => {
    const renderLink = (link: LinkProps, index: number) => (
        <Link
            key={index}
            href={link.href}
            className="block w-fit hover:translate-x-2 transition-all duration-200 group relative"
        >
            <span className="relative inline-block">
                {link.text}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
            </span>
        </Link>
    );

    const renderContactItem = (item: typeof contactItems[0], index: number) => (
        <Stack direction='row' key={index}>
            <Typography>{item.label}&nbsp;</Typography>
            <Typography>
                {item.email ? (
                    <Link
                        href={`mailto:${item.email}`}
                        className="block w-fit hover:translate-x-2 transition-all duration-200 group relative"
                    >
                        <span className="relative inline-block">
                            {item.email}
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                        </span>
                    </Link>
                ) : (
                    <Link
                        href={item.href || '#'}
                        className="block w-fit hover:translate-x-2 transition-all duration-200 group relative"
                    >
                        <span className="relative inline-block">
                            {item.text}
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                        </span>
                    </Link>
                )}
            </Typography>
        </Stack>
    );

    return (
        <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-around'
            className='bg-black px-8 pt-24 pb-20 text-white'
        >
            <Stack direction='column' alignItems='center' minWidth='520px'>
                <Logo />
                <Image src={FooterCarImage.src} alt='Car' width={520} height={320} />
            </Stack>

            <Stack width='100%' spacing={8} maxWidth='1000px'>
                <Stack direction='row' width='100%' justifyContent='space-between' spacing={3}>
                    {linksBlocks.map((block, index) => (
                        <Stack key={index} spacing={3} width='30%'>
                            <Typography variant='h5'>{block.title}</Typography>
                            <Stack spacing={2}>
                                {block.links.map(renderLink)}
                            </Stack>
                        </Stack>
                    ))}

                    <Stack width='40%' spacing={3}>
                        <Typography variant='h5'>Скачайте наше приложение</Typography>
                        <Typography>
                            Ut eleifend mattis ligula, porta finibus tincidunt Aenean maecenas vehiculles mattis non mattis Integer.
                        </Typography>
                        <Stack direction='row' spacing={2} alignSelf='center'>
                            {['apple', 'google'].map((type, index) => (
                                <Link
                                    key={index}
                                    href="/"
                                    target="_blank"
                                    className={`market-btn ${type}-btn`}
                                    role="button"
                                >
                                    <span className="market-button-subtitle">Скачайте из</span>
                                    <span className="market-button-title">
                                        {type === 'apple' ? 'App Store' : 'Google Play'}
                                    </span>
                                </Link>
                            ))}
                        </Stack>
                    </Stack>
                </Stack>

                <Stack direction='row' width='100%' justifyContent='space-between' spacing={3}>
                    <Stack spacing={3} width='30%'>
                        <Typography variant='h5'>Адрес</Typography>
                        <Stack spacing={5}>
                            <Typography>г. Минск, ул. Пушкинская, 1</Typography>
                            <Stack direction='row' spacing={1} alignItems='center'>
                                {socialItems.map((item, index) => (
                                    <Link
                                        href={item.href}
                                        key={index}
                                        className='text-white bg-blue-500 hover:bg-blue-600 transition-colors rounded-full p-2'
                                    >
                                        {item.icon}
                                    </Link>
                                ))}
                            </Stack>
                        </Stack>
                    </Stack>

                    <Stack spacing={3} width='30%'>
                        <Typography variant='h5'>Справочная</Typography>
                        <Stack spacing={2}>
                            {contactItems.map(renderContactItem)}
                        </Stack>
                    </Stack>

                    <Stack spacing={3} width='40%'>
                        <Typography variant='h5'>Подписка на новости</Typography>
                        <SubscribeFormFooter />
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
}

export {FooterComponent};
export default FooterComponent;
