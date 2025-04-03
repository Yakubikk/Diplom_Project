'use client';

import React, {
    forwardRef,
    type MouseEventHandler,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';
import {
    type FieldError,
    type FieldErrorsImpl,
    type Merge,
    useFormContext,
} from 'react-hook-form';
import { InputMask } from '@react-input/mask';
import ClearIcon from '@/assets/icons/clear.svg';
import EyeSlashIcon from '@/assets/icons/eye-slash.svg';
import EyeIcon from '@/assets/icons/eye.svg';
import BelarusFlag from '@/assets/flags/belarus-flag.svg';
import RussiaFlag from '@/assets/flags/russia-flag.svg';
import { IconButton } from '@/components/inputs';
import { cn } from '@/lib/utils';
import {
    borderVariants,
    TextFieldSizes,
    type TextFieldVariantProps,
    TextFieldVariants,
    textFieldVariants,
} from './text-field.variants';

export interface TextFieldProps
    extends Omit<
        React.InputHTMLAttributes<HTMLInputElement>,
        'color' | 'size' | 'name' | 'error' | 'children'
    >,
        Omit<TextFieldVariantProps, 'error' | 'success' | 'warning'> {
    label?: React.ReactNode;
    name: string;
    helpText?: React.ReactNode;
    clearable?: boolean;
    clearableButton?: React.ReactNode;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    error?: FieldError | Merge<FieldError, FieldErrorsImpl> | undefined;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
    (
        {
            className,
            autoFocus,
            readOnly,
            size,
            variant,
            type = 'text',
            name,
            onChange,
            label,
            helpText,
            clearable,
            clearableButton,
            disabled,
            startIcon,
            endIcon,
            placeholder,
            ...props
        },
        ref
    ) => {
        const inputRef = useRef<HTMLInputElement | null>(null);
        const [passwordVisible, setPasswordVisible] = useState(false);
        const [isFocused, setIsFocused] = useState(false);
        const [phoneMask, setPhoneMask] = useState<'belarus' | 'russia'>('belarus');

        const { getFieldState, resetField, watch } = useFormContext();

        const { error } = getFieldState(name);
        const value = watch(name);

        useImperativeHandle(ref, () => inputRef.current!);

        const handleClear: MouseEventHandler<HTMLButtonElement> = () => {
            resetField?.(name);
            inputRef.current?.focus();
        };

        const handleFocus = () => {
            setIsFocused(true);
        };

        const handleBlur = () => {
            setIsFocused(!!inputRef.current?.value);
        };

        const shouldAnimateLabel = !label && placeholder;
        const isOutlined = variant === 'outlined';

        const phoneMasks = {
            belarus: '+375 (__) ___-__-__',
            russia: '+7 (___) ___-__-__',
        };

        const togglePhoneMask = () => {
            resetField?.(name);
            setPhoneMask((prev) => (prev === 'belarus' ? 'russia' : 'belarus'));
            inputRef.current?.focus();
        };

        return (
            <>
                <div className='relative w-full'>
                    <label
                        htmlFor={name}
                        className={cn(
                            'absolute font-normal transition-all duration-200',
                            shouldAnimateLabel && !isOutlined && {
                                'left-0 translate-x-[8px] translate-y-[-12px] text-mobil text-gray-500':
                                    isFocused || value,
                                'left-0 translate-y-2.5 pl-[6px] text-bodyLarge text-gray-400':
                                    !isFocused && !value,
                            },
                            shouldAnimateLabel && isOutlined && {
                                'left-0 translate-x-[8px] text-mobil text-gray-500':
                                    isFocused || value,
                                'left-3.5 translate-y-[34px] pl-[6px] text-bodyLarge text-gray-400':
                                    !isFocused && !value,
                            },
                        )}
                    >
                        {label ?? (type !== 'phone' && placeholder)}
                    </label>
                    <div className='w-full flex items-center'>
                        {type === 'phone' && (
                            <IconButton
                                type="button"
                                variant="outlined"
                                onClick={togglePhoneMask}
                                className="mr-2"
                                shape='square'
                                ripple
                            >
                                {phoneMask === 'belarus' ? <BelarusFlag /> : <RussiaFlag />}
                            </IconButton>
                        )}
                        <div
                            className={cn(
                                'w-full relative flex items-center',
                                isOutlined && 'mt-6 mx-1',
                            )}
                            onBlur={handleBlur}
                        >
                            {startIcon && (
                                <span
                                    className={cn('flex items-center', {
                                        'ml-3': variant === `${TextFieldVariants.outlined}`,
                                        'ml-2.5':
                                            variant === `${TextFieldVariants.outlined}` &&
                                            size === `${TextFieldSizes.small}`,
                                    })}
                                >
                                    {startIcon}
                                </span>
                            )}
                            {type === 'phone' ? (
                                <InputMask
                                    key={phoneMask}
                                    id={name}
                                    name={name}
                                    ref={inputRef}
                                    mask={phoneMasks[phoneMask]}
                                    replacement={{ _: /\d/ }}
                                    value={value || phoneMasks[phoneMask]}
                                    onChange={onChange}
                                    showMask
                                    autoFocus={autoFocus}
                                    autoComplete="off"
                                    disabled={disabled}
                                    data-disabled={Boolean(disabled).toString()}
                                    data-error={Boolean(error).toString()}
                                    className={cn(
                                        'peer block w-full border-0 bg-transparent pl-[6px] text-bodyLarge font-medium outline outline-0 transition-colors placeholder:pl-[6px] focus:outline-none disabled:cursor-not-allowed disabled:bg-transparent disabled:text-black/45',
                                        textFieldVariants({
                                            variant,
                                            size,
                                        }),
                                        className
                                    )}
                                    onFocus={handleFocus}
                                />
                            ) : (
                                <input
                                    id={name}
                                    name={name}
                                    value={value}
                                    onChange={onChange}
                                    type={passwordVisible ? 'text' : type}
                                    disabled={disabled}
                                    autoFocus={autoFocus}
                                    autoComplete="off"
                                    data-disabled={Boolean(disabled).toString()}
                                    data-error={Boolean(error).toString()}
                                    className={cn(
                                        'peer block w-full border-0 bg-transparent pl-[6px] text-bodyLarge font-medium outline outline-0 transition-colors placeholder:pl-[6px] focus:outline-none disabled:cursor-not-allowed disabled:bg-transparent disabled:text-black/45',
                                        textFieldVariants({
                                            variant,
                                            size,
                                        }),
                                        {
                                            'pl-1.5': Boolean(startIcon),
                                        },
                                        className
                                    )}
                                    ref={inputRef}
                                    onFocus={handleFocus}
                                    placeholder={shouldAnimateLabel ? undefined : placeholder}
                                    {...props}
                                />
                            )}
                            {clearable && !disabled && !readOnly && (
                                <span
                                    className={cn('-mr-1 flex items-center', {
                                        invisible: !value,
                                        'mr-3':
                                            variant === `${TextFieldVariants.outlined}` &&
                                            !endIcon &&
                                            type !== 'password',
                                        'mr-1.5':
                                            size === `${TextFieldSizes.small}` &&
                                            variant === `${TextFieldVariants.outlined}` &&
                                            !endIcon &&
                                            type !== 'password',
                                    })}
                                >
                                    {clearableButton ?? (
                                        <IconButton
                                            type="button"
                                            size="small"
                                            variant="text"
                                            onClick={handleClear}
                                        >
                                            <ClearIcon />
                                        </IconButton>
                                    )}
                                </span>
                            )}
                            {(endIcon ?? (type === 'password' && !disabled)) && (
                                <span
                                    className={cn('ml-1.5 flex items-center', {
                                        'mr-3': variant === `${TextFieldVariants.outlined}`,
                                        'mr-2.5':
                                            variant === `${TextFieldVariants.outlined}` &&
                                            size === `${TextFieldSizes.small}`,
                                    })}
                                >
                                    {endIcon}
                                    {type === 'password' && !disabled && (
                                        <span
                                            className={cn('flex items-center', {
                                                'ml-1.5': Boolean(endIcon),
                                            })}
                                        >
                                            <IconButton
                                                size="small"
                                                data-testid="password-button"
                                                className="[&>svg]:h-5 [&>svg]:w-5"
                                                ripple
                                                onClick={() => {
                                                    setPasswordVisible((visible) => !visible);
                                                    if (value) inputRef.current?.focus();
                                                }}
                                            >
                                                {passwordVisible ? <EyeIcon /> : <EyeSlashIcon />}
                                            </IconButton>
                                        </span>
                                    )}
                                </span>
                            )}
                            <span
                                className={cn(
                                    borderVariants({
                                        variant,
                                    })
                                )}
                            />
                            {helpText && !error && (
                                <span
                                    className={cn(
                                        'absolute left-0 right-0 top-full mt-1 flex items-center pl-[6px] text-mobil'
                                    )}
                                >
                                    {helpText}
                                </span>
                            )}
                            {error && (
                                <span
                                    className={cn(
                                        'absolute left-0 right-0 top-full mt-1 flex items-center pl-[6px] text-mobil text-red-500'
                                    )}
                                >
                                    {error.message ?? 'Error'}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </>
        );
    }
);

TextField.displayName = 'TextField';

export { TextField };
export default TextField;
