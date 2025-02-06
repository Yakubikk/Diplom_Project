import React, {useState} from 'react';
import {Avatar, DropdownButton, Modal, TextEditor, Tooltip} from "@/components";
import {useTranslations} from "next-intl";
import {useAuth} from "@/context/AuthContext";
import {IconBrandYoutubeFilled, IconDotsVertical, IconLink, IconTrash, IconUpload} from "@tabler/icons-react";
import {YoutubeModal} from "@components/refer/modals";
import {AddedFile, ButtonProps, Modals, YoutubeFile} from './Refer.interface';
import Image from "next/image";
import {Link} from "@/i18n/routing";

const Refer: React.FC = () => {
    const [editorText, setEditorText] = useState('');
    const [isEditorOpen, setIsEditorOpen] = useState(false);

    const [modals, setModals] = useState<Modals>({
        youtube: { isOpen: false, value: '' },
        file: { isOpen: false, value: '' },
        link: { isOpen: false, value: '' },
    });

    const [files, setFiles] = useState<AddedFile[]>([]);

    const { user } = useAuth();
    const t = useTranslations('TextEditor');

    const handleOpenModal = (modal: keyof Modals) => {
        setModals(prevModals => ({
            ...prevModals,
            [modal]: {
                ...prevModals[modal],
                isOpen: true,
            },
        }));
    };

    const handleCloseModal = (modal: keyof Modals) => {
        setModals(prevModals => ({
            ...prevModals,
            [modal]: {
                value: '',
                isOpen: false,
            },
        }));
    };

    const handleChangeModalValue = (modal: keyof Modals, value: string) => {
        setModals(prevModals => ({
            ...prevModals,
            [modal]: {
                ...prevModals[modal],
                value: value,
            },
        }));
    };

    const handleAddYoutubeFile = (file: YoutubeFile) => {
        setFiles(prevFiles => [
            ...prevFiles,
            { youtube: file }
        ]);
    };

    // const handleAddUploadedFile = (file: UploadedFile) => {
    //     setFiles(prevFiles => [
    //         ...prevFiles,
    //         { uploaded: file }
    //     ]);
    // };

    const handleDeleteFile = (index: number) => {
        setFiles(prevFiles => [
            ...prevFiles.toSpliced(index, 1),
        ]);
    };

    // useEffect(() => {
    //     console.log(files);
    // }, [files]);

    const handleCancel = () => {
        setIsEditorOpen(false);
        setEditorText('');
        setFiles([]);
    };

    const buttonsData: ButtonProps[] = [
        {
            key: 'youtube',
            icon: <IconBrandYoutubeFilled />,
            tooltipText: t('youtube'),
            modal: (
                <YoutubeModal
                    onClose={() => handleCloseModal('youtube')}
                    value={modals.youtube.value}
                    onChange={(value) => handleChangeModalValue('youtube', value)}
                    onAdd={(file) => handleAddYoutubeFile(file)}
                />
            ),
        },
        {
            key: 'file',
            icon: <IconUpload />,
            tooltipText: t('file'),
            modal: <div>{t('file')}</div>,
        },
        {
            key: 'link',
            icon: <IconLink />,
            tooltipText: t('link'),
            modal: <div>{t('link')}</div>,
        },
    ];

    const formatDuration = (seconds: number): string => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');

        if (hours > 0) {
            return `${hours} ${hours === 1 
                ? 'час' 
                : hours === (2 | 3 | 4)
                    ? 'часа'
                    : 'часов'
            } ${minutes} ${minutes.endsWith('1')
                ? 'минута'
                : minutes.endsWith('2')
                || minutes.endsWith('3')
                || minutes.endsWith('4')
                    ? 'минуты'
                    : 'минут'
            }`;
        } else {
            return `${minutes} ${minutes.endsWith('1')
                ? 'минута'
                : minutes.endsWith('2')
                || minutes.endsWith('3')
                || minutes.endsWith('4')
                    ? 'минуты'
                    : 'минут'
            }`;
        }
    };

    return (
        <>
            {isEditorOpen && (
                <div className="w-full mx-auto pb-4 rounded-lg shadow-lg bg-[#f8f9fa]">
                    <div className="rounded-t p-4">
                        <TextEditor value={editorText} onChange={setEditorText} />
                    </div>
                    {files.length > 0 && (
                        <div className="flex flex-col gap-3 px-4 mb-4">
                            {files.map((file, index) => (
                                file.youtube && <div
                                    key={index}
                                    className="flex w-full border border-gray-300 rounded-md"
                                >
                                    <div
                                        className="flex w-1/6 h-16 items-center justify-center border-r border-gray-300 overflow-hidden">
                                        <Image
                                            src={file.youtube.thumbnail}
                                            alt="Thumbnail"
                                            width={70} height={70}
                                            className="h-full w-fit"
                                        />
                                    </div>
                                    <div
                                        className="flex w-5/6 rounded-r-lg items-center justify-between"
                                    >
                                        <Link
                                            href={file.youtube.url}
                                            target="_blank"
                                            className="flex flex-col justify-center w-full h-full overflow-hidden pl-3 group"
                                        >
                                            <span className="text-base font-semibold tracking-[.00625em] truncate youtube-title group-hover:text-blue-600 hover:underline w-fit">
                                                {file.youtube.title}
                                            </span>
                                            <div className="flex items-center gap-1 text-sm font-normal text-[#5f6368]">
                                                <span>
                                                    Видео YouTube
                                                </span>
                                                <span className="w-[3px] h-[3px] rounded-full bg-[#5f6368]"/>
                                                <span>
                                                    {formatDuration(file.youtube.duration)}
                                                </span>
                                            </div>
                                        </Link>
                                        <DropdownButton
                                            className="button p-3"
                                            buttonContent={<IconDotsVertical />}
                                            circle
                                            tooltip={{text: 'Варианты', position: 'bottom'}}
                                        >
                                            {(closeDropdown) => (
                                                <div className="flex flex-col gap-2 py-2 z-30 bg-white w-[330px]">
                                                    <button
                                                        className="button w-full h-12 px-6 flex gap-6 items-center justify-between"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            closeDropdown();
                                                            handleDeleteFile(index);
                                                        }}
                                                    >
                                                        <IconTrash width={24} />
                                                        <span className="text-base font-normal tracking-[.00625em]">
                                                            Удалить прикрепленный файл
                                                        </span>
                                                    </button>
                                                </div>
                                            )}
                                        </DropdownButton>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="flex items-center justify-between px-4">
                        <div className="flex gap-4">
                            {buttonsData.map((button) => (
                                <Tooltip
                                    key={button.key}
                                    text={button.tooltipText}
                                    position='bottom'
                                    isModalOpen={modals[button.key as keyof Modals].isOpen}
                                >
                                    <button
                                        className="button p-3 rounded-full border border-gray-200"
                                        onClick={() => handleOpenModal(button.key as keyof Modals)}
                                    >
                                        {button.icon}
                                    </button>
                                    <Modal
                                        isOpen={modals[button.key as keyof Modals].isOpen}
                                        onClose={() => handleCloseModal(button.key as keyof Modals)}
                                        noPadding
                                    >
                                        {button.modal}
                                    </Modal>
                                </Tooltip>
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={handleCancel}
                                className="button px-2 py-1 rounded"
                            >
                                {t('cancel')}
                            </button>
                            <button
                                className={`${editorText.trim() !== '' && 'button'} px-2 py-1 rounded disabled:text-gray-400`}
                                disabled={editorText.trim() === ''}
                            >
                                {t('publish')}
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {!isEditorOpen && (
                <div
                    className="w-full flex gap-3 items-center p-4 rounded-lg shadow-md hover:cursor-pointer text-gray-500 hover:text-gray-700"
                    onClick={() => setIsEditorOpen(true)}
                >
                    <Avatar size={'extraSmall'} src={user?.avatarUrl || ''} username={user?.name || 'User'} />
                    <span className="text-sm">{t('refer')}</span>
                </div>
            )}
        </>
    );
};

export default Refer;
