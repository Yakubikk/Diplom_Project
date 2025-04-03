'use client';

import { Dialog, DialogContent, DialogTitle } from '@/components';
import useJoinModal from '@/hooks/useJoinModal';
import { JoinCLassForm } from './join-form';
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export const JoinModal = () => {
    const joinModal = useJoinModal();

    return (
        <Dialog open={joinModal.isOpen} onOpenChange={joinModal.onClose}>
            <DialogContent
                aria-describedby={undefined}
                className='p-5'
            >
                <VisuallyHidden>
                    <DialogTitle />
                </VisuallyHidden>
                <JoinCLassForm />
            </DialogContent>
        </Dialog>
    );
};
