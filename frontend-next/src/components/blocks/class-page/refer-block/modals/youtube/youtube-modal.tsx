import React, { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { IconSearch, IconX } from '@tabler/icons-react';
import ReactPlayer from 'react-player';
import Youtube from '@/assets/youtube.svg';
import uploadVideo from '@/assets/uploadvideo.gif';
import {IconButton, TextField, YoutubeFile} from '@/components';
import { useLocale, useTranslations } from 'next-intl';
import axios from 'axios';
import { FormProvider, useForm } from 'react-hook-form';
import { formatCount, formatDate, parseDuration } from '../../refer.helper';

interface VideoData {
    videoTitle: string;
    videoThumbnail: string;
    videoDescription: string;
    channelTitle: string;
    channelAvatar: string;
    views: string;
    likes: string;
    publishedAt: string;
    duration: string;
}

interface YoutubeModalProps {
    onClose: () => void;
    onAdd: (file: YoutubeFile) => void;
}

const YoutubeModal: React.FC<YoutubeModalProps> = ({ onClose, onAdd }) => {
    const t = useTranslations('TextEditor.modals.youtube');
    const locale = useLocale();

    const methods = useForm({
        defaultValues: {
            href: '',
        },
    });

    const {
        handleSubmit,
        register,
        watch,
        setValue,
        formState: { errors },
    } = methods;

    const value = watch('href');

    const [video, setVideo] = useState<boolean>(false);
    const [videoData, setVideoData] = useState<VideoData>({
        videoTitle: '',
        videoThumbnail: '',
        videoDescription: '',
        channelTitle: '',
        channelAvatar: '',
        views: '',
        likes: '',
        publishedAt: '',
        duration: '',
    });

    const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

    const extractVideoId = useCallback((url: string) => {
        const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/|embed\/|v\/))([\w-]{11})/);
        return match ? match[1] : null;
    }, []);

    const fetchChannelAvatar = useCallback(async (channelId: string) => {
        try {
            const response = await axios.get(
                `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${apiKey}`
            );
            if (response.data.items.length > 0) {
                setVideoData(prevData => ({ ...prevData, channelAvatar: response.data.items[0].snippet.thumbnails.default.url }));
            }
        } catch (error) {
            console.error('Ошибка загрузки аватара канала:', error);
        }
    }, [apiKey]);

    const fetchVideoData = useCallback(async (videoId: string) => {
        try {
            const response = await axios.get(
                `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoId}&key=${apiKey}`
            );
            if (response.data.items.length > 0) {
                const videoData = response.data.items[0];
                const duration = videoData.contentDetails.duration;
                const viewsCount = parseInt(videoData.statistics.viewCount.replace(/\D/g, ''), 10);
                const likesCount = parseInt(videoData.statistics.likeCount.replace(/\D/g, ''), 10);

                setVideoData({
                    videoTitle: videoData.snippet.title,
                    videoThumbnail: videoData.snippet.thumbnails.medium.url,
                    videoDescription: videoData.snippet.description,
                    channelTitle: videoData.snippet.channelTitle,
                    channelAvatar: '',
                    views: formatCount(viewsCount, {
                        one: t('views.one'),
                        few: t('views.few'),
                        many: t('views.many'),
                    }),
                    likes: formatCount(likesCount, {
                        one: t('likes.one'),
                        few: t('likes.few'),
                        many: t('likes.many'),
                    }),
                    publishedAt: formatDate(videoData.snippet.publishedAt, locale),
                    duration: duration,
                });
                await fetchChannelAvatar(videoData.snippet.channelId);
            }
        } catch (error) {
            console.error('Ошибка загрузки данных видео:', error);
        }
    }, [apiKey, t, locale, fetchChannelAvatar]);

    const handleSearch = useCallback(async () => {
        if (value.trim()) {
            const videoId = extractVideoId(value);
            if (videoId) {
                await fetchVideoData(videoId);
                setVideo(true);
            }
        }
    }, [value, extractVideoId, fetchVideoData]);

    const handleAddFile = useCallback(() => {
        onAdd({
            title: videoData.videoTitle,
            url: value,
            thumbnail: videoData.videoThumbnail,
            duration: parseDuration(videoData.duration),
        });
        onClose();
    }, [onAdd, onClose, videoData, value]);

    const handleCancel = useCallback(() => {
        setVideo(false);
        setVideoData({
            videoTitle: '',
            videoThumbnail: '',
            videoDescription: '',
            channelTitle: '',
            channelAvatar: '',
            views: '',
            likes: '',
            publishedAt: '',
            duration: '',
        });
        setValue('href', '');
    }, [setValue]);

    const onSubmit = useCallback(async () => {
        await handleSearch();
    }, [handleSearch]);

    const VideoDisplay = useMemo(() => (
        <>
            <div className='w-full h-full flex flex-col p-4 overflow-y-hidden'>
                <div className='flex w-full h-full items-center rounded-lg'>
                    <div className='bg-black flex items-center w-full h-full rounded-l-lg'>
                        <ReactPlayer fallback={<span>Загрузка...</span>} width='100%' height='100%' controls url={value} />
                    </div>
                    <div className='h-full w-2/3 flex flex-col gap-2 pl-4 py-6 pr-6 border-b border-t border-r border-gray-300 rounded-r-lg overflow-y-scroll'>
                        <span className='text-h3Title font-normal'>{videoData.videoTitle}</span>
                        <div className='flex items-center gap-2 mt-2'>
                            {videoData.channelAvatar && (
                                <Image
                                    src={videoData.channelAvatar}
                                    alt='Channel Avatar'
                                    width={24}
                                    height={24}
                                    className='rounded-full'
                                />
                            )}
                            <span className='text-gray-700 text-bodySmall'>{videoData.channelTitle}</span>
                        </div>
                        <div className='flex gap-2 text-gray-700 text-bodySmall items-center'>
                            <div className='flex gap-2 text-gray-700 items-center'>
                                <span>
                                    {videoData.views}
                                </span>
                                <span className='w-1 h-1 rounded-full bg-gray-700'/>
                                <span>
                                    {videoData.likes}
                                </span>
                            </div>
                            <span className='w-1 h-1 rounded-full bg-gray-700'/>
                            <span>{videoData.publishedAt}</span>
                        </div>
                        <div className='mt-3 h-full whitespace-pre-line text-gray-800'>
                            {videoData.videoDescription}
                        </div>
                    </div>
                </div>
            </div>
            <div
                className='min-h-20 h-20 border-t border-gray-300 flex items-center justify-end px-4 text-bodySmall font-semibold'>
                <button
                    className='button px-6 py-2 rounded border text-gray-600 border-gray-300 mr-3'
                    onClick={handleCancel}
                >
                    {t('cancel')}
                </button>
                <button
                    className='button px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
                    onClick={handleAddFile}
                >
                    {t('add')}
                </button>
            </div>
        </>
    ), [videoData, value, t, handleCancel, handleAddFile]);

    const SearchForm = useMemo(() => (
        <FormProvider {...methods}>
            <form
                className='w-[512px] h-full flex flex-col gap-8 items-center self-center'
                onSubmit={handleSubmit(onSubmit)}
            >
                <Image src={uploadVideo} alt='Upload video' width={200} height={200} className='w-full' />
                <div className='flex w-full gap-2 items-center'>
                    <TextField
                        {...register('href', {
                            required: 'required',
                            pattern: {
                                value: /^(https?:\/\/)/,
                                message: 'invalidUrl',
                            },
                        })}
                        placeholder={t('enter')}
                        name='href'
                    />
                    <IconButton
                        type='submit'
                        onClick={handleSubmit(onSubmit)}
                        disabled={!value.trim() || !!errors.href}
                        shape='square'
                    >
                        <IconSearch />
                    </IconButton>
                </div>
            </form>
        </FormProvider>
    ), [methods, handleSubmit, onSubmit, register, value, errors.href, t]);

    return (
        <div className='w-[calc(100vw-12rem)] max-w-screen-desktop min-w-[596px] h-[calc(100vh-10rem)] max-h-[50rem] flex flex-col'>
            <div className='w-full h-fit flex justify-between items-center pl-4 pr-2 py-1 border-b border-gray-300'>
                <Youtube alt='youtube' width={112} height={24} className='w-[112px]' />
                <IconButton variant='text' size='medium-small' onClick={onClose}>
                    <IconX />
                </IconButton>
            </div>
            {video ? VideoDisplay : SearchForm}
        </div>
    );
};

export { YoutubeModal };
export default YoutubeModal;
