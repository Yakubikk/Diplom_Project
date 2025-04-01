'use client';

import React, { useState, useRef } from 'react';
import { Box, Typography, Button, IconButton, Stack, Fade } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Swiper as SwiperCore } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/navigation';
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";

// Импорт изображений
import AuroraArcImg from '@/images/h2-tumbslider-img-1.png';
import ChargeboltzImg from '@/images/h2-slider-img-2.png';
import FluxdriveProImg from '@/images/h2-slider-img-5.png';
import VolutaxiImg from '@/images/h2-tumbslider-img-1.png';
import EclipseGlideImg from '@/images/h2-slider-img-6.png';

interface Car {
    name: string;
    motto: string;
    title: string;
    description: string;
    image: string;
}

const carData: Car[] = [
    {
        name: 'AURORA ARC',
        motto: 'Будущее электромобильности',
        title: 'Инновационный электрический кроссовер',
        description: 'Мощный и экологичный кроссовер с запасом хода до 500 км. Просторный салон и передовые технологии безопасности.',
        image: AuroraArcImg.src
    },
    {
        name: 'CHARGEBOLTZ',
        motto: 'Заряжайся молниеносно',
        title: 'Рекордная скорость зарядки',
        description: 'Уникальная система быстрой зарядки позволяет зарядить батарею на 80% всего за 15 минут.',
        image: ChargeboltzImg.src
    },
    {
        name: 'FLUXDRIVE PRO',
        motto: 'Преодолей границы',
        title: 'Спортивный электромобиль',
        description: 'Разгон до 100 км/ч за 3.2 секунды. Аэродинамический дизайн и интеллектуальная система управления.',
        image: FluxdriveProImg.src
    },
    {
        name: 'VOLTURAXI',
        motto: 'Умный городской транспорт',
        title: 'Электрический городской автомобиль',
        description: 'Компактные габариты, маневренность и экономичность - идеальный выбор для города.',
        image: VolutaxiImg.src
    },
    {
        name: 'ECLIPSE GLIDE',
        motto: 'Тишина и комфорт',
        title: 'Премиальный электрический седан',
        description: 'Роскошные материалы отделки, бесшумный ход и инновационная система климат-контроля.',
        image: EclipseGlideImg.src
    },
];

const RentalsSwiperBlock = () => {
    const swiperRef = useRef<SwiperCore | null>(null);
    const [selectedCar, setSelectedCar] = useState<Car>(carData[1]);
    const [fadeIn, setFadeIn] = useState(true);

    const handleSlideChange = (swiper: SwiperCore) => {
        setFadeIn(false);
        setTimeout(() => {
            const realIndex = swiper.realIndex;
            setSelectedCar(carData[realIndex % carData.length]);
            setFadeIn(true);
        }, 300);
    };

    return (
        <Box
            textAlign='center'
            className='flex flex-col items-center'
            maxWidth='80%'
            sx={{
                py: 4,
                px: 2,
            }}
        >
            <Fade in={fadeIn} timeout={300}>
                <Box>
                    <Typography variant="h5" gutterBottom>
                        {selectedCar.motto}
                    </Typography>

                    <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
                        {selectedCar.title}
                    </Typography>

                    <Typography variant="body1" sx={{ mx: 'auto' }}>
                        {selectedCar.description}
                    </Typography>

                    <Box sx={{ height: 375, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Fade in={fadeIn}>
                            <Image
                                src={selectedCar.image}
                                alt={selectedCar.name}
                                width={750}
                                height={500}
                                style={{
                                    objectFit: 'contain',
                                    transition: 'opacity 0.3s ease',
                                    opacity: fadeIn ? 1 : 0
                                }}
                            />
                        </Fade>
                    </Box>

                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{
                            mb: 10,
                            px: 4,
                            py: 2,
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            transition: 'all 0.3s ease',
                            opacity: fadeIn ? 1 : 0.5
                        }}
                    >
                        {`Подробнее о ${selectedCar.name}`}
                    </Button>
                </Box>
            </Fade>

            <Stack width='100%' maxWidth='1100px' direction='row' spacing={2} alignItems='center' className='overflow-hidden'>
                <IconButton
                    onClick={() => swiperRef.current?.slidePrev()}
                    sx={{ zIndex: 1 }}
                >
                    <IconArrowLeft />
                </IconButton>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    centeredSlides
                    loop
                    modules={[Navigation]}
                    onSwiper={(swiper) => swiperRef.current = swiper}
                    onSlideChange={handleSlideChange}
                    style={{ width: '100%' }}
                >
                    {carData.map((car) => (
                        <SwiperSlide key={car.name}>
                            {({ isActive }) => (
                                <Box
                                    textAlign='center'
                                    sx={{
                                        height: 210,
                                        transition: 'all 0.3s ease',
                                        backgroundColor: isActive ? 'grey.300' : 'grey.200',
                                        borderRadius: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        overflow: 'hidden'
                                    }}
                                >
                                    <Image
                                        src={car.image}
                                        alt={car.name}
                                        width={200}
                                        height={140}
                                        style={{
                                            margin: '0 auto',
                                            width: '95%',
                                            height: 'auto',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    <Typography
                                        variant="h5"
                                        component="div"
                                        sx={{
                                            p: 2,
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {car.name}
                                    </Typography>
                                </Box>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>

                <IconButton
                    onClick={() => swiperRef.current?.slideNext()}
                    sx={{ zIndex: 1 }}
                >
                    <IconArrowRight />
                </IconButton>
            </Stack>
        </Box>
    );
};

export { RentalsSwiperBlock };
export default RentalsSwiperBlock;
