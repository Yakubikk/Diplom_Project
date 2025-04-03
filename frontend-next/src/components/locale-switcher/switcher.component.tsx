import {useLocale, useTranslations} from 'next-intl';
import SwitcherSelect from './switcher.select';
import {locales} from "@/config";
import React from "react";

interface LocaleSwitcherProps {
    absolute?: boolean
}

const LocaleSwitcher: React.FC<LocaleSwitcherProps> = ({absolute}) => {
    const t = useTranslations('LocaleSwitcher');
    const locale = useLocale();

    return (
        <SwitcherSelect defaultValue={locale} label={t('label')} absolute={absolute}>
            {locales.map((cur) => (
                <option key={cur} value={cur}>
                    {t('locale', {locale: cur})}
                </option>
            ))}
        </SwitcherSelect>
    );
}

export {LocaleSwitcher};
export default LocaleSwitcher;
