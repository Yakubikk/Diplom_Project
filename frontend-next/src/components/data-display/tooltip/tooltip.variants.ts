import { cva, type VariantProps } from 'class-variance-authority';

export enum TooltipVariants {
    default = 'default',
    primary = 'primary',
    success = 'success',
    warning = 'warning',
    error = 'error',
}

export enum TooltipSizes {
    small = 'small',
    medium = 'medium',
    large = 'large',
}

const tooltipVariants = cva(
    'z-50 overflow-hidden rounded-md cursor-default px-2 py-1 text-overlineLarge animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    {
        variants: {
            variant: {
                [`${TooltipVariants.default}`]: 'bg-gray-600 text-white',
                [`${TooltipVariants.primary}`]: 'bg-blue-600 text-white',
                [`${TooltipVariants.success}`]: 'bg-green-600 text-white',
                [`${TooltipVariants.warning}`]: 'bg-yellow-600 text-black',
                [`${TooltipVariants.error}`]: 'bg-red-600 text-white',
            },
            size: {
                [`${TooltipSizes.small}`]: 'text-overlineSmall',
                [`${TooltipSizes.medium}`]: 'text-overlineLarge',
                [`${TooltipSizes.large}`]: 'text-bodySmall',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'medium',
        },
    }
);

export type TooltipVariantProps = VariantProps<typeof tooltipVariants>;

export { tooltipVariants };
