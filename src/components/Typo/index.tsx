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
      body: styles.font__inter,
      heading: styles.font__raleway,
    },

    color: {
      default: styles.text__white,
      black: styles.text__black,
      white: styles.text__white,
      blue: styles.text__blue,
      vani: styles.text__vani,
      darkGrey: styles.text__darkGrey,
    },
  },
  defaultVariants: {
    size: 16,
    weight: 'normal',
    color: 'default',
    font: 'body',
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
    font?: 'body' | 'heading';
    color?: 'default' | 'black' | 'white' | 'blue' | 'vani' | 'darkGrey';
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
