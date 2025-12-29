import SvgInsert from '@Components/SvgInsert';
import cn from 'classnames';
import type React from 'react';

import Text from '@/components/Typo';
import s from './styles.module.scss';

interface TPrimaryButton {
  color?: 'dark' | 'white';
  variant?: 'solid' | 'outline';
  weight?: 'light' | 'regular' | 'bold';
  transform?: 'uppercase' | 'lowercase' | 'capitalize';
  text?: string;
  className?: string;
  onClick?: () => void;
}

export default function PrimaryButton({ ...props }: TPrimaryButton): React.JSX.Element {
  const { text = '', className, color = 'dark', onClick } = props;

  const primaryButtonClassNames = cn(s.primaryButton, s[`primaryButton_${color}`], className);

  return (
    <button type="button" className={primaryButtonClassNames} onClick={onClick}>
      <div className={s.primaryButton_text}>
        <Text
          Comp={'label'}
          size={22}
          transform="uppercase"
          weight="semibold"
          className={s.primaryButton_text}
        >
          {text}
        </Text>
      </div>

      <div className={s.primaryButton_icon}>
        <SvgInsert
          src="/icons/arrow-btn.svg"
          width={19}
          height={19}
          className={s.primaryButton_icon_arrow}
        />
      </div>
    </button>
  );
}
