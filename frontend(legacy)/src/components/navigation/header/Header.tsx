'use client'

import React, {useState} from 'react';
import {Avatar, Breadcrumbs, DropdownButton, LocaleSwitcher, Modal, Tooltip} from "@/components";
import {useAuth} from "@/context/AuthContext";
import {IconCalendar, IconPencil, IconPlus} from "@tabler/icons-react";
import {Link, usePathname} from "@/i18n/routing";
import {useTranslations} from "next-intl";
import JoinModal from "./JoinModal";

const Header: React.FC = () => {
    const {user} = useAuth();
    const ta = useTranslations('Header.account');
    const tj = useTranslations('Header.join');
    const tc = useTranslations('Header.calendar');
    const path = usePathname();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [code, setCode] = useState('');
    const [isCodeValid, setIsCodeValid] = useState(true);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setCode('');
        setIsModalOpen(false);
    };

    const validateCode = (code: string) => {
        const regex = /^[a-zA-Z0-9]{5,7}$/;
        return regex.test(code);
    };

    const handleCodeChange = (value: string) => {
        setCode(value);
        setIsCodeValid(validateCode(value));
    };

    return (
        <div className='w-full min-h-16 flex justify-between items-center px-2 border-b border-gray-300'>
            <div>
                <Breadcrumbs />
            </div>
            <div className='flex gap-2 items-center'>
                {!path.startsWith('/calendar') && !path.startsWith('/class') && user && <Tooltip
                    text={tj('join')}
                    position="bottom"
                    isModalOpen={isModalOpen}
                    className="rounded-full"
                >
                    <button
                        onClick={openModal}
                        className="button w-12 h-12 p-3 rounded-full"
                    >
                        <IconPlus/>
                    </button>

                    <Modal isOpen={isModalOpen} onClose={closeModal}>
                        <JoinModal
                            code={code}
                            onChange={handleCodeChange}
                            isCodeValid={isCodeValid}
                            closeModal={closeModal}
                        />
                    </Modal>
                </Tooltip>}

                {path.startsWith('/calendar') && <Tooltip
                    text={tc('today')}
                    position="bottom"
                    isModalOpen={isModalOpen}
                    className="rounded-full"
                >
                    <button
                        onClick={() => {
                        }}
                        className="button w-12 h-12 p-3 rounded-full"
                    >
                        <IconCalendar/>
                    </button>
                </Tooltip>}

                {user && <DropdownButton
                    buttonContent={(
                        <Avatar src={user.avatarUrl} size='small' username={user.name}/>
                    )}
                    avatar
                    className="rounded-full h-12"
                >
                    {() => (
                        <div
                            className="flex flex-col items-center w-[412px] bg-[#e9eef6] shadow-xl border border-gray-200 rounded-3xl p-3"
                        >
                            <span className="text-sm font-semibold mb-6">{user.email}</span>
                            <div className="relative h-fit hover:cursor-pointer rounded-full mb-4">
                                <Avatar src={user.avatarUrl} size='huge' username={user.name}/>
                                <div
                                    className="absolute w-6 h-6 flex items-center justify-center rounded-full bg-white right-0 top-14">
                                    <IconPencil width={20} height={20}/>
                                </div>
                            </div>
                            <span className="text-xl mb-2">{`${ta('hello')}, ${user.name}!`}</span>
                            <Link
                                href="/account"
                                className="py-2 px-4 bg-transparent border border-gray-600 font-semibold text-sm text-blue-600 rounded-full"
                            >
                                {ta('accountManagement')}
                            </Link>
                        </div>
                    )}
                </DropdownButton>}
                <LocaleSwitcher/>
            </div>
        </div>
    );
};

export default Header;
