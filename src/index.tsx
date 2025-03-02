import React, { HTMLAttributes, JSX } from 'react';
import countryCodes from './countryCodes';

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
  country = 'US',
  role = 'img',
  size = 24,
  alt,
  variant,
  className,
  ...props
}: FlagProps): JSX.Element | null => {
  if (!country) return null;

  const styleContainer = {
    rounded: {},
    square: {},
    circle: {
      clipPath: 'ellipse(35% 45% at 50% 48%)',
      maxWidth: 100,
      height: 'auto',
      position: 'relative',
      overflow: 'hidden',
    },
  };

  const style = {
    rounded: {
      display: 'inline-block',
      clipPath: 'polygon(10% 10%, 90% 10%, 90% 90%, 10% 90%)',
      borderRadius: '50%',
    },
    square: {
      display: 'inline-block',
      clipPath: 'polygon(10% 10%, 90% 10%, 90% 90%, 10% 90%)',
    },
    circle: {
      display: 'inline-block',
      height: 'auto',
      margin: 0,
      borderRadius: '50%',
    },
  };

  if (countryCodes.find(el => el === country) !== undefined) {
    const jsDelivr =
      'https://www.svgrepo.com/show/237267';
    const flagSrc = `${jsDelivr}/${country}.svg`;
    return (
      <span
        className={className}
        style={variant && (styleContainer[variant] as any)}
      >
        <img
          src={flagSrc}
          role={role}
          alt={alt || `${country} Flag`}
          height={size}
          width={size}
          style={variant && style[variant]}
          {...props}
        />
      </span>
    );
  }
  return <span>{country.toString()}</span>;
};

export default Flag;
