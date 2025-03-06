'use client';

import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { useFormContext, Controller, type FieldError } from 'react-hook-form';
import { cn } from '@/lib/utils';

export interface CodeFieldProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
    length?: number;
    name: string;
    error?: FieldError | undefined;
}

export interface CodeFieldRef {
    focus: () => void;
}

const CodeField = forwardRef<CodeFieldRef, CodeFieldProps>(
    ({ length = 6, name, className, ...props }, ref) => {
        const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
        const { control } = useFormContext();

        const [isFocused, setIsFocused] = useState(false);

        const handleChange = (index: number, newValue: string, onChange: (value: string) => void) => {
            if (!/^\d*$/.test(newValue)) return;

            const newCode = Array.from({ length }, (_, i) => inputsRef.current[i]?.value || '');
            newCode[index] = newValue;
            onChange(newCode.join(''));

            if (newValue && index < length - 1) {
                inputsRef.current[index + 1]?.focus();
            }
        };

        const handleKeyDown = (index: number, event: React.KeyboardEvent) => {
            if (event.key === 'Backspace' && !inputsRef.current[index]?.value && index > 0) {
                inputsRef.current[index - 1]?.focus();
            }
        };

        const handlePaste = (event: React.ClipboardEvent, onChange: (value: string) => void) => {
            event.preventDefault();
            const pasteData = event.clipboardData.getData('text').slice(0, length);
            const newCode = Array.from({ length }, (_, i) => pasteData[i] || '');
            newCode.forEach((value, i) => {
                if (inputsRef.current[i]) {
                    inputsRef.current[i]!.value = value;
                }
            });
            onChange(newCode.join(''));
            inputsRef.current[Math.min(pasteData.length, length - 1)]?.focus();
        };

        const handleDivClick = () => {
            const firstEmptyIndex = Array.from({ length }).findIndex(
                (_, i) => !inputsRef.current[i]?.value
            );
            const indexToFocus = firstEmptyIndex === -1 ? length - 1 : firstEmptyIndex;
            inputsRef.current[indexToFocus]?.focus();
            setIsFocused(true);
        };

        useImperativeHandle(ref, () => ({
            focus: () => {
                inputsRef.current[0]?.focus();
            },
        }));

        return (
            <Controller
                name={name}
                control={control}
                defaultValue=''
                rules={{
                    validate: (value) => {
                        if (value.length === length) return true;
                        return 'Код должен быть введён полностью';
                    },
                }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <div className='flex flex-col gap-2'>
                        <div
                            className={cn(
                                'group flex items-center w-full justify-between cursor-text',
                                className
                            )}
                            onClick={handleDivClick}
                            onBlur={() => setIsFocused(false)}
                        >
                            {Array.from({ length }).map((_, index) => (
                                <input
                                    key={index}
                                    ref={(el) => {
                                        inputsRef.current[index] = el;
                                    }}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={1}
                                    value={value[index] || ''}
                                    onChange={(e) => handleChange(index, e.target.value, onChange)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    onPaste={(e) => handlePaste(e, onChange)}
                                    onFocus={() => setIsFocused(true)}
                                    className={cn(
                                        'w-10 h-12 text-center border rounded-md pointer-events-none',
                                        'group-hover:border-blue-400 transition-colors',
                                        isFocused && 'outline-none ring-2 border-0',
                                        isFocused && (
                                            error ? 'ring-red-500' : 'ring-blue-500'
                                        ),
                                        error && 'border-red-500'
                                    )}
                                    {...props}
                                />
                            ))}
                        </div>
                        {error && (
                            <span
                                className={cn(
                                    'text-bodySmall text-red-500'
                                )}
                            >
                                {error.message}
                            </span>
                        )}
                    </div>
                )}
            />
        );
    }
);

CodeField.displayName = 'CodeField';

export { CodeField };
