import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';
import { theme } from '@/theme';
import React from "react";

/**
 * Recursively flattens the keys of a nested object, excluding the 'DEFAULT' key.
 * Returns an array of strings representing the flattened keys.
 *
 * @param {object|undefined} obj - The object to flatten.
 * @param {string} prefix - The prefix to add to each key (default is an empty string).
 * @return {string[]} An array of flattened keys.
 */
const flattenObjectKeysExcludeDefault = (
    obj: object | undefined,
    prefix: string = ''
): string[] => {
    if (typeof obj !== 'object' || obj === null) {
        return [];
    }

    let keys: string[] = [];

    for (const [key, value] of Object.entries(obj)) {
        if (key === 'DEFAULT') {
            // Добавляем только путь к родительскому ключу, если есть DEFAULT
            keys.push(prefix.slice(0, -1));
            continue;
        }

        const newKey = prefix + key;

        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            // Для вложенных объектов делаем рекурсивный вызов
            keys = keys.concat(flattenObjectKeysExcludeDefault(value, newKey + '-'));
        } else {
            // Если не объект, добавляем непосредственно
            keys.push(newKey);
        }
    }

    return keys;
};

export const twMerge = extendTailwindMerge({
    extend: {
        classGroups: {
            'font-size': flattenObjectKeysExcludeDefault(theme?.fontSize, 'text-'),
            leading: flattenObjectKeysExcludeDefault(theme?.lineHeight, 'leading-'),
            'text-color': flattenObjectKeysExcludeDefault(theme?.colors, 'text-'),
            'bg-color': flattenObjectKeysExcludeDefault(theme?.colors, 'bg-'),
            rounded: flattenObjectKeysExcludeDefault(theme?.borderRadius, 'rounded-'),
        },
    },
});

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Converts a CSS measurement in pixels (px) to a measurement in relative ems (rem).
 * @param {number|string} px - The measurement in pixels.
 * @param {number} [base=16] - The base font size in pixels.
 * @return {string} The measurement in relative ems.
 */
export const pxToRem = (px: number | string, base: number = 16): string => {
    const tempPx = `${px}`.replace('px', '');
    return (1 / base) * parseInt(tempPx) + 'rem';
};

export const preventParentRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
};
