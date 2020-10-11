import React from 'react';
import clsx from 'clsx';
import classes from './Logo.module.css';

type LogoProps = {
  animateToLogo?: boolean;
};

export default function Logo({ animateToLogo = false }: LogoProps) {
  return (
    <div className={clsx(animateToLogo && classes.PowerOn)}>
      <svg
        className={clsx(classes.Logo, !animateToLogo && classes.PowerOff)}
        viewBox='0 0 330 330'
      >
        <g transform='matrix(1,0,0,1,-235.382,-268.13)'>
          <g id='Logo' transform='matrix(0,-1,1,0,50.3816,783.13)'>
            <g
              id='Logo-G'
              transform='matrix(0.936892,0,0,0.936892,-12.9543,64.4271)'
            >
              <path
                className={classes.LogoG}
                d='M387.355,304.815L547.506,304.809C547.506,393.172 475.766,464.912 387.402,464.912C299.039,464.912 227.299,393.172 227.299,304.809C227.299,216.445 299.039,144.705 387.402,144.705C452.995,144.705 509.427,184.234 534.157,240.75'
              />
            </g>
            <g
              id='Logo-C'
              transform='matrix(0.468446,0,0,0.468446,168.555,207.214)'
            >
              <path
                className={classes.LogoC}
                d='M483.412,432.906C456.655,453.001 423.409,464.912 387.402,464.912C299.039,464.912 227.299,393.172 227.299,304.809C227.299,216.445 299.039,144.705 387.402,144.705C423.366,144.705 456.576,156.588 483.317,176.639'
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
