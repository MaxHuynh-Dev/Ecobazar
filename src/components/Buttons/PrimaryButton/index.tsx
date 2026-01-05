import type React from 'react';

import Text from '@/components/Typo';
import { cva, VariantProps } from 'class-variance-authority';
import s from './styles.module.scss';

// interface TPrimaryButton {
//   color?: 'dark' | 'white';
//   variant?: 'solid' | 'outline';
//   weight?: 'light' | 'regular' | 'bold';
//   transform?: 'uppercase' | 'lowercase' | 'capitalize';
//   text?: string;
//   className?: string;
//   onClick?: () => void;
// }

const buttonVariants = cva(s.primaryButton, {
  variants: {
    size: {
      small: s.primaryButton_small,
      medium: s.primaryButton_medium,
      large: s.primaryButton_large,
    },

    variant: {
      fill: s.primaryButton_fill,
      border: s.primaryButton_border,
      ghost: s.primaryButton_ghost,
    },
  },
  defaultVariants: {
    size: 'medium',
    variant: 'fill',
  },
});

type TPrimaryButtonProps = VariantProps<typeof buttonVariants> & {
  text: string;
  className?: string;
  onClick?: () => void;
};

export default function PrimaryButton({ ...props }: TPrimaryButtonProps): React.JSX.Element {
  const { text = '', className, variant = 'fill', size = 'medium', onClick } = props;

  const primaryButtonClassNames = buttonVariants({ size, variant, className });

  return (
    <button type="button" className={primaryButtonClassNames} onClick={onClick}>
      <Text
        Comp={'label'}
        // size={22}
        transform="capitalize"
        weight="semibold"
        // className={s.primaryButton_text}
      >
        {text}
      </Text>
      {/* <div className={s.primaryButton_icon}>
        <SvgInsert
          src="/icons/arrow-btn.svg"
          width={19}
          height={19}
          className={s.primaryButton_icon_arrow}
        />
      </div> */}
    </button>
  );
}
