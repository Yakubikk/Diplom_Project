import {
    type TabsTriggerVariantProps,
    TabsTriggerVariants,
} from './tabs.variants';

export const getRippleVariant = (
    variant: TabsTriggerVariantProps['variant'],
    ripple: boolean | 'light' | 'dark'
) => {
    if (typeof ripple === 'boolean') {
        if (variant === `${TabsTriggerVariants.contained}`) return 'light';
        return 'dark';
    }
    return ripple;
};
