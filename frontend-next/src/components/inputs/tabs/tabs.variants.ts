import { cva, type VariantProps } from 'class-variance-authority';
import {cn} from "@/lib/utils";

export enum TabsListVariants {
    default = 'default',
    filled = 'filled',
}

export enum TabsTriggerVariants {
    text = 'text',
    outlined = 'outlined',
    contained = 'contained',
}

export enum TabsContentVariants {
    default = 'default',
    padded = 'padded',
}

export enum TabsSizes {
    extraSmall = 'extraSmall',
    small = 'small',
    medium = 'medium',
    large = 'large',
}

const tabsListVariants = cva(
    'flex items-center justify-center rounded-lg gap-4', {
        variants: {
            variant: {
                [TabsListVariants.default]: 'bg-transparent',
                [TabsListVariants.filled]: 'bg-gray-100',
            },
            size: {
                [TabsSizes.extraSmall]: 'h-6',
                [TabsSizes.small]: 'h-8',
                [TabsSizes.medium]: 'h-10',
            },
        },
        defaultVariants: {
            variant: TabsListVariants.default,
            size: TabsSizes.medium,
        },
    }
);

const tabsTriggerVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-0 text-bodySmall font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                [`${TabsTriggerVariants.text}`]:
                    cn(
                        'border-b-2 border-gray-400 text-gray-400 rounded-t-md',
                        'data-[state=active]:border-blue-600 data-[state=active]:text-blue-600',
                        'hover:border-blue-400 hover:text-blue-400'
                    ),
                [`${TabsTriggerVariants.outlined}`]:
                    cn(
                        'border border-gray-400 text-gray-400 rounded-md px-3',
                        'data-[state=active]:border-blue-600 data-[state=active]:text-blue-600',
                        'hover:border-blue-400 hover:text-blue-400'
                    ),
                [`${TabsTriggerVariants.contained}`]:
                    cn(
                        'bg-gray-100 text-gray-400 rounded-md px-3',
                        'data-[state=active]:bg-blue-600 data-[state=active]:text-white',
                        'hover:bg-blue-100 hover:text-blue-400'
                    ),
            },
            size: {
                [`${TabsSizes.small}`]: 'text-bodySmall py-0.5',
                [`${TabsSizes.medium}`]: 'text-bodyMedium py-1',
                [`${TabsSizes.large}`]: 'text-bodyLarge py-1.5',
            },
        },
        defaultVariants: {
            variant: TabsTriggerVariants.text,
            size: TabsSizes.medium,
        },
        compoundVariants: [
            {
                variant: `${TabsTriggerVariants.outlined}`,
                size: `${TabsSizes.large}`,
                className: 'border-2',
            },
        ],
    }
);

const tabsContentVariants = cva('mt-6 focus-visible:outline-none', {
    variants: {
        variant: {
            [TabsContentVariants.default]: '',
            [TabsContentVariants.padded]: 'p-4',
        },
    },
    defaultVariants: {
        variant: TabsContentVariants.default,
    },
});

export type TabsListVariantProps = VariantProps<typeof tabsListVariants>;
export type TabsTriggerVariantProps = VariantProps<typeof tabsTriggerVariants>;
export type TabsContentVariantProps = VariantProps<typeof tabsContentVariants>;

export { tabsListVariants, tabsTriggerVariants, tabsContentVariants };
