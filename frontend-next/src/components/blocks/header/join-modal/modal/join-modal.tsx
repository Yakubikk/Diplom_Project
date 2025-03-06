'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components';
import useJoinModal from '@/hooks/useJoinModal';
import { ContactUsForm } from './join-form';

export const JoinModal = () => {
    const joinModal = useJoinModal();

    return (
        <Dialog open={joinModal.isOpen} onOpenChange={joinModal.onClose}>
            <DialogContent
                className="tablet:py-15 px-5 py-10 tablet:px-10 laptop:px-[112px] laptop:py-[80px]"
                aria-describedby={undefined}
            >
                <DialogHeader>
                    <DialogTitle className='mb-2 tablet:mb-5'>Contact</DialogTitle>
                </DialogHeader>
                <ContactUsForm isModal />
            </DialogContent>
        </Dialog>
    );
};
