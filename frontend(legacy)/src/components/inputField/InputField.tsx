import React, { useState } from 'react';
import Image from 'next/image';
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import arrow_down from '@/assets/arrow-down.svg';
import eye from '@/assets/eye.svg';

interface InputFieldProps {
    label?: string;
    placeholder?: string;
    leftIcon?: string | StaticImport;
    rightIcon?: string | StaticImport;
    menuItems?: string[];
    showClearButton?: boolean;
    disabled?: boolean;
    value: string;
    isDatePicker?: boolean;
    hidden?: boolean;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
}

const InputField: React.FC<InputFieldProps> = (
    {
        label,
        placeholder,
        leftIcon,
        rightIcon,
        menuItems,
        showClearButton = true,
        disabled = false,
        value,
        isDatePicker = false,
        hidden = false,
        onChange,
        autoFocus = false,
    }) => {
    const [open, setOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(hidden);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        if (onChange) {
            onChange(newValue);
        }
    };

    const handleClear = () => {
        if (onChange) {
            onChange('');
        }
    };

    const handleMenuItemClick = (item: string) => {
        if (onChange) {
            onChange(item);
        }
        setOpen(false);
    };

    const handleDateChange = (date: Date | null) => {
        if (date && onChange) {
            onChange(date.toISOString());
        }
    };

    return (
        <div className="flex flex-col gap-2 w-full">
            {label && <label className={`text-[#919399] ${disabled && 'text-opacity-45'} text-sm font-normal`}>{label}</label>}
            <div className={`relative flex items-center ${menuItems && 'hover:cursor-pointer'}`}>
                {leftIcon && <Image src={leftIcon} alt="icon" width={20} height={20} className="absolute left-3" />}
                {!menuItems && !isDatePicker && (
                    <input
                        autoFocus={autoFocus}
                        type={isHidden ? "password" : "text"}
                        value={value}
                        onChange={handleChange}
                        placeholder={placeholder}
                        disabled={disabled}
                        className={`${leftIcon ? 'pl-10' : 'pl-4'} ${
                            rightIcon ? 'pr-10' : 'pr-4'
                        } h-14 border border-[#D9DEE8] placeholder:text-[#919399] placeholder:text-opacity-45 ${
                            disabled ? 'text-[#919399] text-opacity-45 placeholder:text-transparent' : 'text-[#2C2D2E]'
                        } text-base font-bold rounded-xl focus:border-[#3B79FF] w-full`}
                    />
                )}
                {menuItems && !isDatePicker && (
                    <div
                        className={`${leftIcon ? 'pl-10' : 'pl-4'} bg-white pr-10 h-14 border border-[#D9DEE8] ${
                            disabled ? 'text-[#919399] text-opacity-45' : 'text-[#2C2D2E]'
                        } text-base font-bold rounded-xl focus:border-[#3B79FF] w-full flex items-center justify-center`}
                        onClick={() => setOpen(p => !p)}
                    >
                        {value}
                    </div>
                )}
                {isDatePicker && (
                    <DatePicker
                        selected={value as unknown as Date}
                        onChange={handleDateChange}
                        customInput={
                            <input
                                type="text"
                                value={value}
                                onChange={handleChange}
                                placeholder={placeholder}
                                disabled={disabled}
                                className={`${leftIcon ? 'pl-10' : 'pl-4'} ${
                                    rightIcon ? 'pr-10' : 'pr-4'
                                } h-14 border border-[#D9DEE8] placeholder:text-[#919399] placeholder:text-opacity-45 ${
                                    disabled ? 'text-[#919399] text-opacity-45 placeholder:text-transparent' : 'text-[#2C2D2E]'
                                } text-base font-bold rounded-xl focus:border-[#3B79FF] w-full`}
                            />
                        }
                    />
                )}
                {showClearButton && !disabled && !menuItems && !isDatePicker && !hidden && (
                    <button
                        type="button"
                        onClick={handleClear}
                        className="absolute right-3 text-[#A2A6B8] hover:text-[#2C2D2E]"
                    >
                        ✕
                    </button>
                )}
                {rightIcon && !showClearButton && !menuItems && !hidden && (
                    <Image src={rightIcon} alt="icon" width={20} height={20} className="absolute right-3 pointer-events-none" />
                )}
                {hidden && (
                    <Image src={eye} alt="icon" width={20} height={20} className="absolute right-3 hover:cursor-pointer"
                           onClick={() => setIsHidden(p => !p)}
                    />
                )}
                {menuItems && (
                    <>
                        <Image src={arrow_down} alt="icon" width={20} height={20} className="absolute right-3 pointer-events-none" />
                        {open && <div
                            className="absolute right-0 top-16 bg-white rounded-lg text-[#2C2D2E] font-normal flex flex-col gap-1 p-2">
                            <div
                                className="px-3 py-2 rounded-lg hover:bg-[#F7F8FC] text-nowrap"
                                onClick={() => handleMenuItemClick('')}
                            >
                                All
                            </div>
                            {menuItems.map((item) => (
                                <div
                                    key={item}
                                    className="px-3 py-2 rounded-lg hover:bg-[#F7F8FC] text-nowrap"
                                    onClick={() => handleMenuItemClick(item)}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>}
                    </>
                )}
            </div>
        </div>
    );
};

export default InputField;
