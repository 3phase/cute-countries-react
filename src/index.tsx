import React, { HTMLAttributes, JSX } from 'react';
import countryCodes from './countryCodes';
import deSvg from './public/de.svg';

export { countryCodes };

export type CountryCode = typeof countryCodes[number];

export type Variants = undefined | 'rounded' | 'square' | 'circle';

export interface FlagProps extends HTMLAttributes<HTMLImageElement> {
  country?: CountryCode | Omit<string, CountryCode>;
  role?: string;
  size?: number;
  alt?: string;
  variant?: Variants;
  className?: string;
}

const Flag = ({
  size = 24,
  alt,
  className,
  // variant,
  country = 'de',
}: FlagProps): JSX.Element => {
  // const styleContainer = {
  //   rounded: {},
  //   square: {},
  //   circle: {
  //     clipPath: 'ellipse(35% 45% at 50% 48%)',
  //     maxWidth: 100,
  //     height: 'auto',
  //     position: 'relative',
  //     overflow: 'hidden',
  //   },
  // };

  if (!countryCodes.some(el => el === country)) {
    throw new Error(`Country code "${country}" is not recognized.`);
  }

  var test = React.createElement('div', {
    role: 'img',
    alt: alt ?? 'Flag of ' + country,
    className: className ?? '',
    style: {
      width: !!size ? `${size}px` : '24px',
      // (variant && {...styleContainer[variant!] as any}),
    },
    dangerouslySetInnerHTML: { __html: deSvg },
  });

  return test;
};

export default Flag;
