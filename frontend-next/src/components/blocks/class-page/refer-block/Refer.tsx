'use client';

import React, { useEffect, useState, useCallback, useMemo } from 'react';
import {AccountAvatar, TextEditor, Button, AddedFile, YoutubeFile} from '@/components';
import { useTranslations } from 'next-intl';
import { UploadButtons } from './upload-buttons';
import { RenderFile } from './refer.render-file';

/**
* The Refer component is a functional component that renders a refer form.
* It uses the TextEditor component to render a text editor for the user to
* input text and the UploadButtons component to render buttons for uploading
* YouTube videos, files, and links.
*
* When the user clicks the "Publish" button, the component will call the
* `onSubmit` function with the current text and files as arguments.
*
* The component also uses the `useBeforeunload` hook to add a listener to the
* window's beforeunload event. When the user tries to close the page, the
* component will call the `handleBeforeUnload` function and prevent the page
* from closing if the form is valid.
*
* Props:
* - onSubmit: Function to call when the user clicks the "Publish" button.
*
* @example
* <Refer onSubmit={(text, files) => console.log(text, files)} />
*/
const Refer: React.FC = () => {
    const [editorText, setEditorText] = useState('');
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const [files, setFiles] = useState<AddedFile[]>([]);

    const t = useTranslations('TextEditor');

    const handleAddYoutubeFile = useCallback((file: YoutubeFile) => {
        setFiles(prevState => [...prevState, { youtube: file }]);
    }, []);

    const handleUploadFile = useCallback((file: File[]) => {
        setFiles(prevState => [...prevState, { uploaded: file }]);
    }, []);

    const handleAddLink = useCallback((link: string) => {
        setFiles(prevState => [...prevState, { link }]);
    }, []);

    const handleDeleteFile = useCallback((index: number) => {
        setFiles(prevFiles => [...prevFiles.toSpliced(index, 1)]);
    }, []);

    const handleCancel = useCallback(() => {
        setIsEditorOpen(false);
        setEditorText('');
        setFiles([]);
    }, []);

    const isFormValid = useMemo(() =>
        editorText.trim() || files.length > 0, [editorText, files]
    );

    useEffect(() => {
        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            if (isFormValid) {
                event.preventDefault();
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [isFormValid]);

    return (
        <>
            {isEditorOpen ? (
                <div className='w-full pb-4 rounded-lg shadow-lg bg-[#f8f9fa]'>
                    <div className='rounded-t p-4'>
                        <TextEditor value={editorText} onChange={setEditorText} />
                    </div>
                    {files.length > 0 && (
                        <div className='flex flex-col gap-3 px-4 mb-4'>
                            {files.map((file, index) => (
                                <RenderFile key={index} file={file} index={index} onDelete={handleDeleteFile} />
                            ))}
                        </div>
                    )}
                    <div className='flex items-center justify-between px-4'>
                        <UploadButtons
                            addYoutubeFile={handleAddYoutubeFile}
                            uploadFile={handleUploadFile}
                            addLink={handleAddLink}
                        />
                        <div className='flex gap-2'>
                            <Button
                                onClick={handleCancel}
                                variant='outlined'
                                size='sm'
                            >
                                {t('cancel')}
                            </Button>
                            <Button
                                disabled={!isFormValid}
                                size='sm'
                            >
                                {t('publish')}
                            </Button>
                        </div>
                    </div>
                </div>
            ) : (
                <div
                    className='w-full flex gap-3 items-center p-4 rounded-lg shadow-md hover:cursor-pointer text-gray-500 hover:text-gray-700'
                    onClick={() => setIsEditorOpen(true)}
                >
                    <AccountAvatar
                        src='https://i.gifer.com/PE61.gif'
                        fallback='RE'
                        size='extraSmall'
                    />
                    <span className='text-bodySmall'>{t('refer')}</span>
                </div>
            )}
        </>
    );
};

export { Refer };
export default Refer;
