import React, { HTMLAttributes, JSX } from 'react';
import { FlagName, getFlag } from './svgs';
import './styles.css';

export interface FlagProps extends HTMLAttributes<HTMLImageElement> {
  country?: FlagName;
  role?: string;
  size?: number;
  alt?: string;
  className?: string;
}

const Flag = ({
  size = 24,
  alt,
  className,
  country = 'de',
}: FlagProps): JSX.Element => {
  var test = React.createElement('div', {
    role: 'img',
    alt: alt ?? 'Flag of ' + country,
    className: `icon-inline ${className}`,
    style: {
      width: !!size ? `${size}px` : '24px',
    },
    dangerouslySetInnerHTML: { __html: getFlag(country) },
  });

  return test;
};

export default Flag;
