import { cva, type VariantProps } from 'class-variance-authority';

export enum AvatarSizes {
    extraSmall = 'extraSmall',
    small = 'small',
    medium = 'medium',
    large = 'large',
    extraLarge = 'extraLarge',
}

export enum AvatarShapes {
    circle = 'circle',
    square = 'square',
}

const avatarVariants = cva(
    'inline-flex items-center justify-center overflow-hidden bg-gray-300',
    {
        variants: {
            size: {
                [`${AvatarSizes.extraSmall}`]: 'h-6 w-6',
                [`${AvatarSizes.small}`]: 'h-8 w-8',
                [`${AvatarSizes.medium}`]: 'h-12 w-12',
                [`${AvatarSizes.large}`]: 'h-16 w-16',
                [`${AvatarSizes.extraLarge}`]: 'h-20 w-20 text-h3Title font-semibold',
            },
            shape: {
                [`${AvatarShapes.circle}`]: 'rounded-full',
                [`${AvatarShapes.square}`]: 'rounded-md',
            },
            isButton: {
                true: 'cursor-pointer',
                false: '',
            },
            isLoaded: {
                false: 'animate-pulse',
            }
        },
        defaultVariants: {
            size: `${AvatarSizes.medium}`,
            shape: `${AvatarShapes.circle}`,
            isButton: false,
            isLoaded: true,
        },
        compoundVariants: [

        ],
    }
);

export type AvatarVariantProps = VariantProps<typeof avatarVariants>;

export { avatarVariants };
