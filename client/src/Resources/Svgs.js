import * as React from "react"

export const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={52}
    height={58}
    fill="none"
  >
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
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_6_37"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)


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
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_15_163"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)


export const MainPattern = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={'100%'}
    height={'100%'}
    fill="none"
  >
    <g
      opacity={2}
      stroke="#101010"
      strokeWidth={2}
      strokeMiterlimit={10}
      clipPath="url(#a)"
    >
      <path d="M-703.118-76.588 696.989 452.336 1280.97 1754.31" />
      <path d="M-727.704-53.135 672.404 475.771 1255.62 1776.07" />
      <path d="M-752.289-29.682 647.819 499.224 1230.27 1797.82" />
      <path d="M-776.874-6.246 623.234 522.677 1204.92 1819.58" />
      <path d="M-801.459 17.206 598.648 546.13l580.932 1295.2" />
      <path d="M-826.045 40.66 574.063 569.565 1154.23 1863.09" />
      <path d="M-850.63 64.112 549.478 593.018 1128.88 1884.84" />
      <path d="M-875.233 87.547 524.892 616.47 1103.54 1906.6" />
      <path d="M-899.818 111 500.307 639.906 1078.19 1928.34" />
      <path d="M-924.403 134.452 475.704 663.359 1052.84 1950.11" />
      <path d="M-948.989 157.888 451.119 686.812 1027.49 1971.85" />
      <path d="M-973.574 181.341 426.534 710.247 1002.15 1993.61" />
      <path d="M-998.16 204.793 401.948 733.7l574.854 1281.66" />
      <path d="M-1022.74 228.228 377.363 757.152 951.45 2037.12" />
      <path d="M-1047.33 251.681 352.778 780.605l573.32 1278.265" />
      <path d="M-1071.93 275.134 328.192 804.04l572.571 1276.59" />
      <path d="M-1096.52 298.587 303.607 827.493 875.411 2102.37" />
      <path d="M-1121.1 322.022 279.022 850.946 850.06 2124.14" />
      <path d="M-1145.69 345.475 254.419 874.382 824.725 2145.88" />
      <path d="M-1170.27 368.928 229.834 897.834 799.373 2167.65" />
      <path d="M-1194.86 392.381 205.249 921.287 774.021 2189.39" />
      <path d="M-1219.44 415.816 180.663 944.739 748.669 2211.15" />
      <path d="M-1244.03 439.268 156.078 968.175 723.335 2232.9" />
      <path d="M-1268.62 462.721 131.493 991.627l566.49 1263.033" />
      <path d="M-1293.22 486.157 106.907 1015.08 672.63 2276.41" />
      <path d="M-1317.8 509.609 82.322 1038.51 647.28 2298.17" />
      <path d="M-1342.39 533.062 57.736 1061.97l564.208 1257.94" />
      <path d="M-1366.97 556.515 33.134 1085.42l563.458 1256.24" />
      <path d="M-1391.56 579.95 8.549 1108.87 571.24 2363.42" />
      <path d="M-1416.14 603.403-16.036 1132.31l561.942 1252.87" />
      <path d="M-1440.73 626.855-40.622 1155.76l561.175 1251.17" />
      <path d="M-1465.32 650.291-65.207 1179.21l560.409 1249.46" />
      <path d="M-1489.9 673.744-89.792 1202.65 469.85 2450.44" />
      <path d="M-1514.5 697.197-114.378 1226.1l558.893 1246.08" />
      <path d="m-1539.09 720.649 1400.11 528.911 558.143 1244.38" />
      <path d="m-1563.67 744.084 1400.104 528.926 557.377 1242.68" />
      <path d="m-1588.26 767.537 1400.109 528.903 556.61 1241.01" />
      <path d="m-1612.84 790.99 1400.103 528.91 555.862 1239.3" />
      <path d="m-1637.43 814.425 1400.108 528.925 555.095 1237.61" />
      <path d="m-1662.01 837.878 1400.103 528.902 554.328 1235.93" />
      <path d="m-1686.6 861.33 1400.108 528.91 553.578 1234.23" />
      <path d="m-1711.2 884.766 1400.122 528.924 552.812 1232.52" />
      <path d="m-1735.79 908.219 1400.127 528.901 552.045 1230.86" />
      <path d="m-1760.37 931.671 1400.104 528.909 551.314 1229.14" />
      <path d="m-1784.96 955.124 1400.109 528.906 550.547 1227.45" />
      <path d="m-1809.54 978.56 1400.103 528.92 549.78 1225.75" />
      <path d="m-1834.13 1002.01 1400.108 528.91 549.014 1224.07" />
      <path d="m-1858.71 1025.46 1400.103 528.91L89.657 2776.74" />
      <path d="m-1883.3 1048.9 1400.108 528.92L64.305 2798.5" />
      <path d="m-1907.9 1072.35 1400.122 528.91L38.953 2820.24" />
      <path d="m-1932.49 1095.81 1400.127 528.9 545.965 1217.3M2767.8 1771.65l-1521.07-490.26L571.92-49.79" />
      <path d="m2789.79 1743.54-1520.11-489.96L595.268-76.849" />
      <path d="m2811.78 1715.42-1519.13-489.65L618.599-103.908" />
      <path d="m2833.79 1687.3-1518.18-489.34L641.947-130.968" />
      <path d="m2855.77 1659.18-1517.21-489.03L665.278-158.027" />
      <path d="m2877.78 1631.05-1516.26-488.7L688.609-185.087" />
      <path d="m2899.77 1602.93-1515.3-488.41L711.956-212.129" />
      <path d="m2921.78 1574.81-1514.34-488.1L735.288-239.189" />
      <path d="M2943.77 1546.69 1430.38 1058.9 758.636-266.248" />
      <path d="m2965.77 1518.56-1512.42-487.47L781.966-293.308" />
      <path d="m2987.76 1490.46-1511.45-487.18L805.315-320.367" />
      <path d="M3009.75 1462.34 1499.26 975.475 828.663-347.427" />
      <path d="M3031.76 1434.22 1522.23 947.667 851.994-374.486" />
      <path d="M3053.75 1406.09 1545.17 919.858 875.342-401.546" />
      <path d="M3075.75 1377.97 1568.14 892.049 898.672-428.605" />
      <path d="M3097.74 1349.85 1591.09 864.223 922.021-455.647" />
      <path d="m3119.75 1321.73-1505.7-485.316L945.352-482.707" />
      <path d="M3141.74 1293.6 1637.02 808.605 968.682-509.766" />
      <path d="M3163.74 1265.48 1659.96 780.797 992.031-536.826" />
      <path d="m3185.73 1237.36-1502.8-484.372-667.57-1316.873" />
      <path d="M3207.72 1209.24 1705.88 725.179 1038.71-590.945" />
      <path d="M3229.73 1181.13 1728.84 697.37l-666.8-1315.374" />
      <path d="M3251.72 1153.01 1751.79 669.544l-666.4-1314.59" />
      <path d="M3273.72 1124.89 1774.75 641.736 1108.72-672.106" />
      <path d="M3295.71 1096.76 1797.72 613.927 1132.07-699.166" />
      <path d="M3317.72 1068.64 1820.66 586.118 1155.4-726.225" />
      <path d="M3339.71 1040.52 1843.63 558.309 1178.75-753.285" />
      <path d="M3361.72 1012.4 1866.58 530.501l-664.5-1310.845" />
      <path d="M3383.7 984.274 1889.54 502.692 1225.43-807.403" />
      <path d="m3405.69 956.152-1493.2-481.269-663.73-1309.346" />
      <path d="m3427.7 928.047-1492.25-480.99L1272.1-861.505" />
      <path d="M3449.69 899.925 1958.42 419.248 1295.44-888.565" />
      <path d="M3471.7 871.803 1981.37 391.439 1318.78-915.624" />
      <path d="M3493.68 843.68 2004.33 363.631 1342.11-942.684" />
      <path d="M3515.69 815.558 2027.28 335.822 1365.46-969.743" />
      <path d="M3537.68 787.435 2050.24 308.013 1388.79-996.803" />
      <path d="m3559.69 759.313-1486.5-479.108-661.05-1304.065" />
      <path d="M3581.68 731.191 2096.16 252.396 1435.47-1050.92" />
      <path d="M3603.68 703.068 2119.12 224.587l-660.3-1302.567" />
      <path d="m3625.67 674.963-1483.6-478.202-659.92-1301.781" />
      <path d="M3647.66 646.841 2165.03 168.952 1505.5-1132.08" />
      <path d="M3669.67 618.719 2187.98 141.143 1528.83-1159.14" />
      <path d="M3691.66 590.596 2210.95 113.335 1552.18-1186.2" />
      <path d="M3713.66 562.474 2233.91 85.526l-658.4-1298.786" />
      <path d="M3735.65 534.351 2256.86 57.717l-658-1298.037" />
      <path d="M3757.66 506.229 2279.82 29.909 1622.19-1267.38" />
      <path d="M3779.65 478.107 2302.77 2.1l-657.23-1296.54" />
      <path d="M3801.66 449.984 2325.74-25.726 1668.87-1321.48" />
      <path d="M3823.64 421.879 2348.68-53.536 1692.22-1348.54" />
      <path d="M3845.63 393.757 2371.65-81.344 1715.55-1375.6" />
      <path d="M3867.64 365.634 2394.61-109.153 1738.89-1402.66" />
      <path d="M3889.63 337.512 2417.56-136.962 1762.23-1429.72" />
      <path d="M3911.64 309.39 2440.52-164.771 1785.57-1456.78" />
      <path d="M3933.63 281.267 2463.47-192.579 1808.9-1483.84" />
      <path d="M3955.63 253.145 2486.44-220.388 1832.25-1510.9" />
      <path d="M3977.62 225.022 2509.39-248.214 1855.58-1537.94" />
      <path d="M3999.61 196.9 2532.35-276.023 1878.93-1565" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h1920v4000H0z" />
      </clipPath>
    </defs>
  </svg>
)