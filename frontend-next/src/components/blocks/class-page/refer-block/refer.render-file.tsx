import {AddedFile, Youtube, UploadedFile, AddedLink} from "@/components";
import React from "react";

interface RenderFileProps {
    file: AddedFile;
    index: number;
    onDelete: (index: number) => void;

}

/**
 * Renders a component based on the type of the given file.
 *
 * @param {{youtube: YoutubeFile, uploaded: File[], link: string}} file - The file to render. Can be either a YouTube file, an uploaded file, or a link.
 * @param {number} index - The index of the file in the list of added files.
 * @param {function(number): void} onDelete - The function to call when the delete button is clicked.
 *
 * @returns {React.ReactNode} A React component representing the given file.
 */
export const RenderFile: React.FC<RenderFileProps> = ({file, index, onDelete}) => {
    if (file.youtube) {
        return (
            <Youtube
                key={index}
                index={index}
                file={file.youtube}
                onDelete={onDelete}
            />
        );
    }
    if (file.uploaded) {
        return (
            <UploadedFile
                key={index}
                index={index}
                file={file.uploaded}
                onDelete={onDelete}
            />
        );
    }
    if (file.link) {
        return (
            <AddedLink
                key={index}
                index={index}
                link={file.link}
                onDelete={onDelete}
            />
        );
    }
    return null;
};
