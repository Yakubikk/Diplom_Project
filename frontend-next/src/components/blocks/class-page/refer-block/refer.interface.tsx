import React from "react";
import {ClassAssignmentModalStore} from "@/hooks/useClassAssignmentModal";

export interface YoutubeFile {
    title: string;
    url: string;
    thumbnail: string;
    duration: number;
}

export interface AddedFile {
    youtube?: YoutubeFile;
    uploaded?: File[];
    link?: string;
}

export interface ReferButtonProps {
    key: string;
    icon: React.ReactNode;
    tooltipText: string;
    modal: ClassAssignmentModalStore;
    content: React.ReactNode;
}
