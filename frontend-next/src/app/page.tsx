import {LocaleSwitcher} from "@/components";
import {getTranslations} from "next-intl/server";

export default async function Home() {
    const t = await getTranslations('Components.localeSwitcher');

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <LocaleSwitcher text={t('toggle')} />
        </div>
    );
}
