import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { cn } from '@/lib/utils';
import { Button } from '@/components';

interface FileDropzoneProps {
    onAdd: (file: File[]) => void;
    onClose: () => void;
}

/**
 * A `FileDropzone` component that allows the user to drop files into the component to
 * upload them. When a file is dropped, the `onAdd` callback is called with an array of
 * the dropped files. When the component is closed, the `onClose` callback is called.
 *
 * The component renders a drop zone with a dashed border and a button to select a
 * file. If a file is being dragged over the component, the border turns blue and the
 * text inside the component changes to "Отпустите файлы здесь...".
 *
 * @prop {function(File[]): void} onAdd
 * @prop {function(): void} onClose
 *
 * @example
 * <FileDropzone onAdd={handleAddFiles} onClose={handleClose} />
 */
const FileDropzone: React.FC<FileDropzoneProps> = ({ onAdd, onClose }) => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        onAdd(acceptedFiles);
        onClose();
    }, [onAdd, onClose]);

    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({ onDrop });

    return (
        <div
            {...getRootProps()}
            className={cn(
                'w-full h-full border-2 border-dashed rounded-b-lg text-center flex flex-col items-center justify-center',
                isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50'
            )}
        >
            <input {...getInputProps()} />
            {isDragActive ? (
                <p className='text-blue-500'>Отпустите файлы здесь...</p>
            ) : (
                <>
                    <p className='text-gray-700 mb-4'>Перетащите файлы сюда или</p>
                    <Button
                        onClick={open}
                        size='sm'
                        ripple
                    >
                        Выберите файл
                    </Button>
                </>
            )}
        </div>
    );
};

export { FileDropzone };
export default FileDropzone;
