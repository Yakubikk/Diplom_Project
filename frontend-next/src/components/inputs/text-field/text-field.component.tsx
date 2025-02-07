'use client';

import React, {
  forwardRef,
  type MouseEventHandler,
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
} from 'react';
import {
  type FieldError,
  type FieldErrorsImpl,
  type Merge,
  useFormContext,
} from 'react-hook-form';
import ClearIcon from '@/assets/icons/clear.svg';
import EyeSlashIcon from '@/assets/icons/eye-slash.svg';
import EyeIcon from '@/assets/icons/eye.svg';
import { IconButton } from '@/components/inputs';
import { cn } from '@/lib/utils';
import {
  borderVariants,
  TextFieldSizes,
  type TextFieldVariantProps,
  TextFieldVariants,
  textFieldVariants,
} from './text-field.variants';

// import './style.css';

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
      readOnly,
      size,
      variant,
      type = 'text',
      name,
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

    useEffect(() => {
      if (value) {
        setIsFocused(true);
      }
    }, [value]);

    const shouldAnimateLabel = !label && placeholder;

    return (
      <>
        <div className={`relative w-full`}>
          <label
            htmlFor={name}
            className={cn(
              'absolute left-0 font-normal transition-all duration-200',
              shouldAnimateLabel && {
                'translate-x-[8px] translate-y-[-12px] text-mobil':
                  isFocused || value,
                'translate-y-2.5 pl-[6px] text-bodyLarge text-text-secondary/60':
                  !isFocused && !value,
              }
            )}
          >
            {label ?? placeholder}
          </label>
          <>
            <div className='relative flex items-center' onBlur={handleBlur}>
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
              <input
                id={name}
                name={name}
                type={passwordVisible ? 'text' : type}
                disabled={disabled}
                autoComplete='no'
                data-disabled={Boolean(disabled).toString()}
                className={cn(
                  'peer block w-full border-0 border-secondary bg-transparent pl-[6px] text-bodyLarge font-medium text-text-secondary outline outline-0 transition-colors placeholder:pl-[6px] focus:outline-0 disabled:cursor-not-allowed disabled:bg-transparent disabled:text-text-secondary/45',
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
                      type='button'
                      size='small'
                      variant='text'
                      ripple
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
                        size='small'
                        data-testid='password-button'
                        className='text-textSecondary [&>svg]:h-5 [&>svg]:w-5'
                        ripple
                        onClick={() =>
                          setPasswordVisible((visible) => !visible)
                        }
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
              ></span>
              {helpText && (
                <span
                  className={cn(
                    'absolute left-0 right-0 top-full mt-1 flex items-center pl-[6px] text-mobil text-text-secondary'
                  )}
                >
                  {helpText}
                </span>
              )}
              {error && (
                <span
                  className={cn(
                    'absolute left-0 right-0 top-full mt-1 flex items-center pl-[6px] text-mobil text-error'
                  )}
                >
                  {error?.message ?? 'Error'}
                </span>
              )}
            </div>
          </>
        </div>
      </>
    );
  }
);

TextField.displayName = 'TextField';

export { TextField };
export default TextField;
