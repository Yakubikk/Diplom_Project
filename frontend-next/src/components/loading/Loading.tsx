import "./loading.css";
import {useTranslations} from "next-intl";
import React from "react";

const Loading: React.FC = () => {
    const t = useTranslations('Loading');

    return (
        <div className="flex flex-col items-center justify-center bg-white">
            <div className="loading-spinner"/>
            <p className="loading-text">{t('loading')}</p>
        </div>
    );
}

export { Loading };
export default Loading;
