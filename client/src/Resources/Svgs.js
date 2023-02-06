import * as React from 'react';

export const Logo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={52} height={58} fill="none">
    <g filter="url(#a)">
      <path
        d="M24.297 7.45V1.893L25.887 1l1.589.892v5.616l3.454-2.022V4.229c0-.142.16-.227.28-.15l2.85 1.828v1.338l-.682.407-7.507 4.582-6.996-4.582-.707-.407V5.907l2.173-1.766c.118-.096.297-.013.297.138v.775l3.66 2.397Z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m12.891 8.295 13.002 7.62 13.223-7.616L47 13.556v23.221l-3.178 1.829V15.21l-4.83-3.22-13.112 7.553L13 11.995 8.179 15.21v23.396L5 36.777V13.556l7.891-5.261Z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.892 27.543v18.513l-3.178-1.785V25.758l3.178 1.785Zm12.94-1.785v18.513l-3.178 1.919V27.543l3.178-1.785Zm-6.356 4.238v18.067l-1.59.937-1.589-.937V29.996h3.179Z"
        fill="#fff"
      />
      <path
        d="m11.584 17.185 1.633-1.003 12.92 7.103 12.678-6.992 1.828 1.122v23.218l-3.178 1.854V20.619l-11.376 6.274-11.327-6.638v22.232l-3.178-1.854V17.185ZM40.643 15.285v.026l-.022-.014.022-.012Z"
        fill="#fff"
      />
      <path
        d="M24.297 7.45V1.893L25.887 1l1.589.892v5.616l3.454-2.022V4.229c0-.142.16-.227.28-.15l2.85 1.828v1.338l-.682.407-7.507 4.582-6.996-4.582-.707-.407V5.907l2.173-1.766c.118-.096.297-.013.297.138v.775l3.66 2.397Z"
        stroke="#000"
      />
      <path
        clipRule="evenodd"
        d="m12.891 8.295 13.002 7.62 13.223-7.616L47 13.556v23.221l-3.178 1.829V15.21l-4.83-3.22-13.112 7.553L13 11.995 8.179 15.21v23.396L5 36.777V13.556l7.891-5.261Z"
        stroke="#000"
      />
      <path
        clipRule="evenodd"
        d="M20.892 27.543v18.513l-3.178-1.785V25.758l3.178 1.785Zm12.94-1.785v18.513l-3.178 1.919V27.543l3.178-1.785Zm-6.356 4.238v18.067l-1.59.937-1.589-.937V29.996h3.179Z"
        stroke="#000"
      />
      <path
        d="m11.584 17.185 1.633-1.003 12.92 7.103 12.678-6.992 1.828 1.122v23.218l-3.178 1.854V20.619l-11.376 6.274-11.327-6.638v22.232l-3.178-1.854V17.185ZM40.643 15.285v.026l-.022-.014.022-.012Z"
        stroke="#000"
      />
    </g>
    <defs>
      <filter
        id="a"
        x={0.5}
        y={0.427}
        width={51}
        height={57.154}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_6_37" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_6_37" result="shape" />
      </filter>
    </defs>
  </svg>
);

export const GetArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    fill="none"
    viewBox="-7 -1 30 25"
    {...props}
  >
    <g clipPath="url(#a)" filter="url(#b)">
      <path
        d="M17.877 2.215h.483l-.341.341L4.283 16.292l1.425 1.425L19.444 3.981l.341-.341V16.705H21.8V.2H5.295v2.015h12.582Z"
        fill="#fff"
        stroke="#040405"
        strokeWidth={0.4}
        strokeMiterlimit={10}
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="matrix(1 0 0 -1 4 18)" d="M0 0h18v18H0z" />
      </clipPath>
      <filter
        id="b"
        x={0}
        y={0}
        width={26}
        height={26}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_15_163" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_15_163" result="shape" />
      </filter>
    </defs>
  </svg>
);

export const Brackets = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={488}
    height={603}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h488v603H0z" />
    <defs>
      <pattern id="a" patternContentUnits="objectBoundingBox" width={1} height={1}>
        <use xlinkHref="#b" transform="matrix(.0016 0 0 .0013 0 0)" />
      </pattern>
      <image id="b" width={622} height={769} />
    </defs>
  </svg>
);
