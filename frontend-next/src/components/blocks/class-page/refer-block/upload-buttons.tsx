import {
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    ReferButtonProps,
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
    YoutubeFile
} from "@/components";
import React from "react";
import {IconBrandYoutubeFilled, IconLink, IconUpload} from "@tabler/icons-react";
import {LinkModal, YoutubeModal, UploadModal} from "./modals";
import {useFileModal, useLinkModal, useYoutubeModal} from "@/hooks/useClassAssignmentModal";
import {useTranslations} from "next-intl";
import {VisuallyHidden} from "@radix-ui/react-visually-hidden";

interface UploadButtonsProps {
    addYoutubeFile: (file: YoutubeFile) => void;
    uploadFile: (file: File[]) => void;
    addLink: (link: string) => void;
}

/**
 * UploadButtons is a functional component that renders a set of buttons for uploading
 * different types of content: YouTube videos, files, and links. Each button opens a modal
 * dialog for adding the respective content type. The component makes use of tooltips to
 * display information about each button and uses modals to handle content addition.
 *
 * Props:
 * - addYoutubeFile: Function to handle adding a YouTube file.
 * - uploadFiles: Function to handle uploading multiple files.
 * - addLink: Function to handle adding a link.
 *
 * The component uses `useTranslations` for internationalization of tooltip text, and
 * custom hooks `useYoutubeModal`, `useFileModal`, and `useLinkModal` for managing modal
 * states.
 */
const UploadButtons: React.FC<UploadButtonsProps> = ({addYoutubeFile, addLink, uploadFile}) => {
    const t = useTranslations('TextEditor');
    const youtubeModal = useYoutubeModal();
    const fileModal = useFileModal();
    const linkModal = useLinkModal();

    const buttonsData: ReferButtonProps[] = [
        {
            key: 'youtube',
            icon: <IconBrandYoutubeFilled />,
            tooltipText: t('youtube'),
            modal: youtubeModal,
            content: (
                <YoutubeModal
                    onClose={youtubeModal.onClose}
                    onAdd={addYoutubeFile}
                />
            ),
        },
        {
            key: 'file',
            icon: <IconUpload />,
            tooltipText: t('file'),
            modal: fileModal,
            content: (
                <UploadModal
                    onClose={fileModal.onClose}
                    onAdd={uploadFile}
                />
            ),
        },
        {
            key: 'link',
            icon: <IconLink />,
            tooltipText: t('link'),
            modal: linkModal,
            content: (
                <LinkModal
                    onClose={linkModal.onClose}
                    onAdd={addLink}
                />
            )
        },
    ];

    return (
        <div className='flex gap-3'>
            <TooltipProvider disableHoverableContent>
                {buttonsData.map((button) => (
                    <React.Fragment key={button.key}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <IconButton
                                    onClick={button.modal.onOpen}
                                    ripple
                                >
                                    {button.icon}
                                </IconButton>
                            </TooltipTrigger>
                            <TooltipContent>
                                {button.tooltipText}
                            </TooltipContent>
                        </Tooltip>
                        <Dialog
                            open={button.modal.isOpen}
                            onOpenChange={button.modal.onClose}
                        >
                            <VisuallyHidden>
                                <DialogTitle/>
                            </VisuallyHidden>
                            <DialogContent
                                aria-describedby={undefined}
                            >
                                {button.content}
                            </DialogContent>
                        </Dialog>
                    </React.Fragment>
                ))}
            </TooltipProvider>
        </div>
    );
}

export {UploadButtons};
export default UploadButtons;
