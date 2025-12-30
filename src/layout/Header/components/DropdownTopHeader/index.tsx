'use client';

import type React from 'react';

import Text from '@/components/Typo';
import classnames from 'classnames';
import { Check, ChevronDown } from 'lucide-react';
import { Select } from 'radix-ui';
import styles from './styles.module.scss';

const SelectItem = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  value: string;
  disabled?: boolean;
}) => {
  return (
    <Select.Item className={classnames(styles.Item, className)} {...props}>
      <Select.ItemIndicator className={styles.ItemIndicator}>
        <Check color="var(--color-gray-6)" size={16} />
      </Select.ItemIndicator>
      <Select.ItemText>
        <Text size={12} color="gray6">
          {children}
        </Text>
      </Select.ItemText>
    </Select.Item>
  );
};

interface DropdownTopHeaderProps {
  defaultValue: string;
  options: { label: string; value: string }[];
  handleValueChange?: (value: string) => void;
}

const DropdownTopHeader = ({
  defaultValue,
  options,
  handleValueChange,
}: DropdownTopHeaderProps): React.ReactElement => (
  <Select.Root defaultValue={defaultValue} onValueChange={handleValueChange}>
    <Select.Trigger className={styles.Trigger} aria-label="Language">
      <Select.Value placeholder="Select a language…" />
      <Select.Icon className={styles.Icon}>
        <ChevronDown color="var(--color-gray-6)" size={16} />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className={styles.Content}>
        <Select.Viewport className={styles.Viewport}>
          <Select.Group>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </Select.Group>
        </Select.Viewport>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

export default DropdownTopHeader;
