import {AddedFile, Youtube, UploadedFile, AddedLink} from "@/components";
import React from "react";

interface RenderFileProps {
    file: AddedFile;
    index: number;
    onDelete: (index: number) => void;

}

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