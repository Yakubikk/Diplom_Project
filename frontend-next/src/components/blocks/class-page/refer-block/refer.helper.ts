export const formatDuration = (
    seconds: number,
    translations: {
        hour: { one: string; few: string; many: string };
        minute: { one: string; few: string; many: string };
    }
): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    const format = (count: number, translations: { one: string; few: string; many: string }) => {
        const lastDigit = count % 10;
        const lastTwoDigits = count % 100;

        if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
            return translations.many;
        }

        if (lastDigit === 1) {
            return translations.one;
        } else if (lastDigit >= 2 && lastDigit <= 4) {
            return translations.few;
        } else {
            return translations.many;
        }
    };

    const formattedHours = hours > 0 && `${hours} ${format(hours, translations.hour)}`;
    const formattedMinutes = `${minutes} ${format(minutes, translations.minute)}`;

    if (formattedHours) {
        return `${formattedHours} ${formattedMinutes}`;
    } else {
        return formattedMinutes;
    }
};

const formatLargeNumber = (num: number): string => {
    if (num >= 1_000_000_000) {
        return `${(num / 1_000_000_000).toFixed(1)}b`;
    } else if (num >= 1_000_000) {
        return `${(num / 1_000_000).toFixed(1)}m`;
    } else if (num >= 1_000) {
        return `${(num / 1_000).toFixed(1)}k`;
    } else {
        return num.toString();
    }
};

export const formatCount = (count: number, translations: { one: string; few: string; many: string }) => {
    const formattedCount = formatLargeNumber(count);
    const isAbbreviated = /[kmb]$/.test(formattedCount);

    if (isAbbreviated) {
        return `${formattedCount} ${translations.many}`;
    }

    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        return `${formattedCount} ${translations.many}`;
    }

    if (lastDigit === 1) {
        return `${formattedCount} ${translations.one}`;
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        return `${formattedCount} ${translations.few}`;
    } else {
        return `${formattedCount} ${translations.many}`;
    }
};

export const parseDuration = (duration: string): number => {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    if (!match) return 0;

    const hours = parseInt(match[1]) || 0;
    const minutes = parseInt(match[2]) || 0;
    const seconds = parseInt(match[3]) || 0;

    return hours * 3600 + minutes * 60 + seconds;
};

export const formatDate = (dateString: string, locale: string) => {
    const localeMap = {
        ru: 'ru-RU',
        be: 'be-BY',
        default: 'en-US',
    };

    const localeKey = (locale in localeMap ? locale : 'default') as keyof typeof localeMap;
    const selectedLocale = localeMap[localeKey];

    return new Date(dateString).toLocaleDateString(selectedLocale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};
