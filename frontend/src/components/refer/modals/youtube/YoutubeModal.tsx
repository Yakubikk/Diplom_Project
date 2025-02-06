import React, {useCallback, useEffect, useState} from "react";
import Image from "next/image";
import { IconSearch, IconX } from "@tabler/icons-react";
import ReactPlayer from "react-player";
import youtube from "@assets/youtube.svg";
import uploadVideo from "@assets/uploadvideo.gif";
import { InputField } from "@/components";
import {useLocale, useTranslations} from "next-intl";
import axios from "axios";
import {YoutubeFile} from "../../Refer.interface";

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
    value: string;
    onChange: (value: string) => void;
    onClose: () => void;
    onAdd: (file: YoutubeFile) => void;
}

const YoutubeModal: React.FC<YoutubeModalProps> = ({ value, onChange, onClose, onAdd }) => {
    const t = useTranslations("TextEditor.modals.youtube");
    const locale = useLocale();

    const [video, setVideo] = useState<boolean>(false);
    const [videoData, setVideoData] = useState<VideoData>({
        videoTitle: "",
        videoThumbnail: "",
        videoDescription: "",
        channelTitle: "",
        channelAvatar: "",
        views: "",
        likes: "",
        publishedAt: "",
        duration: "",
    });

    const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

    const extractVideoId = (url: string) => {
        const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/|embed\/|v\/))([\w-]{11})/);
        return match ? match[1] : null;
    };

    const formatNumber = useCallback((num: number) => num.toLocaleString("en-US"), []);
    const formatDate = useCallback((dateString: string) =>
        new Date(dateString).toLocaleDateString(locale === 'ru' ? "ru-RU" : "en-US", { year: "numeric", month: "long", day: "numeric"}), [locale]);

    const fetchChannelAvatar = useCallback(async (channelId: string) => {
        try {
            const response = await axios.get(
                `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${apiKey}`
            );
            if (response.data.items.length > 0) {
                setVideoData(prevData => ({ ...prevData, channelAvatar: response.data.items[0].snippet.thumbnails.default.url }));
            }
        } catch (error) {
            console.error("Ошибка загрузки аватара канала:", error);
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
                setVideoData({
                    videoTitle: videoData.snippet.title,
                    videoThumbnail: videoData.snippet.thumbnails.medium.url,
                    videoDescription: videoData.snippet.description,
                    channelTitle: videoData.snippet.channelTitle,
                    channelAvatar: "",
                    views: formatNumber(parseInt(videoData.statistics.viewCount, 10)),
                    likes: formatNumber(parseInt(videoData.statistics.likeCount || "0", 10)),
                    publishedAt: formatDate(videoData.snippet.publishedAt),
                    duration: duration
                });
                await fetchChannelAvatar(videoData.snippet.channelId);
                console.log(videoData);
            }
        } catch (error) {
            console.error("Ошибка загрузки данных видео:", error);
        }
    }, [apiKey, fetchChannelAvatar, formatDate, formatNumber]);

    const handleSearch = useCallback(async () => {
        if (value.trim()) {
            const videoId = extractVideoId(value);
            if (videoId) {
                await fetchVideoData(videoId);
                setVideo(true);
            }
        }
    }, [fetchVideoData, value]);

    const parseDuration = (duration: string): number => {
        const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
        if (!match) return 0;

        const hours = parseInt(match[1]) || 0;
        const minutes = parseInt(match[2]) || 0;
        const seconds = parseInt(match[3]) || 0;

        return hours * 3600 + minutes * 60 + seconds;
    };

    const handleAddFile = useCallback(() => {
        onAdd({
            title: videoData.videoTitle,
            url: value,
            thumbnail: videoData.videoThumbnail,
            duration: parseDuration(videoData.duration)
        });
        onClose();
    }, [onAdd, onClose, value, videoData.videoThumbnail, videoData.duration, videoData.videoTitle]);

    const handleCancel = () => {
        setVideo(false);
        onChange('');
        setVideoData({
            videoTitle: "",
            videoThumbnail: "",
            videoDescription: "",
            channelTitle: "",
            channelAvatar: "",
            views: "",
            likes: "",
            publishedAt: "",
            duration: ""
        });
    };

    useEffect(() => {
        const handleKeyDown = async (event: KeyboardEvent) => {
            if (event.key === 'Enter' && value.trim() !== "") {
                if (!video) await handleSearch();
                else handleAddFile();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleAddFile, handleSearch, value, video]);

    return (
        <div className="w-[calc(100vw-12rem)] max-w-6xl min-w-[596px] h-[calc(100vh-10rem)] flex flex-col">
            <div className="w-full h-fit flex justify-between items-center pl-6 pr-3 border-b border-gray-300">
                <Image src={youtube} alt="youtube" width={112} height={24} className="w-[112px]" />
                <button className="button p-3 rounded-full" onClick={onClose}>
                    <IconX />
                </button>
            </div>
            {video ? (
                <>
                    <div className="w-full h-full flex flex-col p-4 overflow-y-hidden">
                        <div className="flex w-full h-full items-center rounded-lg">
                            <div className="bg-black flex items-center w-7/12 h-full rounded-l-lg">
                                <ReactPlayer controls url={value}/>
                            </div>
                            <div className="w-full h-full flex flex-col gap-2 pl-4 py-6 pr-6 border-b border-t border-r border-gray-300 rounded-r-lg overflow-y-scroll">
                                <span className="text-xl font-normal">{videoData.videoTitle}</span>
                                <div className="flex items-center gap-2 mt-2">
                                    {videoData.channelAvatar && (
                                        <Image src={videoData.channelAvatar} alt="Channel Avatar" width={24} height={24}
                                               className="rounded-full"
                                        />
                                    )}
                                    <span className="text-gray-700 text-sm">{videoData.channelTitle}</span>
                                </div>
                                <div className="flex gap-2 text-md text-gray-700 items-center">
                                    <div className="flex gap-2 text-md text-gray-700 items-center">
                                        <span>
                                            {videoData.views.endsWith("1")
                                                ? t('views.one', { count: parseInt(videoData.views.replace(/\D/g, ""), 10) })
                                                : videoData.views.endsWith("2")
                                                || videoData.views.endsWith("3")
                                                || videoData.views.endsWith("4")
                                                    ? t('views.few', { count: parseInt(videoData.views.replace(/\D/g, ""), 10) })
                                                    : t('views.many', { count: parseInt(videoData.views.replace(/\D/g, ""), 10) })
                                            }
                                        </span>
                                        <span className="w-1 h-1 rounded-full bg-gray-700"/>
                                        <span>
                                            {videoData.likes.endsWith("1")
                                                ? t('likes.one', { count: parseInt(videoData.likes.replace(/\D/g, ""), 10) })
                                                : videoData.likes.endsWith("2")
                                                || videoData.likes.endsWith("3")
                                                || videoData.likes.endsWith("4")
                                                    ? t('likes.few', { count: parseInt(videoData.likes.replace(/\D/g, ""), 10) })
                                                    : t('likes.many', { count: parseInt(videoData.likes.replace(/\D/g, ""), 10) })
                                            }
                                        </span>
                                    </div>
                                    <span className="w-1 h-1 rounded-full bg-gray-700"/>
                                    <span>{videoData.publishedAt}</span>
                                </div>
                                <div className="mt-3 h-full whitespace-pre-line text-gray-800">
                                {videoData.videoDescription}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-20 h-20 border-t border-gray-300 flex items-center justify-end px-4 text-sm font-semibold">
                        <button
                            className="button px-6 py-2 rounded border text-gray-600 border-gray-300 mr-3"
                            onClick={handleCancel}
                        >
                            {t("cancel")}
                        </button>
                        <button
                            className="button px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            onClick={handleAddFile}
                        >
                            {t("add")}
                        </button>
                    </div>
                </>
            ) : (
                <div className="w-[512px] h-full flex flex-col gap-8 items-center self-center">
                    <Image src={uploadVideo} alt="Upload video" width={200} height={200} className="w-full"/>
                    <div className="w-full flex gap-2">
                        <InputField
                            value={value}
                            onChange={(value) => onChange(value)}
                            placeholder={t("enter")}
                            autoFocus
                        />
                        <button
                            onClick={handleSearch}
                            disabled={value.trim() === ""}
                            className={`${value.trim() !== "" && "button"} p-3 min-w-12 rounded-xl border border-gray-300 disabled:text-gray-400`}
                        >
                            <IconSearch/>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default YoutubeModal;
