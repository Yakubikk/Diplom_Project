import React from "react";
import {Avatar} from "@/components";
import {Link} from "@/i18n/routing";
import {useTranslations} from "next-intl";
import {useAuth} from "@/context/AuthContext";

interface JoinModalProps {
    code: string;
    onChange: (value: string) => void;
    isCodeValid: boolean;
    closeModal: () => void;
}

const JoinModal: React.FC<JoinModalProps> = ({code, onChange, isCodeValid, closeModal}) => {
    const {user} = useAuth();
    const tj = useTranslations('Header.join');

    if (!user) return null;

    return (
        <div className="flex flex-col gap-5">
            <span className="text-base font-semibold text-[#3c4043]">{tj('join')}</span>
            <div className="flex flex-col p-6 border border-gray-300 rounded-lg gap-3">
                <span className="text-sm text-[#5f6356]">{tj('logged')}</span>
                <div className="flex items-center justify-between">
                    <div className="flex gap-3 items-center">
                        <Avatar src={user.avatarUrl} username={user?.name} size={'extraSmall'}/>
                        <div className="flex flex-col">
                                            <span className="text-sm text-[#3c4043] font-semibold">
                                                {user.name}
                                            </span>
                            <span className="text-xs font-normal text-[#5f6368]">
                                                {user.email}
                                            </span>
                        </div>
                    </div>
                    <Link
                        href={'/login'}
                        className="button w-fit h-9 px-6 rounded border border-gray-300
                                        text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center"
                    >
                        {tj('changeAccount')}
                    </Link>
                </div>
            </div>
            <div className="flex flex-col p-6 border border-gray-300 rounded-lg gap-3">
                <div className="flex flex-col">
                    <span className="text-sm text-[#3c4043] font-semibold">{tj('courseCode')}</span>
                    <span className="text-sm text-[#5f6356] font-medium">{tj('enterCode')}</span>
                </div>
                <input
                    type="text"
                    value={code}
                    onChange={(e) => onChange(e.target.value)}
                    className={`w-2/3 p-3 border border-gray-300 rounded outline-none ${
                        !isCodeValid && !(code.length < 5)
                            ? 'text-red-500 border-red-500 focus:ring-1 focus:ring-red-500'
                            : 'focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                    }`}
                    placeholder={tj('courseCode')}
                />
            </div>
            <div className="flex flex-col px-6 gap-2 text-[#3c4043]">
                <span>{tj('howToLogin')}</span>
                <div className="flex flex-col gap-4 px-1 max-w-xs">
                    <div className="flex gap-2">
                        <span className="min-w-1.5 h-1.5 rounded-full bg-[#3c4043] mt-1.5"/>
                        <span className="text-sm font-normal">
                            {tj('useWithAccess')}
                        </span>
                    </div>
                    <div className="flex gap-2">
                        <span
                            className={`min-w-1.5 h-1.5 rounded-full mt-1.5 ${
                                !isCodeValid && !(code.length < 5) ? 'bg-red-500' : 'bg-[#3c4043]'
                            }`}
                        />
                        <span
                            className={`text-sm font-normal ${
                                !isCodeValid && !(code.length < 5) && 'text-red-500'
                            }`}
                        >
                            {tj('enterCodeHow')}
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 self-end">
                <button
                    className="button w-fit h-9 px-6 rounded border border-gray-300 text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center"
                    onClick={closeModal}
                >
                    {tj('cancel')}
                </button>
                <button
                    disabled={code.length < 5 || code.length > 7 || !isCodeValid}
                    className={`w-fit h-9 px-6 rounded border border-gray-300 text-blue-600 hover:text-blue-700 ${
                        code.length >= 5 && code.length <= 7 && isCodeValid && 'button'
                    } text-sm font-semibold flex items-center disabled:border-transparent disabled:text-[#5f6368]`}
                >
                    {tj('join')}
                </button>
            </div>
        </div>
    );
}

export default JoinModal;
