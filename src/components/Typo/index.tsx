import { cva, type VariantProps } from 'class-variance-authority';
import type React from 'react';
import styles from './typo.module.scss';
const textVariants = cva(styles.text, {
  variants: {
    size: {
      12: styles.text__12,
      14: styles.text__14,
      16: styles.text__16,
      18: styles.text__18,
      22: styles.text__22,
      24: styles.text__24,
      30: styles.text__30,
      48: styles.text__48,
      60: styles.text__60,
      20: styles.text__20,
      36: styles.text__36,
      130: styles.text__130,
    },

    weight: {
      thin: styles.weight__thin,
      extralight: styles.weight__extralight,
      light: styles.weight__light,
      normal: styles.weight__regular,
      medium: styles.weight__medium,
      semibold: styles.weight__semibold,
      bold: styles.weight__bold,
      extrabold: styles.weight__extrabold,
    },
    transform: {
      uppercase: styles.transform__uppercase,
      lowercase: styles.transform__lowercase,
      capitalize: styles.transform__capitalize,
    },
    font: {
      poppins: styles.font__poppins,
    },

    color: {
      white: styles.color__white,
      softPrimary: styles.color__softPrimary,
      primary: styles.color__primary,
      hardPrimary: styles.color__hardPrimary,
      warning: styles.color__warning,
      danger: styles.color__danger,
      gray9: styles.color__gray9,
      gray8: styles.color__gray8,
      gray7: styles.color__gray7,
      gray6: styles.color__gray6,
      gray5: styles.color__gray5,
      gray4: styles.color__gray4,
      gray3: styles.color__gray3,
      gray2: styles.color__gray2,
      gray1: styles.color__gray1,
      gray0_5: styles.color__gray0_5,
      greenGray9: styles.color__greenGray9,
      greenGray8: styles.color__greenGray8,
      greenGray7: styles.color__greenGray7,
      greenGray6: styles.color__greenGray6,
      greenGray5: styles.color__greenGray5,
      greenGray4: styles.color__greenGray4,
      greenGray3: styles.color__greenGray3,
      greenGray2: styles.color__greenGray2,
      greenGray1: styles.color__greenGray1,
      greenGray0_5: styles.color__greenGray0_5,
    },
  },
  defaultVariants: {
    size: 16,
    weight: 'normal',
    color: 'greenGray9',
    font: 'poppins',
  },
});

type TypoTag = 'p' | 'span' | 'div' | 'label' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type TypoOwnProps = VariantProps<typeof textVariants> &
  Omit<React.HTMLAttributes<HTMLElement>, keyof VariantProps<typeof textVariants> | 'className'> & {
    Comp?: TypoTag;
    size?: number;
    weight?:
      | 'thin'
      | 'extralight'
      | 'light'
      | 'normal'
      | 'medium'
      | 'semibold'
      | 'bold'
      | 'extrabold';
    transform?: 'uppercase' | 'lowercase' | 'capitalize';
    font?: 'poppins';
    color?:
      | 'white'
      | 'softPrimary'
      | 'primary'
      | 'hardPrimary'
      | 'warning'
      | 'danger'
      | 'gray9'
      | 'gray8'
      | 'gray7'
      | 'gray6'
      | 'gray5'
      | 'gray4'
      | 'gray3'
      | 'gray2'
      | 'gray1'
      | 'gray0_5'
      | 'greenGray9'
      | 'greenGray8'
      | 'greenGray7'
      | 'greenGray6'
      | 'greenGray5'
      | 'greenGray4'
      | 'greenGray3'
      | 'greenGray2'
      | 'greenGray1'
      | 'greenGray0_5';
    className?: string;
    children: React.ReactNode;
  };

const Text = ({ ...props }: TypoOwnProps): React.JSX.Element => {
  const {
    Comp = 'p',
    className,
    children,
    size,
    weight,
    transform,
    font,
    color,
    ...restProps
  } = props;

  const classes: string = textVariants({
    size,
    weight,
    transform,
    font,
    color,
    className,
  });

  return (
    <Comp className={classes} {...restProps}>
      {children}
    </Comp>
  );
};

export default Text;
