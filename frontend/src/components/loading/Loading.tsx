import "./loading.css";
import {useTranslations} from "next-intl";

export default function Loading() {
    const t = useTranslations('Loading');

    return (
        <div className="flex flex-col items-center justify-center bg-white">
            <div className="loading-spinner"/>
            <p className="loading-text">{t('loading')}</p>
        </div>
    );
}