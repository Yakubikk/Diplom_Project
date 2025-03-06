import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as LabelRadix from '@radix-ui/react-label';
import * as React from 'react';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import Check from '@/assets/icons/check.svg';
import Indeterminate from '@/assets/icons/indeterminate.svg';
import { cn } from '@/lib/utils';

export type CheckboxProps = {
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  id?: string;
  label?: React.ReactNode;
  indeterminate?: boolean;
  size?: 'sm' | 'md';
  name: string;
} & Omit<
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
  'asChild'
>;

const Checkbox = React.forwardRef<
  HTMLButtonElement,
  CheckboxProps
>(
  (
    {
      name,
      className,
      disabled,
      id,
      label,
      indeterminate,
      size = 'md',
      ...props
    },
    ref
  ) => {
    const [checked, setChecked] = useState(false);
    const { getFieldState, setValue } = useFormContext();

    const { error } = getFieldState(name);

    const onChangeHandler = () => {
      setChecked((prevState) => !prevState);
      setValue(name, !checked);
    };

    return (
      <LabelRadix.Root
        className={cn(
          'inline-flex select-none items-center gap-[11px] outline-none',
          disabled && 'text-black/45 pointer-events-none',
          size === 'sm' && 'text-body2 leading-body3'
        )}
      >
        <CheckboxPrimitive.Root
          className={cn(
            'mt-[3px] self-start',
            'rounded-xs box-content size-6 shrink-0 border border-gray-300 outline-none transition',
            'focus-visible:border-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
            'data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-transparent',
            'hover:border-blue-500 hover:data-[state=checked]:bg-blue-600',
            'flex items-center justify-center self-center rounded-[8px] disabled:data-[state=checked]:border-gray-300 disabled:data-[state=checked]:bg-gray-600/40',
            size === 'sm' && 'h-3 w-3',
            error && 'border-red-500',
            className
          )}
          checked={checked}
          disabled={disabled}
          onCheckedChange={onChangeHandler}
          id={id}
          name={name}
          ref={ref}
          {...props}
        >
          <CheckboxPrimitive.Indicator
            className={cn(
              '[&>svg]:stroke-white',
              disabled && '[&>svg]:stroke-gray-300',
              size === 'sm' && '[&>svg]:h-3 [&>svg]:w-3'
            )}
          >
            {indeterminate ? (
              <Indeterminate data-testid='indeterminate' />
            ) : (
              <Check data-testid='checked' />
            )}
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        {label}
      </LabelRadix.Root>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export { Checkbox };
export default Checkbox;
