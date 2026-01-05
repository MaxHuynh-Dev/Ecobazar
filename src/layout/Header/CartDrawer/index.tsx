'use client';

import PrimaryButton from '@/components/Buttons/PrimaryButton';
import Separator from '@/components/Separator';
import Text from '@/components/Typo';
import { signal, useSignalEffect } from '@preact/signals-react';
import clsx from 'clsx';
import { X } from 'lucide-react';
import type React from 'react';
import { RefObject, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import CartItem from '../components/CartItem';
import styles from './cartDrawer.module.scss';

export const isOpenCartDrawer = signal<boolean>(false);
function CartDrawer(): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useSignalEffect((): void => {
    setIsOpen(isOpenCartDrawer.value);
  });

  useOnClickOutside(ref as RefObject<HTMLDivElement>, (): void => {
    isOpenCartDrawer.value = false;
  });

  return (
    <div className={clsx(styles.cartDrawer, isOpen && styles.active)}>
      <div className={styles.cartDrawer_overlay} />
      <div className={styles.cartDrawer_content} ref={ref}>
        <div className={styles.cartDrawer_content_header}>
          <Text size={20} weight="medium" color="gray9">
            Shopping Card (2)
          </Text>
          <div className={styles.cartDrawer_content_header_close}>
            <X
              width={'2.5rem'}
              height={'2.5rem'}
              onClick={(): void => {
                isOpenCartDrawer.value = false;
              }}
            />
          </div>
        </div>
        <div className={styles.cartDrawer_content_inner}>
          <div
            className={styles.cartDrawer_content_body}
            data-lenis-prevent="true"
            data-lenis-prevent-scroll="true"
          >
            <div className={styles.cartDrawer_content_body_items}>
              <CartItem />
              <Separator />
              <CartItem />
              <Separator />
              <CartItem />
              <Separator />
              <CartItem />
              <Separator />
              <CartItem />
              <Separator />
              <CartItem />
              <Separator />
              <CartItem />
              <Separator />
              <CartItem />
              <Separator />
              <CartItem />
              <Separator />
              <CartItem />
              <Separator />
              <CartItem />
              <Separator />
              <CartItem />
            </div>
          </div>
          <div className={styles.cartDrawer_content_footer}>
            <div className={styles.cartDrawer_content_footer_total}>
              <Text size={16} color="gray9">
                Total:
              </Text>
              <Text size={16} weight="medium" color="gray9">
                $100.00
              </Text>
            </div>

            <div className={styles.cartDrawer_content_footer_buttons}>
              <PrimaryButton text="Checkout" variant="fill" size="large" />
              <PrimaryButton text="Go To Cart" variant="ghost" size="large" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartDrawer;
