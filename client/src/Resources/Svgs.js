import * as React from "react";

export const Logo = ({ customStyle }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={52} height={58} style={customStyle} fill="none">
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

export const UpArrow = ({ customStyle, viewBoxSetting }) => (
  <svg style={customStyle.general} viewBox={viewBoxSetting}>
    <g clipPath="url(#a)" filter="url(#b)">
      <path
        d="M17.877 2.215h.483l-.341.341L4.283 16.292l1.425 1.425L19.444 3.981l.341-.341V16.705H21.8V.2H5.295v2.015h12.582Z"
        fill={customStyle.color}
        stroke="#00000"
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

export const RightArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    viewBox="-10 -3 30 25"
    style={{ display: "inline" }}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.707.293a1 1 0 0 0-1.414 1.414L12.586 7H1a1 1 0 0 0 0 2h11.586l-5.293 5.293a1 1 0 1 0 1.414 1.414l7-7 .007-.006A.997.997 0 0 0 16 8.003v-.006a.996.996 0 0 0-.286-.698l-.008-.007m0 0-6.999-7 7 7Z"
      fill="#fff"
    />
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

export const ArrowDown = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    viewBox="-6 9 42 18"
    style={{ display: "inline" }}
  >
    <path
      fill={color}
      stroke="#040405"
      strokeMiterlimit={10}
      strokeWidth={0.4}
      d="M28.671 27.907h.483l-.342-.342-24.53-24.53L7.037.284l24.53 24.53.34.34V2.148H35.8V31.8H6.147v-3.893h22.524Z"
    />
  </svg>
);

export const HtmlCube = ({ customStyle }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    viewBox="-10 31 121 55"
    fill="none"
    style={customStyle}
  >
    <g filter="url(#a)">
      <path
        fill=""
        d="M108 84.364V35.635c0-4.144-2.17-7.955-5.843-9.945L59.926 1.49c-3.506-1.988-8.012-1.988-11.518 0L5.843 25.69C2.337 27.678 0 31.49 0 35.635V84.2c0 4.143 2.17 7.955 5.843 9.945l42.398 24.365c3.506 1.988 8.012 1.988 11.518 0l42.398-24.365a11.145 11.145 0 0 0 5.843-9.78Z"
      />
    </g>
    <path
      stroke="#141416"
      d="M101.909 26.124h-.001l.011.005c3.505 1.9 5.581 5.538 5.581 9.506v48.73c0 3.798-2.072 7.44-5.581 9.34l-.011.005-42.396 24.364c-3.353 1.901-7.67 1.901-11.023 0h-.001L6.092 93.71l-.01-.006C2.575 91.805.5 88.166.5 84.2V35.635c0-3.957 2.234-7.607 5.59-9.51L48.655 1.925c3.352-1.901 7.67-1.901 11.023 0h.001l42.23 24.198Z"
    />
    <path fill="#E65100" d="M73.667 38H34l3.5 39.667 16.333 4.666 16.334-4.666L73.667 38Z" />
    <path fill="#FF6D00" d="M53.833 41.5v37.217L66.9 74.983 69.817 41.5H53.833Z" />
    <path
      fill="#fff"
      d="M53.833 61.333v-4.667h10.034l-.817 13.417-9.217 3.033v-4.9l4.784-1.633.35-5.25h-5.134ZM64.217 52l.35-4.667H53.833V52h10.384Z"
    />
    <path
      fill="#EEE"
      d="M53.833 68.216v4.9l-9.216-3.033-.467-6.417h4.667l.233 2.917 4.783 1.633ZM48.117 52h5.716v-4.667H43.217l.816 14h9.8v-4.667h-5.366L48.117 52Z"
    />
    <defs>
      <filter
        id="a"
        width={112}
        height={132}
        x={0}
        y={-12}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={4}
          result="effect1_innerShadow_10_20"
        />
        <feOffset dx={4} dy={-12} />
        <feGaussianBlur stdDeviation={10} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend in2="shape" mode="soft-light" result="effect1_innerShadow_10_20" />
      </filter>
    </defs>
  </svg>
);

export const CssCube = ({ customStyle }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    viewBox="-10 31 121 55"
    fill="none"
    style={customStyle}
  >
    <g filter="url(#a)">
      <path
        fill=""
        d="M108 84.364V35.635c0-4.144-2.17-7.955-5.843-9.945L59.926 1.49c-3.506-1.988-8.012-1.988-11.518 0L5.843 25.69C2.337 27.678 0 31.49 0 35.635V84.2c0 4.143 2.17 7.955 5.843 9.945l42.398 24.365c3.506 1.988 8.012 1.988 11.518 0l42.398-24.365a11.145 11.145 0 0 0 5.843-9.78Z"
      />
    </g>
    <path
      stroke="#141416"
      d="M101.909 26.124h-.001l.011.005c3.505 1.9 5.581 5.538 5.581 9.506v48.73c0 3.798-2.072 7.44-5.581 9.34l-.011.005-42.396 24.364c-3.353 1.901-7.67 1.901-11.023 0h-.001L6.092 93.71l-.01-.006C2.575 91.805.5 88.166.5 84.2V35.635c0-3.957 2.234-7.607 5.59-9.51L48.655 1.925c3.352-1.901 7.67-1.901 11.023 0h.001l42.23 24.198Z"
    />
    <path fill="#0277BD" d="M73.667 38H34l3.5 39.667 16.333 4.666 16.334-4.666L73.667 38Z" />
    <path fill="#039BE5" d="M53.833 41.5v37.217L66.9 74.983 69.817 41.5H53.833Z" />
    <path
      fill="#fff"
      d="M64.45 47.333H53.833V52h5.717l-.35 4.666h-5.367v4.667h5.134l-.35 5.25-4.784 1.633v4.9l9.217-3.033.817-13.417.583-9.333Z"
    />
    <path
      fill="#EEE"
      d="M53.833 47.333V52H43.45l-.35-4.667h10.733Zm-5.366 9.333.233 4.667h5.133v-4.667h-5.366Zm.466 7h-4.666l.35 6.417 9.216 3.033v-4.9l-4.783-1.633-.117-2.917Z"
    />
    <defs>
      <filter
        id="a"
        width={112}
        height={132}
        x={0}
        y={-12}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={4}
          result="effect1_innerShadow_10_40"
        />
        <feOffset dx={4} dy={-12} />
        <feGaussianBlur stdDeviation={10} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend in2="shape" mode="soft-light" result="effect1_innerShadow_10_40" />
      </filter>
    </defs>
  </svg>
);

export const BootstrapCube = ({ customStyle }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    viewBox="-10 31 121 55"
    fill="none"
    style={customStyle}
  >
    <g filter="url(#a)">
      <path
        fill=""
        d="M108 84.364V35.635c0-4.144-2.17-7.955-5.843-9.945L59.926 1.49c-3.506-1.988-8.012-1.988-11.518 0L5.843 25.69C2.337 27.678 0 31.49 0 35.635V84.2c0 4.143 2.17 7.955 5.843 9.945l42.398 24.365c3.506 1.988 8.012 1.988 11.518 0l42.398-24.365a11.145 11.145 0 0 0 5.843-9.78Z"
      />
    </g>
    <path
      stroke="#141416"
      d="M101.909 26.124h-.001l.011.005c3.505 1.9 5.581 5.538 5.581 9.506v48.73c0 3.798-2.072 7.44-5.581 9.34l-.011.005-42.396 24.364c-3.353 1.901-7.67 1.901-11.023 0h-.001L6.092 93.71l-.01-.006C2.575 91.805.5 88.166.5 84.2V35.635c0-3.957 2.234-7.607 5.59-9.51L48.655 1.925c3.352-1.901 7.67-1.901 11.023 0h.001l42.23 24.198Z"
    />
    <g clipPath="url(#b)">
      <path
        fill="url(#c)"
        d="M32.178 43.75C32.072 40.76 34.436 38 37.63 38h32.742c3.195 0 5.56 2.759 5.453 5.75-.101 2.874.03 6.596.98 9.632.954 3.044 2.562 4.969 5.194 5.216v2.804c-2.632.247-4.24 2.172-5.193 5.216-.95 3.036-1.082 6.758-.98 9.632.105 2.991-2.259 5.75-5.454 5.75H37.63c-3.195 0-5.559-2.759-5.453-5.75.101-2.874-.03-6.596-.98-9.632-.954-3.044-2.565-4.969-5.198-5.216v-2.804c2.633-.247 4.244-2.172 5.197-5.216.95-3.036 1.082-6.758.98-9.632Z"
      />
      <g filter="url(#d)">
        <path
          fill="url(#e)"
          d="M54.757 71.734c5.173 0 8.29-2.532 8.29-6.71 0-3.158-2.224-5.445-5.527-5.806v-.132c2.426-.395 4.33-2.648 4.33-5.165 0-3.585-2.83-5.921-7.144-5.921H45v23.734h9.757ZM48.775 51.01h5.021c2.73 0 4.28 1.217 4.28 3.421 0 2.352-1.803 3.668-5.072 3.668h-4.23V51.01Zm0 17.715v-7.813h4.987c3.572 0 5.426 1.316 5.426 3.881 0 2.566-1.803 3.931-5.207 3.931h-5.206Z"
        />
        <path
          stroke="#fff"
          strokeWidth={0.4}
          d="M54.757 71.734c5.173 0 8.29-2.532 8.29-6.71 0-3.158-2.224-5.445-5.527-5.806v-.132c2.426-.395 4.33-2.648 4.33-5.165 0-3.585-2.83-5.921-7.144-5.921H45v23.734h9.757ZM48.775 51.01h5.021c2.73 0 4.28 1.217 4.28 3.421 0 2.352-1.803 3.668-5.072 3.668h-4.23V51.01Zm0 17.715v-7.813h4.987c3.572 0 5.426 1.316 5.426 3.881 0 2.566-1.803 3.931-5.207 3.931h-5.206Z"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="c"
        x1={34.321}
        x2={82.72}
        y1={39.164}
        y2={78.129}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#9013FE" />
        <stop offset={1} stopColor="#6610F2" />
      </linearGradient>
      <linearGradient
        id="e"
        x1={46.707}
        x2={57.645}
        y1={49.562}
        y2={68.061}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#F1E5FC" />
      </linearGradient>
      <filter
        id="a"
        width={112}
        height={132}
        x={0}
        y={-12}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={4}
          result="effect1_innerShadow_10_163"
        />
        <feOffset dx={4} dy={-12} />
        <feGaussianBlur stdDeviation={10} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend in2="shape" mode="soft-light" result="effect1_innerShadow_10_163" />
      </filter>
      <filter
        id="d"
        width={50.447}
        height={56.135}
        x={28.8}
        y={35.8}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={8} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_10_163" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_10_163" result="shape" />
      </filter>
      <clipPath id="b">
        <path fill="#fff" d="M26 38h56v44H26z" />
      </clipPath>
    </defs>
  </svg>
);

export const NodeCube = ({ customStyle }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    viewBox="-10 31 121 55"
    fill="none"
    style={customStyle}
  >
    <g filter="url(#a)">
      <path
        fill=""
        d="M108 84.364V35.635c0-4.144-2.17-7.955-5.843-9.945L59.926 1.49c-3.506-1.988-8.012-1.988-11.518 0L5.843 25.69C2.337 27.678 0 31.49 0 35.635V84.2c0 4.143 2.17 7.955 5.843 9.945l42.398 24.365c3.506 1.988 8.012 1.988 11.518 0l42.398-24.365a11.145 11.145 0 0 0 5.843-9.78Z"
      />
    </g>
    <path
      stroke="#141416"
      d="M101.909 26.124h-.001l.011.005c3.505 1.9 5.581 5.538 5.581 9.506v48.73c0 3.798-2.072 7.44-5.581 9.34l-.011.005-42.396 24.364c-3.353 1.901-7.67 1.901-11.023 0h-.001L6.092 93.71l-.01-.006C2.575 91.805.5 88.166.5 84.2V35.635c0-3.957 2.234-7.607 5.59-9.51L48.655 1.925c3.352-1.901 7.67-1.901 11.023 0h.001l42.23 24.198Z"
    />
    <g clipPath="url(#b)">
      <path
        fill="#388E3C"
        d="m45.806 52.683-7.36 4.072a.845.845 0 0 0-.446.738v8.15c0 .304.17.585.446.738l7.361 4.075a.927.927 0 0 0 .89 0l7.36-4.075a.85.85 0 0 0 .443-.738v-8.15a.846.846 0 0 0-.446-.738l-7.358-4.072a.92.92 0 0 0-.892 0h.002Zm37.87 7.336-1.227.678a.14.14 0 0 0-.073.123v1.36c0 .05.028.097.073.122l1.228.68a.154.154 0 0 0 .148 0l1.227-.68a.142.142 0 0 0 .073-.123V60.82a.14.14 0 0 0-.075-.123l-1.227-.678a.142.142 0 0 0-.073-.02.142.142 0 0 0-.073.02Z"
      />
      <path
        fill="#fff"
        d="m73.626 44.046-3.583-2a.365.365 0 0 0-.542.318L69.5 54.444l-3.305-1.829a.92.92 0 0 0-.89 0h.001l-7.36 4.073a.844.844 0 0 0-.446.736v8.15c0 .304.17.585.446.738l7.362 4.075a.927.927 0 0 0 .889 0l7.36-4.075a.848.848 0 0 0 .443-.738v-20.89a.731.731 0 0 0-.374-.637ZM69.3 63.687l-3.345 1.853a.42.42 0 0 1-.403 0l-3.347-1.853a.383.383 0 0 1-.204-.336v-3.705c0-.138.077-.265.203-.336l3.346-1.85h-.002a.436.436 0 0 1 .405 0l3.346 1.85c.126.07.202.2.202.338v3.705a.385.385 0 0 1-.201.334Z"
      />
      <path
        fill="#2E7D32"
        d="M45.806 52.683 38 65.643c0 .304.17.585.446.738l7.361 4.075a.927.927 0 0 0 .89 0L54.5 57.493a.846.846 0 0 0-.446-.738l-7.358-4.072a.92.92 0 0 0-.892 0"
      />
      <path
        fill="#4CAF50"
        d="m45.806 52.683-7.36 4.072a.845.845 0 0 0-.446.738l7.806 12.963a.927.927 0 0 0 .89 0l7.36-4.075a.848.848 0 0 0 .444-.738l-7.804-12.96a.92.92 0 0 0-.892 0"
      />
      <path
        fill="#fff"
        d="m91.555 56.687-7.36-4.073a.92.92 0 0 0-.89 0h.001l-7.36 4.073a.86.86 0 0 0-.446.754v8.117c0 .313.171.602.445.754l7.363 4.076a.92.92 0 0 0 .889 0l3.394-1.88a.45.45 0 0 0-.002-.789l-7.386-4.03a.395.395 0 0 1-.203-.343v-3.698c0-.139.075-.266.195-.332l3.353-1.854h-.002a.436.436 0 0 1 .405 0l3.353 1.855c.12.066.195.194.195.332v3.018a.362.362 0 0 0 .544.312l3.597-2.09a.724.724 0 0 0 .36-.625v-2.82a.864.864 0 0 0-.445-.758Zm-55.5 0-7.36-4.073a.92.92 0 0 0-.89 0h.001l-7.36 4.073a.86.86 0 0 0-.446.754v11.197a.362.362 0 0 0 .544.313l3.598-2.09a.723.723 0 0 0 .358-.626v-6.589c0-.138.075-.266.195-.331l3.352-1.854a.436.436 0 0 1 .405 0l3.353 1.855c.12.066.195.194.195.331v6.59c0 .258.136.497.36.626l3.597 2.089c.112.064.25.064.363.002a.368.368 0 0 0 .18-.316V57.442a.863.863 0 0 0-.446-.755Z"
      />
    </g>
    <defs>
      <clipPath id="b">
        <path fill="#fff" d="M20 42h72v29H20z" />
      </clipPath>
      <filter
        id="a"
        width={112}
        height={132}
        x={0}
        y={-12}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={4}
          result="effect1_innerShadow_10_178"
        />
        <feOffset dx={4} dy={-12} />
        <feGaussianBlur stdDeviation={10} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend in2="shape" mode="soft-light" result="effect1_innerShadow_10_178" />
      </filter>
    </defs>
  </svg>
);

export const ReactCube = ({ customStyle }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    viewBox="-10 31 121 55"
    fill="none"
    style={customStyle}
  >
    <g filter="url(#a)">
      <path
        fill=""
        d="M108 84.364V35.635c0-4.144-2.17-7.955-5.843-9.945L59.926 1.49c-3.506-1.988-8.012-1.988-11.518 0L5.843 25.69C2.337 27.678 0 31.49 0 35.635V84.2c0 4.143 2.17 7.955 5.843 9.945l42.398 24.365c3.506 1.988 8.012 1.988 11.518 0l42.398-24.365a11.145 11.145 0 0 0 5.843-9.78Z"
      />
    </g>
    <path
      stroke="#141416"
      d="M101.909 26.124h-.001l.011.005c3.505 1.9 5.581 5.538 5.581 9.506v48.73c0 3.798-2.072 7.44-5.581 9.34l-.011.005-42.396 24.364c-3.353 1.901-7.67 1.901-11.023 0h-.001L6.092 93.71l-.01-.006C2.575 91.805.5 88.166.5 84.2V35.635c0-3.957 2.234-7.607 5.59-9.51L48.655 1.925c3.352-1.901 7.67-1.901 11.023 0h.001l42.23 24.198Z"
    />
    <path fill="url(#b)" d="M54 66a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
    <path
      fill="url(#c)"
      d="M80 60c0-3.758-4.243-7.017-10.853-8.992.221-1.03.407-2.045.524-3.015.657-5.483-.483-9.323-3.211-10.813-2.729-1.489-6.574-.372-10.831 3.146-.544.45-1.087.938-1.629 1.45a32.269 32.269 0 0 0-1.629-1.45c-4.257-3.518-8.104-4.634-10.831-3.146-2.728 1.49-3.868 5.33-3.211 10.813.116.971.303 1.984.524 3.015C32.243 52.983 28 56.242 28 60c0 3.758 4.243 7.017 10.853 8.992a33.928 33.928 0 0 0-.524 3.015c-.657 5.483.483 9.323 3.211 10.813.789.431 1.67.643 2.628.643 2.357 0 5.177-1.287 8.203-3.788A32.767 32.767 0 0 0 54 78.225a32.269 32.269 0 0 0 1.629 1.45c3.026 2.501 5.846 3.788 8.203 3.788.958 0 1.84-.213 2.628-.643 2.728-1.489 3.868-5.329 3.211-10.813a33.508 33.508 0 0 0-.524-3.015C75.757 67.017 80 63.758 80 60ZM56.902 41.866c3.53-2.917 6.665-3.987 8.599-2.93 1.934 1.054 2.729 4.27 2.184 8.817a31.738 31.738 0 0 1-.469 2.73 50.62 50.62 0 0 0-6.892-1.167c-1.564-2.275-3.215-4.35-4.908-6.132.494-.466.99-.908 1.486-1.318Zm4.997 22.447a60.681 60.681 0 0 1-2.702 4.474A62.432 62.432 0 0 1 54 69c-1.811 0-3.546-.075-5.198-.213A61.241 61.241 0 0 1 43.958 60a60.681 60.681 0 0 1 4.844-8.787A62.475 62.475 0 0 1 54 51c1.811 0 3.546.075 5.198.213A61.241 61.241 0 0 1 64.042 60a61.68 61.68 0 0 1-2.143 4.313Zm3.179-1.826a47.338 47.338 0 0 1 1.676 5.096c-1.544.376-3.21.694-5.009.93a62.59 62.59 0 0 0 1.909-3.242 60.98 60.98 0 0 0 1.424-2.784ZM54 75.403c-1.272-1.34-2.522-2.863-3.729-4.513a63.941 63.941 0 0 0 7.458 0c-1.207 1.65-2.457 3.172-3.729 4.513Zm-7.746-6.89a46.711 46.711 0 0 1-5.009-.93 47.266 47.266 0 0 1 1.676-5.096c.45.93.918 1.86 1.423 2.785a63.726 63.726 0 0 0 1.91 3.24Zm-3.332-11a47.411 47.411 0 0 1-1.676-5.096 46.711 46.711 0 0 1 5.009-.929 62.59 62.59 0 0 0-1.909 3.241 60.98 60.98 0 0 0-1.424 2.784ZM54 44.597c1.272 1.341 2.522 2.863 3.729 4.513a63.941 63.941 0 0 0-7.458 0c1.207-1.65 2.457-3.172 3.729-4.513Zm9.655 10.132a63.445 63.445 0 0 0-1.909-3.24c1.799.234 3.465.552 5.009.928a47.266 47.266 0 0 1-1.676 5.096 63.08 63.08 0 0 0-1.424-2.784Zm-23.34-6.975c-.546-4.549.25-7.764 2.184-8.818.488-.267 1.053-.397 1.681-.397 1.86 0 4.278 1.147 6.918 3.328.496.41.993.852 1.488 1.32-1.693 1.78-3.345 3.855-4.908 6.131a50.723 50.723 0 0 0-6.892 1.166 31.467 31.467 0 0 1-.471-2.73ZM30 60c0-2.6 3.47-5.303 9.317-7.06.606 2.28 1.437 4.654 2.471 7.06-1.034 2.407-1.865 4.782-2.471 7.06C33.47 65.303 30 62.6 30 60Zm21.098 18.134c-3.53 2.917-6.662 3.99-8.599 2.931-1.934-1.055-2.729-4.27-2.184-8.818.105-.879.273-1.796.469-2.729a50.62 50.62 0 0 0 6.892 1.166c1.564 2.275 3.215 4.351 4.908 6.132-.494.466-.99.908-1.486 1.318Zm16.587-5.888c.546 4.55-.25 7.764-2.184 8.818-1.934 1.06-5.068-.014-8.599-2.93-.496-.41-.993-.853-1.488-1.32 1.693-1.78 3.345-3.856 4.908-6.132a50.723 50.723 0 0 0 6.892-1.166c.198.934.365 1.851.471 2.73Zm.998-5.186c-.606-2.279-1.437-4.654-2.471-7.06 1.034-2.407 1.865-4.782 2.471-7.06C74.53 54.697 78 57.4 78 60c0 2.6-3.47 5.303-9.317 7.06Z"
    />
    <defs>
      <linearGradient id="b" x1={54} x2={54} y1={49} y2={71.5} gradientUnits="userSpaceOnUse">
        <stop stopColor="#6DC7FF" />
        <stop offset={1} stopColor="#E6ABFF" />
      </linearGradient>
      <linearGradient id="c" x1={54} x2={54} y1={23} y2={100} gradientUnits="userSpaceOnUse">
        <stop stopColor="#1A6DFF" />
        <stop offset={1} stopColor="#C822FF" />
      </linearGradient>
      <filter
        id="a"
        width={112}
        height={132}
        x={0}
        y={-12}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={4}
          result="effect1_innerShadow_10_190"
        />
        <feOffset dx={4} dy={-12} />
        <feGaussianBlur stdDeviation={10} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend in2="shape" mode="soft-light" result="effect1_innerShadow_10_190" />
      </filter>
    </defs>
  </svg>
);

export const ReduxCube = ({ customStyle }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    viewBox="-10 31 121 55"
    fill="none"
    style={customStyle}
  >
    <g filter="url(#a)">
      <path
        fill=""
        d="M108 84.364V35.635c0-4.144-2.17-7.955-5.843-9.945L59.926 1.49c-3.506-1.988-8.012-1.988-11.518 0L5.843 25.69C2.337 27.678 0 31.49 0 35.635V84.2c0 4.143 2.17 7.955 5.843 9.945l42.398 24.365c3.506 1.988 8.012 1.988 11.518 0l42.398-24.365a11.145 11.145 0 0 0 5.843-9.78Z"
      />
    </g>
    <path
      stroke="#141416"
      d="M101.909 26.124h-.001l.011.005c3.505 1.9 5.581 5.538 5.581 9.506v48.73c0 3.798-2.072 7.44-5.581 9.34l-.011.005-42.396 24.364c-3.353 1.901-7.67 1.901-11.023 0h-.001L6.092 93.71l-.01-.006C2.575 91.805.5 88.166.5 84.2V35.635c0-3.957 2.234-7.607 5.59-9.51L48.655 1.925c3.352-1.901 7.67-1.901 11.023 0h.001l42.23 24.198Z"
    />
    <path
      fill="#764ABC"
      d="M63.645 69.523c1.845-.193 3.245-1.802 3.181-3.732-.064-1.93-1.654-3.475-3.563-3.475h-.127c-1.973.065-3.5 1.738-3.436 3.732.063.965.445 1.802 1.018 2.381-2.164 4.31-5.472 7.464-10.435 10.102-3.372 1.801-6.872 2.445-10.371 1.994-2.863-.386-5.09-1.672-6.49-3.796-2.036-3.153-2.227-6.563-.51-9.973 1.21-2.445 3.119-4.247 4.328-5.147-.255-.837-.637-2.252-.828-3.282-9.226 6.756-8.271 15.893-5.472 20.204 2.1 3.217 6.363 5.212 11.071 5.212 1.273 0 2.546-.13 3.818-.45 8.144-1.61 14.316-6.5 17.816-13.77Zm11.198-7.979c-4.836-5.726-11.962-8.88-20.106-8.88h-1.018a3.492 3.492 0 0 0-3.118-1.93h-.127c-1.972.065-3.5 1.738-3.436 3.733.064 1.93 1.654 3.474 3.563 3.474h.127a3.586 3.586 0 0 0 3.118-2.188h1.145c4.836 0 9.417 1.416 13.553 4.183 3.181 2.123 5.472 4.89 6.745 8.236 1.081 2.702 1.017 5.34-.128 7.592-1.781 3.41-4.772 5.276-8.717 5.276-2.545 0-4.963-.772-6.235-1.351-.7.643-1.973 1.673-2.863 2.316C60.082 83.292 62.88 84 65.554 84c6.108 0 10.625-3.41 12.343-6.82 1.845-3.732 1.718-10.167-3.054-15.636ZM42.52 70.617c.064 1.93 1.655 3.474 3.564 3.474h.127c1.972-.064 3.5-1.737 3.436-3.732-.064-1.93-1.654-3.474-3.563-3.474h-.128c-.127 0-.318 0-.445.064-2.609-4.375-3.69-9.137-3.309-14.284.255-3.86 1.527-7.207 3.754-9.973 1.846-2.381 5.409-3.54 7.826-3.603 6.745-.13 9.608 8.364 9.8 11.774.826.193 2.226.644 3.18.965C66 41.405 59.636 36 53.528 36c-5.726 0-11.008 4.182-13.107 10.36-2.927 8.235-1.018 16.15 2.545 22.39-.318.451-.51 1.159-.446 1.867Z"
    />
    <defs>
      <filter
        id="a"
        width={112}
        height={132}
        x={0}
        y={-12}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={4}
          result="effect1_innerShadow_10_201"
        />
        <feOffset dx={4} dy={-12} />
        <feGaussianBlur stdDeviation={10} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend in2="shape" mode="soft-light" result="effect1_innerShadow_10_201" />
      </filter>
    </defs>
  </svg>
);

export const WebpackCube = ({ customStyle }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    viewBox="-10 31 121 55"
    fill="none"
    style={customStyle}
  >
    <g filter="url(#a)">
      <path
        fill=""
        d="M108 84.364V35.635c0-4.144-2.17-7.955-5.843-9.945L59.926 1.49c-3.506-1.988-8.012-1.988-11.518 0L5.843 25.69C2.337 27.678 0 31.49 0 35.635V84.2c0 4.143 2.17 7.955 5.843 9.945l42.398 24.365c3.506 1.988 8.012 1.988 11.518 0l42.398-24.365a11.145 11.145 0 0 0 5.843-9.78Z"
      />
    </g>
    <path
      stroke="#141416"
      d="M101.909 26.124h-.001l.011.005c3.505 1.9 5.581 5.538 5.581 9.506v48.73c0 3.798-2.072 7.44-5.581 9.34l-.011.005-42.396 24.364c-3.353 1.901-7.67 1.901-11.023 0h-.001L6.092 93.71l-.01-.006C2.575 91.805.5 88.166.5 84.2V35.635c0-3.957 2.234-7.607 5.59-9.51L48.655 1.925c3.352-1.901 7.67-1.901 11.023 0h.001l42.23 24.198Z"
    />
    <g clipPath="url(#b)">
      <path fill="#fff" d="m54 32 25 13.998v28.004L54 88 29 74.002V45.998L54 32Z" />
      <path
        fill="#8ED6FB"
        d="M74.538 73.031 54.83 84.078v-8.591l12.283-6.695 7.425 4.239Zm1.349-1.205V48.743l-7.208 4.118v14.847l7.208 4.118Zm-42.5 1.205 19.707 11.038v-8.591l-12.283-6.686-7.424 4.239Zm-1.35-1.205V48.743l7.208 4.118v14.847l-7.207 4.118Zm.84-24.577L53.094 35.93v8.311l-12.953 7.05-.103.056-7.16-4.1Zm42.16 0L54.83 35.93v8.311l12.944 7.06.103.056 7.16-4.11Z"
      />
      <path
        fill="#1C78C0"
        d="m53.094 73.526-12.113-6.602V53.86l12.113 6.92v12.746Zm1.736 0 12.113-6.593V53.86L54.83 60.78v12.746ZM41.792 52.347l12.17-6.62 12.16 6.62-12.16 6.948-12.17-6.948Z"
      />
    </g>
    <defs>
      <clipPath id="b">
        <path fill="#fff" d="M29 32h50v56H29z" />
      </clipPath>
      <filter
        id="a"
        width={112}
        height={132}
        x={0}
        y={-12}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={4}
          result="effect1_innerShadow_10_135"
        />
        <feOffset dx={4} dy={-12} />
        <feGaussianBlur stdDeviation={10} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend in2="shape" mode="soft-light" result="effect1_innerShadow_10_135" />
      </filter>
    </defs>
  </svg>
);

export const JavascriptCube = ({ customStyle }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    viewBox="-10 31 121 55"
    fill="none"
    style={customStyle}
  >
    <g filter="url(#a)">
      <path
        fill=""
        d="M108 84.364V35.635c0-4.144-2.17-7.955-5.843-9.945L59.926 1.49c-3.506-1.988-8.012-1.988-11.518 0L5.843 25.69C2.337 27.678 0 31.49 0 35.635V84.2c0 4.143 2.17 7.955 5.843 9.945l42.398 24.365c3.506 1.988 8.012 1.988 11.518 0l42.398-24.365a11.145 11.145 0 0 0 5.843-9.78Z"
      />
    </g>
    <path
      stroke="#141416"
      d="M101.909 26.124h-.001l.011.005c3.505 1.9 5.581 5.538 5.581 9.506v48.73c0 3.798-2.072 7.44-5.581 9.34l-.011.005-42.396 24.364c-3.353 1.901-7.67 1.901-11.023 0h-.001L6.092 93.71l-.01-.006C2.575 91.805.5 88.166.5 84.2V35.635c0-3.957 2.234-7.607 5.59-9.51L48.655 1.925c3.352-1.901 7.67-1.901 11.023 0h.001l42.23 24.198Z"
    />
    <path fill="#FFD600" d="M33 81V39h42v42H33Z" />
    <path
      fill="#000001"
      d="M60.461 70.438c.807 1.311 1.685 2.568 3.543 2.568 1.561 0 2.38-.776 2.38-1.85 0-1.284-.847-1.74-2.564-2.488l-.942-.401c-2.717-1.153-4.524-2.597-4.524-5.648 0-2.812 2.153-4.951 5.516-4.951 2.395 0 4.116.83 5.357 3.002l-2.933 1.874c-.645-1.152-1.343-1.606-2.424-1.606-1.104 0-1.802.696-1.802 1.606 0 1.125.7 1.58 2.315 2.276l.942.402c3.202 1.364 5.008 2.757 5.008 5.888 0 3.374-2.664 5.223-6.241 5.223-3.5 0-5.486-1.756-6.592-3.93l2.961-1.965Zm-13.517.096c.59 1.057 1.487 1.87 2.778 1.87 1.234 0 1.945-.488 1.945-2.384V57.667h3.888v12.95c0 3.929-2.278 5.716-5.606 5.716-3.006 0-5.176-2.037-6.06-3.93l3.055-1.87Z"
    />
    <defs>
      <filter
        id="a"
        width={112}
        height={132}
        x={0}
        y={-12}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={4}
          result="effect1_innerShadow_10_108"
        />
        <feOffset dx={4} dy={-12} />
        <feGaussianBlur stdDeviation={10} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend in2="shape" mode="soft-light" result="effect1_innerShadow_10_108" />
      </filter>
    </defs>
  </svg>
);

export const GithubCube = ({ customStyle }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    viewBox="-10 31 121 55"
    fill="none"
    style={customStyle}
  >
    <g filter="url(#a)">
      <path
        fill=""
        d="M106 84.364V35.635c0-4.144-2.13-7.955-5.735-9.945L58.816 1.49c-3.44-1.988-7.863-1.988-11.305 0L5.735 25.69C2.294 27.678 0 31.49 0 35.635V84.2c0 4.143 2.13 7.955 5.735 9.945l41.613 24.365c3.44 1.988 7.863 1.988 11.304 0l41.613-24.365c3.606-1.989 5.735-5.802 5.735-9.78Z"
      />
    </g>
    <path
      stroke="#141416"
      d="M100.013 26.122 58.566 1.924h-.001c-3.286-1.899-7.517-1.899-10.803 0l52.251 24.198Zm0 0 .011.006c3.436 1.896 5.476 5.535 5.476 9.507v48.73c0 3.802-2.036 7.444-5.476 9.341l-.011.006-41.61 24.364-.002.001c-3.286 1.897-7.516 1.897-10.802 0l-.001-.001-41.61-24.364-.012-.006C2.54 91.81.5 88.171.5 84.2V35.635c0-3.961 2.195-7.611 5.485-9.512L47.762 1.923l52.251 24.198Z"
    />
    <g clipPath="url(#b)">
      <path
        fill="#fff"
        d="M53 33c-15.175 0-27.482 12.536-27.482 28 0 12.371 7.875 22.867 18.794 26.57 1.374.259 1.878-.608 1.878-1.347 0-.668-.026-2.874-.037-5.213-7.646 1.693-9.26-3.304-9.26-3.304-1.25-3.237-3.05-4.097-3.05-4.097-2.494-1.738.187-1.702.187-1.702 2.76.197 4.213 2.885 4.213 2.885 2.451 4.28 6.43 3.043 7.997 2.328.247-1.81.96-3.045 1.745-3.744-6.104-.708-12.52-3.11-12.52-13.838 0-3.057 1.073-5.555 2.831-7.516-.285-.705-1.226-3.553.266-7.41 0 0 2.308-.752 7.56 2.87 2.192-.62 4.543-.931 6.878-.942 2.336.01 4.688.322 6.885.942 5.245-3.622 7.55-2.87 7.55-2.87 1.495 3.857.554 6.705.27 7.41 1.761 1.961 2.827 4.459 2.827 7.516 0 10.754-6.429 13.122-12.548 13.815.986.87 1.864 2.573 1.864 5.186 0 3.746-.032 6.761-.032 7.684 0 .745.495 1.618 1.888 1.343C72.617 83.859 80.48 73.367 80.48 61c0-15.464-12.304-28-27.48-28ZM35.811 72.887c-.06.139-.275.18-.47.085-.2-.091-.312-.28-.247-.42.059-.144.274-.184.473-.088.2.092.313.283.244.423Zm1.352 1.229c-.131.124-.387.066-.561-.13-.18-.195-.213-.456-.08-.581.135-.124.383-.066.563.129.18.197.215.457.078.582Zm.928 1.572c-.169.12-.444.008-.614-.241-.169-.25-.169-.548.003-.668.17-.12.442-.012.615.236.168.253.168.551-.005.673Zm1.568 1.821c-.15.17-.472.124-.706-.107-.24-.226-.308-.546-.157-.715.153-.17.476-.122.712.107.239.225.311.548.15.715Zm2.027.615c-.066.22-.376.32-.687.226-.31-.096-.514-.353-.451-.575.064-.22.375-.324.688-.225.31.096.515.351.45.574Zm2.307.26c.008.232-.257.423-.583.427-.329.008-.595-.179-.598-.406 0-.233.258-.423.586-.429.327-.006.595.18.595.409Zm2.266-.088c.04.226-.188.457-.513.519-.319.06-.614-.08-.654-.303-.04-.231.191-.463.51-.523.325-.057.616.078.657.307Z"
      />
    </g>
    <defs>
      <clipPath id="b">
        <path fill="#fff" d="M25.518 32h54.963v56H25.52z" />
      </clipPath>
      <filter
        id="a"
        width={110}
        height={132}
        x={0}
        y={-12}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={4}
          result="effect1_innerShadow_10_120"
        />
        <feOffset dx={4} dy={-12} />
        <feGaussianBlur stdDeviation={10} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend in2="shape" mode="soft-light" result="effect1_innerShadow_10_120" />
      </filter>
    </defs>
  </svg>
);

export const GitCube = ({ customStyle }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    viewBox="-10 31 121 55"
    fill="none"
    style={customStyle}
  >
    <g filter="url(#a)">
      <path
        fill=""
        d="M108 84.364V35.635c0-4.144-2.17-7.955-5.843-9.945L59.926 1.49c-3.506-1.988-8.012-1.988-11.518 0L5.843 25.69C2.337 27.678 0 31.49 0 35.635V84.2c0 4.143 2.17 7.955 5.843 9.945l42.398 24.365c3.506 1.988 8.012 1.988 11.518 0l42.398-24.365a11.145 11.145 0 0 0 5.843-9.78Z"
      />
    </g>
    <path
      stroke="#141416"
      d="M101.909 26.124h-.001l.011.005c3.505 1.9 5.581 5.538 5.581 9.506v48.73c0 3.798-2.072 7.44-5.581 9.34l-.011.005-42.396 24.364c-3.353 1.901-7.67 1.901-11.023 0h-.001L6.092 93.71l-.01-.006C2.575 91.805.5 88.166.5 84.2V35.635c0-3.957 2.234-7.607 5.59-9.51L48.655 1.925c3.352-1.901 7.67-1.901 11.023 0h.001l42.23 24.198Z"
    />
    <path
      fill="#F4511E"
      d="M75.233 57.783 56.217 38.767A3.188 3.188 0 0 0 54 37.833c-.817 0-1.633.35-2.217.934L47.7 42.85l4.783 4.783a3.23 3.23 0 0 1 1.517-.35c1.983 0 3.5 1.517 3.5 3.5a3.23 3.23 0 0 1-.35 1.517l4.667 4.667a3.23 3.23 0 0 1 1.516-.35c1.984 0 3.5 1.517 3.5 3.5s-1.516 3.5-3.5 3.5c-1.983 0-3.5-1.517-3.5-3.5 0-.584.117-1.05.35-1.517l-4.666-4.666c-.117 0-.234.116-.35.116v12.133c1.4.467 2.333 1.75 2.333 3.267 0 1.983-1.517 3.5-3.5 3.5s-3.5-1.517-3.5-3.5c0-1.517.933-2.8 2.333-3.267v-12.25c-1.4-.466-2.333-1.75-2.333-3.266 0-.584.117-1.05.35-1.517l-4.783-4.783-13.3 13.416A3.187 3.187 0 0 0 31.833 60c0 .817.35 1.633.934 2.217l19.016 19.017c.584.583 1.4.933 2.217.933.817 0 1.633-.35 2.217-.933l19.016-19.017c.584-.584.934-1.4.934-2.217 0-.816-.35-1.633-.934-2.217Z"
    />
    <defs>
      <filter
        id="a"
        width={112}
        height={132}
        x={0}
        y={-12}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={4}
          result="effect1_innerShadow_10_128"
        />
        <feOffset dx={4} dy={-12} />
        <feGaussianBlur stdDeviation={10} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend in2="shape" mode="soft-light" result="effect1_innerShadow_10_128" />
      </filter>
    </defs>
  </svg>
);

export const MongodbCube = ({ customStyle }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    viewBox="-10 31 121 55"
    fill="none"
    style={customStyle}
  >
    <g filter="url(#a)">
      <path
        fill=""
        d="M108 84.364V35.635c0-4.144-2.17-7.955-5.843-9.945L59.926 1.49c-3.506-1.988-8.012-1.988-11.518 0L5.843 25.69C2.337 27.678 0 31.49 0 35.635V84.2c0 4.143 2.17 7.955 5.843 9.945l42.398 24.365c3.506 1.988 8.012 1.988 11.518 0l42.398-24.365a11.145 11.145 0 0 0 5.843-9.78Z"
      />
    </g>
    <path
      stroke="#141416"
      d="M101.909 26.124h-.001l.011.005c3.505 1.9 5.581 5.538 5.581 9.506v48.73c0 3.798-2.072 7.44-5.581 9.34l-.011.005-42.396 24.364c-3.353 1.901-7.67 1.901-11.023 0h-.001L6.092 93.71l-.01-.006C2.575 91.805.5 88.166.5 84.2V35.635c0-3.957 2.234-7.607 5.59-9.51L48.655 1.925c3.352-1.901 7.67-1.901 11.023 0h.001l42.23 24.198Z"
    />
    <path
      fill="#00ED64"
      d="M58.938 38.242a99.387 99.387 0 0 1-4.788-6.21.105.105 0 0 0-.152 0 99.387 99.387 0 0 1-4.788 6.21c-20.173 25.728 3.178 43.092 3.178 43.092l.196.13c.174 2.68.609 6.536.609 6.536h1.74s.436-3.834.61-6.536l.196-.152c.022.022 23.373-17.342 3.2-43.07Zm-4.875 42.7s-1.044-.894-1.327-1.351v-.044l1.262-28.016c0-.087.13-.087.13 0l1.263 28.016v.044c-.283.457-1.328 1.35-1.328 1.35Z"
    />
    <defs>
      <filter
        id="a"
        width={112}
        height={132}
        x={0}
        y={-12}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={4}
          result="effect1_innerShadow_10_209"
        />
        <feOffset dx={4} dy={-12} />
        <feGaussianBlur stdDeviation={10} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend in2="shape" mode="soft-light" result="effect1_innerShadow_10_209" />
      </filter>
    </defs>
  </svg>
);

export const JqueryCube = ({ customStyle }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    viewBox="-10 31 121 55"
    fill="none"
    style={customStyle}
  >
    <g filter="url(#a)">
      <path
        fill=""
        d="M108 84.364V35.635c0-4.144-2.17-7.955-5.843-9.945L59.926 1.49c-3.506-1.988-8.012-1.988-11.518 0L5.843 25.69C2.337 27.678 0 31.49 0 35.635V84.2c0 4.143 2.17 7.955 5.843 9.945l42.398 24.365c3.506 1.988 8.012 1.988 11.518 0l42.398-24.365a11.145 11.145 0 0 0 5.843-9.78Z"
      />
    </g>
    <path
      stroke="#141416"
      d="M101.909 26.124h-.001l.011.005c3.505 1.9 5.581 5.538 5.581 9.506v48.73c0 3.798-2.072 7.44-5.581 9.34l-.011.005-42.396 24.364c-3.353 1.901-7.67 1.901-11.023 0h-.001L6.092 93.71l-.01-.006C2.575 91.805.5 88.166.5 84.2V35.635c0-3.957 2.234-7.607 5.59-9.51L48.655 1.925c3.352-1.901 7.67-1.901 11.023 0h.001l42.23 24.198Z"
    />
    <path
      fill="#78CFF5"
      d="M58.31 35.01c-.115.017-.23.05-.341.102-.938.465-2.004 1.845-2.208 2.118a9.779 9.779 0 0 0-1.67 5.395 10.77 10.77 0 0 0 .839 4.244c1.33 3.191 4.091 5.834 7.377 7.07l.41.144c.017.009.179.06.204.064l.12.043c.17.055.345.11.515.145.865.174 1.71.272 2.502.298.136 0 .273.004.41.004 5.979 0 8.298-4.219 9.07-5.625.076-.136.131-.247.182-.315 0-.004 0-.004.005-.009a1.09 1.09 0 1 0-1.803-1.227h-.004c-1.595 2.348-4.322 3.06-8.103 2.122a7.775 7.775 0 0 1-.86-.277 10.392 10.392 0 0 1-1.05-.439c-.66-.328-1.282-.72-1.845-1.154-3.324-2.578-4.624-7.944-2.68-11.041a1.09 1.09 0 0 0-1.07-1.662Zm-9.667 2.173a1.068 1.068 0 0 0-.703.247c-1.65 1.342-3.337 3.541-3.41 3.63a.285.285 0 0 1-.03.048c-2.983 4.342-3.209 10.52-.57 15.74a19.65 19.65 0 0 0 1.38 2.34l.15.213c.421.618.895 1.317 1.5 1.862.209.239.434.47.656.69l.107.111.09.09c.225.217.455.439.694.652h.004c.017.026.043.043.064.064.268.238.541.464.904.75l.098.072c.28.226.567.44.86.648l.09.064c.102.068.205.132.307.204l.102.069.12.076c.217.145.43.277.733.452.196.12.404.239.54.307.06.034.124.068.274.149l.332.175.111.05c.217.112.443.218.67.32l.344.154c.226.098.456.192.738.298l.127.047c.01.008.116.047.124.051.205.073.414.145.622.213l.478.158c.238.08.515.175.818.226 1.488.247 2.932.375 4.3.375.162 0 .325-.005.482-.005 12.045-.264 15.178-10.495 15.207-10.597a1.095 1.095 0 0 0-.58-1.296 1.092 1.092 0 0 0-1.367.375c-3.052 4.458-8.823 6.341-14.7 4.79a12.66 12.66 0 0 1-.866-.252 2.95 2.95 0 0 1-.191-.068 9.928 9.928 0 0 1-.593-.204l-.303-.115c-.174-.069-.349-.137-.562-.23l-.14-.064c-.26-.111-.512-.235-.738-.345l-.622-.324c-.141-.069-.265-.145-.456-.26l-.107-.06-.107-.064a7.036 7.036 0 0 1-.46-.294l-.102-.064a1.52 1.52 0 0 1-.102-.072c-.128-.081-.252-.162-.371-.239a20.074 20.074 0 0 1-.827-.622l-.12-.098c-2.812-2.246-4.892-5.246-5.868-8.463-.908-2.953-.235-6.818 1.803-10.338a1.085 1.085 0 0 0-.24-1.376c-.2-.17-.447-.26-.694-.26Zm-12.006 3.273c-.26 0-.524.093-.733.28-2.084 1.872-3.644 4.296-3.815 4.573-4.458 6.49-3.597 16.577-.537 22.743.06.127.124.25.188.374l.042.069c.056.123.12.251.141.277.034.08.085.17.107.196.05.106.102.2.196.362l.35.6.118.197.213.34.171.273c.051.081.102.154.136.196.17.265.341.529.529.78a.179.179 0 0 0 .026.03l.068.094c.153.221.31.434.451.61l.623.787c.008.009.076.09.08.099l.09.102c.188.23.388.46.588.681.03.035.06.064.09.099.192.208.388.417.592.635l.196.187c.162.17.324.337.495.494 0 .004.08.081.08.081l.171.158c.205.196.418.392.58.528.008.013.162.145.175.154.2.179.4.35.605.515l1.044.827.558.405c.069.051.141.102.213.149a.74.74 0 0 0 .086.064l.784.524c.285.188.571.362.92.571l.188.107c.218.127.44.255.648.366.123.068.247.128.354.183.149.081.31.17.558.29a20.157 20.157 0 0 0 1.032.486c0 .004.102.05.102.05a46.112 46.112 0 0 0 1.074.444c.264.102.541.205.767.286l.158.064a40.253 40.253 0 0 0 1.125.362l.217.068c.264.08.529.166.814.222 2.03.37 4.01.562 5.886.562h.005c15.629 0 20.607-12.575 20.658-12.703a1.092 1.092 0 0 0-.494-1.342 1.099 1.099 0 0 0-1.398.294c-4.011 5.28-11.576 7.24-20.237 5.25-.209-.051-.422-.111-.63-.175l-.41-.123a23.237 23.237 0 0 1-.95-.32c-.239-.081-.478-.175-.687-.256l-.238-.094a21.525 21.525 0 0 1-.784-.332l-.15-.064c-.23-.106-.451-.209-.673-.32a4.556 4.556 0 0 0-.209-.097 16.296 16.296 0 0 1-.503-.265l-.89-.477a3.073 3.073 0 0 0-.273-.162c-.269-.166-.546-.332-.819-.507-.064-.038-.119-.08-.226-.153-.187-.12-.37-.243-.639-.43l-.106-.077c-.184-.128-.363-.265-.512-.375-.094-.069-.187-.145-.34-.26-.137-.107-.274-.21-.401-.311l-.24-.196c-.2-.162-.387-.333-.583-.499a.558.558 0 0 0-.077-.064c-.217-.2-.439-.4-.703-.652l-.771-.767a22.714 22.714 0 0 1-.589-.622 28.074 28.074 0 0 1-.635-.733l-.46-.563a2.908 2.908 0 0 0-.188-.247c-.157-.213-.315-.422-.473-.643-4.245-5.847-5.353-18.05-2.045-22.52a1.09 1.09 0 0 0-.874-1.74Z"
    />
    <defs>
      <filter
        id="a"
        width={112}
        height={132}
        x={0}
        y={-12}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={4}
          result="effect1_innerShadow_10_155"
        />
        <feOffset dx={4} dy={-12} />
        <feGaussianBlur stdDeviation={10} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend in2="shape" mode="soft-light" result="effect1_innerShadow_10_155" />
      </filter>
    </defs>
  </svg>
);

export const SassCube = ({ customStyle }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    viewBox="-10 31 121 55"
    fill="none"
    style={customStyle}
  >
    <g filter="url(#a)">
      <path
        fill=""
        d="M108 84.364V35.635c0-4.144-2.17-7.955-5.843-9.945L59.926 1.49c-3.506-1.988-8.012-1.988-11.518 0L5.843 25.69C2.337 27.678 0 31.49 0 35.635V84.2c0 4.143 2.17 7.955 5.843 9.945l42.398 24.365c3.506 1.988 8.012 1.988 11.518 0l42.398-24.365a11.145 11.145 0 0 0 5.843-9.78Z"
      />
    </g>
    <path
      stroke="#141416"
      d="M101.909 26.124h-.001l.011.005c3.505 1.9 5.581 5.538 5.581 9.506v48.73c0 3.798-2.072 7.44-5.581 9.34l-.011.005-42.396 24.364c-3.353 1.901-7.67 1.901-11.023 0h-.001L6.092 93.71l-.01-.006C2.575 91.805.5 88.166.5 84.2V35.635c0-3.957 2.234-7.607 5.59-9.51L48.655 1.925c3.352-1.901 7.67-1.901 11.023 0h.001l42.23 24.198Z"
    />
    <g clipPath="url(#b)">
      <path
        fill="#CD6799"
        d="M81.07 61.628a13.214 13.214 0 0 0-5.782 1.34c-.594-1.177-1.189-2.226-1.294-2.995-.116-.898-.256-1.446-.116-2.518.14-1.073.769-2.6.757-2.716-.011-.117-.14-.665-1.422-.677-1.282-.011-2.39.245-2.518.583a14.072 14.072 0 0 0-.536 1.9c-.222 1.166-2.565 5.328-3.905 7.508-.432-.851-.805-1.597-.886-2.192-.117-.897-.257-1.445-.117-2.518.14-1.072.77-2.6.758-2.716-.012-.117-.14-.664-1.422-.676-1.283-.012-2.39.245-2.519.583-.128.338-.268 1.13-.536 1.9s-3.38 7.717-4.196 9.513c-.42.92-.782 1.655-1.038 2.156 0 0-.012.035-.047.094-.221.43-.35.664-.35.664v.012c-.174.314-.36.606-.454.606-.07 0-.198-.84.023-1.982.467-2.413 1.574-6.167 1.562-6.295 0-.07.21-.723-.722-1.06-.91-.339-1.236.22-1.318.22-.081 0-.14.199-.14.199s1.015-4.22-1.935-4.22c-1.842 0-4.383 2.017-5.642 3.835-.793.431-2.483 1.352-4.29 2.343-.688.385-1.399.77-2.063 1.131-.047-.047-.094-.105-.14-.151-3.567-3.812-10.166-6.505-9.886-11.623.105-1.865.746-6.761 12.672-12.707 9.816-4.838 17.626-3.497 18.979-.524 1.935 4.243-4.186 12.123-14.328 13.266-3.87.431-5.898-1.06-6.411-1.62-.537-.583-.618-.618-.816-.502-.327.175-.117.7 0 1.003.303.792 1.55 2.191 3.66 2.88 1.865.605 6.4.943 11.89-1.178 6.144-2.378 10.947-8.988 9.537-14.526-1.41-5.619-10.737-7.472-19.562-4.336-5.246 1.865-10.934 4.803-15.026 8.626-4.861 4.547-5.63 8.499-5.316 10.154 1.13 5.876 9.233 9.7 12.473 12.532-.163.093-.314.175-.443.245-1.62.804-7.798 4.033-9.337 7.449-1.749 3.87.28 6.645 1.62 7.018 4.162 1.154 8.44-.921 10.737-4.348 2.296-3.428 2.017-7.88.956-9.921-.012-.023-.024-.047-.047-.07.42-.245.851-.501 1.27-.746.828-.49 1.644-.944 2.344-1.317-.396 1.084-.688 2.378-.828 4.243-.175 2.192.723 5.036 1.9 6.155.525.49 1.143.501 1.54.501 1.375 0 1.993-1.142 2.68-2.494.84-1.656 1.598-3.58 1.598-3.58s-.945 5.2 1.62 5.2c.932 0 1.877-1.212 2.296-1.83v.012s.024-.035.07-.117l.152-.245v-.023c.373-.653 1.212-2.133 2.46-4.593 1.608-3.171 3.159-7.135 3.159-7.135s.14.968.618 2.577c.28.944.862 1.981 1.329 2.984-.373.525-.606.816-.606.816l.011.012c-.303.396-.63.827-.99 1.247-1.271 1.516-2.787 3.253-2.997 3.754-.244.594-.186 1.026.28 1.375.338.257.944.292 1.562.257 1.143-.082 1.947-.362 2.343-.536a7.864 7.864 0 0 0 2.017-1.061c1.248-.921 2.005-2.238 1.935-3.975-.035-.956-.35-1.912-.734-2.81.116-.163.221-.326.338-.49 1.97-2.879 3.497-6.038 3.497-6.038s.14.968.618 2.576c.233.816.711 1.702 1.13 2.565-1.853 1.504-2.995 3.252-3.403 4.395-.735 2.122-.163 3.077.92 3.299.49.105 1.19-.128 1.703-.35a7.752 7.752 0 0 0 2.156-1.107c1.248-.921 2.448-2.204 2.379-3.94-.035-.793-.245-1.574-.537-2.332 1.574-.653 3.603-1.014 6.19-.711 5.55.653 6.645 4.115 6.435 5.572-.21 1.457-1.375 2.25-1.76 2.495-.384.245-.513.326-.478.501.047.257.233.245.56.198.454-.081 2.914-1.177 3.02-3.858.174-3.428-3.09-7.17-8.86-7.135ZM38.264 76.06c-1.842 2.005-4.407 2.763-5.514 2.122-1.19-.688-.723-3.649 1.538-5.77 1.376-1.294 3.148-2.495 4.326-3.23.268-.163.664-.396 1.142-.688.081-.046.128-.07.128-.07l.28-.174c.828 3.03.035 5.7-1.9 7.81Zm13.406-9.116c-.641 1.562-1.982 5.56-2.798 5.34-.7-.187-1.13-3.218-.14-6.214.502-1.504 1.562-3.3 2.18-3.999 1.003-1.119 2.11-1.492 2.378-1.037.338.594-1.224 4.93-1.62 5.91Zm11.063 5.293c-.268.14-.525.233-.641.163-.082-.047.116-.233.116-.233s1.388-1.493 1.936-2.169c.314-.396.687-.862 1.084-1.387v.152c0 1.783-1.726 2.984-2.495 3.474Zm8.533-1.947c-.198-.14-.163-.606.502-2.064.256-.57.862-1.527 1.9-2.448.116.373.198.735.186 1.073-.011 2.25-1.62 3.089-2.588 3.439Z"
      />
    </g>
    <defs>
      <clipPath id="b">
        <path fill="#fff" d="M26 34h64v48H26z" />
      </clipPath>
      <filter
        id="a"
        width={112}
        height={132}
        x={0}
        y={-12}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={4}
          result="effect1_innerShadow_10_144"
        />
        <feOffset dx={4} dy={-12} />
        <feGaussianBlur stdDeviation={10} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend in2="shape" mode="soft-light" result="effect1_innerShadow_10_144" />
      </filter>
    </defs>
  </svg>
);

export const FaceBookIcon = ({ customStyle }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none" style={customStyle}>
    <g clipPath="url(#a)">
      <path
        fill="#1877F2"
        d="M32 16c0-8.837-7.163-16-16-16S0 7.163 0 16c0 7.986 5.85 14.605 13.5 15.806V20.625H9.437V16H13.5v-3.525c0-4.01 2.389-6.225 6.043-6.225 1.75 0 3.582.313 3.582.313V10.5h-2.017c-1.988 0-2.608 1.233-2.608 2.5v3h4.438l-.71 4.625H18.5v11.18C26.15 30.606 32 23.986 32 16Z"
      />
      <path
        fill="#fff"
        d="m22.228 20.625.71-4.625H18.5v-3c0-1.265.62-2.5 2.608-2.5h2.017V6.562s-1.83-.312-3.582-.312c-3.654 0-6.043 2.215-6.043 6.225V16H9.437v4.625H13.5v11.18c1.657.26 3.343.26 5 0v-11.18h3.728Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const GithubIcon = ({ customStyle }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none" style={customStyle}>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M16 .667A16.057 16.057 0 0 0 5.636 4.462a15.89 15.89 0 0 0-5.423 9.567 15.836 15.836 0 0 0 2.101 10.782 15.986 15.986 0 0 0 8.626 6.86c.795.147 1.094-.346 1.094-.764 0-.42-.016-1.634-.021-2.962-4.451.962-5.392-1.878-5.392-1.878-.726-1.844-1.775-2.329-1.775-2.329-1.452-.985.109-.966.109-.966 1.608.113 2.453 1.64 2.453 1.64 1.426 2.432 3.744 1.729 4.655 1.318.143-1.03.56-1.73 1.018-2.129-3.556-.4-7.292-1.765-7.292-7.86a6.142 6.142 0 0 1 1.648-4.27c-.164-.401-.712-2.019.157-4.216 0 0 1.343-.427 4.4 1.63a15.27 15.27 0 0 1 8.012 0c3.055-2.057 4.396-1.63 4.396-1.63.871 2.192.323 3.81.159 4.215a6.129 6.129 0 0 1 1.65 4.276c0 6.109-3.743 7.455-7.304 7.847.572.496 1.083 1.462 1.083 2.948 0 2.129-.018 3.841-.018 4.366 0 .424.289.919 1.1.764a15.987 15.987 0 0 0 8.626-6.861 15.836 15.836 0 0 0 2.1-10.783 15.89 15.89 0 0 0-5.426-9.568A16.057 16.057 0 0 0 16.006.667H16Z"
      clipRule="evenodd"
    />
  </svg>
);

export const TwitterIcon = ({ customStyle }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none" style={customStyle}>
    <path
      fill="#1DA1F2"
      d="M10.063 29.333c12.076 0 18.68-10.26 18.68-19.158 0-.291 0-.581-.018-.87A13.553 13.553 0 0 0 32 5.819c-1.198.545-2.47.902-3.77 1.06a6.728 6.728 0 0 0 2.886-3.724 12.956 12.956 0 0 1-4.17 1.634 6.523 6.523 0 0 0-3.724-2.034 6.43 6.43 0 0 0-4.163.709 6.674 6.674 0 0 0-2.885 3.16 6.898 6.898 0 0 0-.416 4.306 18.279 18.279 0 0 1-7.495-2.042 18.737 18.737 0 0 1-6.036-4.993 6.888 6.888 0 0 0-.719 4.907 6.742 6.742 0 0 0 2.752 4.081 6.384 6.384 0 0 1-2.98-.842v.085c0 1.554.525 3.061 1.485 4.264a6.542 6.542 0 0 0 3.782 2.336c-.966.27-1.98.31-2.964.116a6.74 6.74 0 0 0 2.336 3.346 6.468 6.468 0 0 0 3.797 1.33 13.05 13.05 0 0 1-4.587 2.387c-1.667.48-3.41.616-5.129.404a18.251 18.251 0 0 0 10.063 3.019"
    />
  </svg>
);

export const DiscordIcon = ({ customStyle }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none" style={customStyle}>
    <path
      fill="#5865F2"
      d="M27.09 5.99c-2.04-.921-4.227-1.6-6.514-1.988a.1.1 0 0 0-.105.048 17.966 17.966 0 0 0-.81 1.64 24.754 24.754 0 0 0-7.317 0 16.484 16.484 0 0 0-.823-1.64.103.103 0 0 0-.105-.048 26.629 26.629 0 0 0-6.513 1.987.093.093 0 0 0-.043.037C.71 12.124-.425 18.073.132 23.948a.108.108 0 0 0 .042.073 26.706 26.706 0 0 0 7.99 3.975.105.105 0 0 0 .113-.037c.615-.827 1.164-1.699 1.634-2.616a.1.1 0 0 0-.055-.139c-.87-.324-1.7-.72-2.496-1.17a.1.1 0 0 1-.01-.168c.167-.123.335-.252.495-.382a.1.1 0 0 1 .104-.014c5.237 2.353 10.906 2.353 16.082 0a.1.1 0 0 1 .104.013c.16.13.328.26.497.383a.1.1 0 0 1-.009.168 16.52 16.52 0 0 1-2.497 1.17.1.1 0 0 0-.054.14c.48.915 1.029 1.787 1.633 2.614.025.035.07.05.113.038a26.618 26.618 0 0 0 8.003-3.975.1.1 0 0 0 .041-.072c.667-6.792-1.117-12.692-4.731-17.922a.081.081 0 0 0-.042-.038ZM10.692 20.37c-1.576 0-2.875-1.424-2.875-3.173 0-1.75 1.273-3.174 2.875-3.174 1.615 0 2.901 1.437 2.876 3.174 0 1.749-1.274 3.173-2.876 3.173Zm10.633 0c-1.576 0-2.875-1.424-2.875-3.173 0-1.75 1.273-3.174 2.875-3.174 1.615 0 2.901 1.437 2.876 3.174 0 1.749-1.261 3.173-2.876 3.173Z"
    />
  </svg>
);
