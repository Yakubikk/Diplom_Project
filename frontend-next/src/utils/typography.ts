import { type typographyHTMLElement } from '@/components';

const getTypographyFromIndex = (index: number): typographyHTMLElement => {
    const number = index + 1;

    return number < 7 ? (`h${number}` as typographyHTMLElement) : 'p';
};

export { getTypographyFromIndex };
