import React from "react";

export interface ModalState {
    isOpen: boolean;
    value: string;
}

export interface Modals {
    youtube: ModalState;
    file: ModalState;
    link: ModalState;
}

export interface YoutubeFile {
    title: string;
    url: string;
    thumbnail: string;
    duration: number;
}

export interface UploadedFile {
    title: string;
    type: string;
}

export interface AddedFile {
    youtube?: YoutubeFile;
    uploaded?: UploadedFile;
}

export interface ButtonProps {
    key: string;
    icon: React.ReactNode;
    tooltipText: string;
    modal: React.ReactNode;
}
