import { FC } from "react";
import { IconSelectorPropsTS } from "./types";

// stroke = "#158FFF";

export const IconSelector: FC<IconSelectorPropsTS> = ({
  id,
  fill = "#158FFF",
  width = "20",
  height = "20",
  rotate = 0,
  stroke = "#158FFF",
}) => {
  switch (id) {
    case "categories1":
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 20 20"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 3.5L16.5 7.5M10 6L5 1L1 5L6 10M5 6L3.5 7.5M14 10L19 15L15 19L10 14M14 15L12.5 16.5M1 19.0001H5L18 6.00006C18.5304 5.46963 18.8284 4.7502 18.8284 4.00006C18.8284 3.24991 18.5304 2.53049 18 2.00006C17.4696 1.46962 16.7501 1.17163 16 1.17163C15.2499 1.17163 14.5304 1.46962 14 2.00006L1 15.0001V19.0001Z"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "categories2":
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 18 18"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 5H17M5 1V5M2 1H16C16.5523 1 17 1.44772 17 2V16C17 16.5523 16.5523 17 16 17H2C1.44772 17 1 16.5523 1 16V2C1 1.44772 1.44772 1 2 1Z"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "categories3":
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 20 20"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1V19H19M8.15997 8.62012L10.5 11.5001M13.088 11.3282L15.925 6.74219M9 7C9 8.10457 8.10457 9 7 9C5.89543 9 5 8.10457 5 7C5 5.89543 5.89543 5 7 5C8.10457 5 9 5.89543 9 7ZM19 5C19 6.10457 18.1046 7 17 7C15.8954 7 15 6.10457 15 5C15 3.89543 15.8954 3 17 3C18.1046 3 19 3.89543 19 5ZM14 13C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13C10 11.8954 10.8954 11 12 11C13.1046 11 14 11.8954 14 13Z"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "categoriesIconLeft":
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 36 36"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
          transform={`rotate(${rotate})`}
        >
          <circle
            cx="18"
            cy="18"
            r="17.5"
            transform="rotate(-180 18 18)"
            stroke={stroke}
          />
          <path
            d="M20 12L14 18L20 24"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "categoriesIconRight":
      return (
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="18"
            cy="18"
            r="17.5"
            transform="rotate(-180 18 18)"
            stroke={stroke}
          />
          <path
            d="M17 24L23 18L17 12"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "features1":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="24" cy="24" r="24" fill="#158FFF" />
          <path
            d="M24 24C26 21.04 24 17 23 16C23 19.038 21.227 20.741 20 22C18.774 23.26 18 25.24 18 27C18 28.5913 18.6321 30.1174 19.7574 31.2426C20.8826 32.3679 22.4087 33 24 33C25.5913 33 27.1174 32.3679 28.2426 31.2426C29.3679 30.1174 30 28.5913 30 27C30 25.468 28.944 23.06 28 22C26.214 25 25.209 25 24 24Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "features2":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle opacity="0.1" cx="24" cy="24" r="24" fill="#158FFF" />
          <path
            d="M19 26C17.9592 26.5876 17.1176 27.4726 16.5831 28.5416C16.0487 29.6106 15.8456 30.8148 16 32C17.1852 32.1544 18.3894 31.9513 19.4584 31.4168C20.5274 30.8823 21.4124 30.0408 22 29M16 25C17.7831 25.2119 19.443 26.0175 20.7128 27.2872C21.9825 28.557 22.7881 30.2169 23 32C23.8839 31.4904 24.6233 30.7638 25.1482 29.8889C25.6732 29.014 25.9663 28.0197 26 27C27.6791 26.4093 29.1454 25.334 30.2133 23.91C31.2813 22.486 31.9031 20.7773 32 19C32 18.2044 31.6839 17.4413 31.1213 16.8787C30.5587 16.3161 29.7956 16 29 16C27.2227 16.0969 25.514 16.7187 24.09 17.7867C22.666 18.8546 21.5907 20.3209 21 22C19.9803 22.0337 18.986 22.3268 18.1111 22.8518C17.2362 23.3767 16.5096 24.1161 16 25ZM28 21C28 21.5523 27.5523 22 27 22C26.4477 22 26 21.5523 26 21C26 20.4477 26.4477 20 27 20C27.5523 20 28 20.4477 28 21Z"
            stroke="#158FFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "features3":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle opacity="0.1" cx="24" cy="24" r="24" fill="#158FFF" />
          <path
            d="M34 21L24 17L14 21L24 25L34 21ZM34 21V27M18 22.6001V28.0001C18 28.7957 18.6321 29.5588 19.7574 30.1214C20.8826 30.684 22.4087 31.0001 24 31.0001C25.5913 31.0001 27.1174 30.684 28.2426 30.1214C29.3679 29.5588 30 28.7957 30 28.0001V22.6001"
            stroke="#158FFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "features4":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle opacity="0.1" cx="24" cy="24" r="24" fill="#158FFF" />
          <path
            d="M19 16V32L32 24L19 16Z"
            stroke="#158FFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "quotes":
      return (
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.7532 9.00037C7.32558 9.00037 4.54248 11.7834 4.54248 15.2404C4.54248 18.4922 7.03273 21.1288 10.1966 21.4218C9.55206 22.5935 8.38028 23.8533 6.38806 25.0545C5.83139 25.3768 5.47995 25.9626 5.47995 26.5779C5.47995 27.8376 6.76901 28.7165 7.94074 28.1893C11.3393 26.6656 16.9931 22.9453 16.9931 15.2405C16.9931 11.7835 14.2101 9.00052 10.7531 9.00052L10.7532 9.00037Z"
            fill={fill}
          />
          <path
            d="M26.1629 9.00037C22.7058 9.00037 19.9229 11.7834 19.9229 15.2404C19.9229 18.4922 22.4131 21.1288 25.5769 21.4218C24.9324 22.5935 23.7607 23.8533 21.7684 25.0545C21.2118 25.3768 20.8603 25.9626 20.8603 26.5779C20.8603 27.8376 22.1494 28.7165 23.3211 28.1893C26.69 26.6658 32.3442 22.9746 32.3442 15.2405C32.3736 11.7833 29.5906 9 26.1628 9L26.1629 9.00037Z"
            fill={fill}
          />
        </svg>
      );
    case "instagram":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4Z"
            stroke="#939393"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
            stroke="#939393"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "facebook":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 10V14H10V21H14V14H17L18 10H14V8C14 7.73478 14.1054 7.48043 14.2929 7.29289C14.4804 7.10536 14.7348 7 15 7H18V3H15C13.6739 3 12.4021 3.52678 11.4645 4.46447C10.5268 5.40215 10 6.67392 10 8V10H7Z"
            stroke="#939393"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "youtube":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 5H7C4.79086 5 3 6.79086 3 9V15C3 17.2091 4.79086 19 7 19H17C19.2091 19 21 17.2091 21 15V9C21 6.79086 19.2091 5 17 5Z"
            stroke="#939393"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 9L15 12L10 15V9Z"
            stroke="#939393"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "navigationLogo":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_24_2601)">
            <path
              d="M0.924481 9.90935L15.9218 19.4929C15.9465 19.5092 15.9749 19.5166 16.0029 19.5166C16.0313 19.5166 16.0595 19.5092 16.084 19.4929L31.0812 9.90935C31.124 9.88166 31.1505 9.83393 31.1505 9.7825C31.1505 9.73082 31.1243 9.68334 31.0812 9.65515L16.084 0.0709755C16.0348 0.0398181 15.971 0.0398181 15.9215 0.0709755L0.924228 9.65578C0.880706 9.68373 0.854492 9.7312 0.854492 9.78313C0.854492 9.83407 0.880704 9.88229 0.924228 9.90949L0.924481 9.90935Z"
              fill="#158FFF"
            />
            <path
              d="M31.0816 15.8769L28.454 14.1977C28.4041 14.1665 28.3412 14.1665 28.2913 14.1977L16.0028 22.0505L3.71428 14.1977C3.66458 14.1665 3.60127 14.1665 3.55182 14.1977L0.924716 15.8769C0.881195 15.9049 0.85498 15.9529 0.85498 16.0038C0.85498 16.0547 0.881192 16.1034 0.924716 16.1306L15.922 25.7142C15.9467 25.7303 15.9752 25.7379 16.0031 25.7379C16.0315 25.7379 16.0597 25.73 16.0842 25.7142L31.0815 16.1306C31.1242 16.1034 31.1507 16.0547 31.1507 16.0038C31.151 15.9529 31.1247 15.9049 31.0817 15.8769H31.0816Z"
              fill="#F2C94C"
            />
            <path
              d="M31.0816 22.0989L28.454 20.4196C28.4041 20.3885 28.3412 20.3885 28.2913 20.4196L16.0028 28.2731L3.71428 20.4196C3.66458 20.3885 3.60127 20.3885 3.55182 20.4196L0.924716 22.0989C0.881195 22.1261 0.85498 22.1743 0.85498 22.2257C0.85498 22.2772 0.881192 22.3254 0.924716 22.3526L15.922 31.9367C15.9467 31.9531 15.9752 31.9605 16.0031 31.9605C16.0315 31.9605 16.0597 31.9531 16.0842 31.9367L31.0815 22.3526C31.1242 22.3254 31.1507 22.2767 31.1507 22.2257C31.151 22.1743 31.1247 22.1261 31.0817 22.0989H31.0816Z"
              fill="#F2C94C"
            />
          </g>
          <defs>
            <clipPath id="clip0_24_2601">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "advantages1":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle opacity="0.1" cx="24" cy="24" r="24" fill="#158FFF" />
          <path
            d="M15 33V31C15 29.9391 15.4214 28.9217 16.1716 28.1716C16.9217 27.4214 17.9391 27 19 27H23C24.0609 27 25.0783 27.4214 25.8284 28.1716C26.5786 28.9217 27 29.9391 27 31V33M28 23L30 25L34 21M25 19C25 21.2091 23.2091 23 21 23C18.7909 23 17 21.2091 17 19C17 16.7909 18.7909 15 21 15C23.2091 15 25 16.7909 25 19Z"
            stroke="#158FFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "advantages2":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle opacity="0.1" cx="24" cy="24" r="24" fill="#158FFF" />
          <path
            d="M30 20V17C30 16.7348 29.8946 16.4804 29.7071 16.2929C29.5196 16.1054 29.2652 16 29 16H16C15.7348 16 15.4804 16.1054 15.2929 16.2929C15.1054 16.4804 15 16.7348 15 17V29C15 29.2652 15.1054 29.5196 15.2929 29.7071C15.4804 29.8946 15.7348 30 16 30H25M28 21H30M26 20H32C32.5523 20 33 20.4477 33 21V31C33 31.5523 32.5523 32 32 32H26C25.4477 32 25 31.5523 25 31V21C25 20.4477 25.4477 20 26 20Z"
            stroke="#158FFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "author":
      return (
        <svg
          width="10"
          height="14"
          viewBox="0 0 10 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 13V11.6667C1 10.9594 1.28095 10.2811 1.78105 9.78105C2.28115 9.28095 2.95942 9 3.66667 9H6.33333C7.04058 9 7.71885 9.28095 8.21895 9.78105C8.71905 10.2811 9 10.9594 9 11.6667V13M7.66667 3.66667C7.66667 5.13943 6.47276 6.33333 5 6.33333C3.52724 6.33333 2.33333 5.13943 2.33333 3.66667C2.33333 2.19391 3.52724 1 5 1C6.47276 1 7.66667 2.19391 7.66667 3.66667Z"
            stroke="#939393"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "starEmpty":
      return (
        <svg
          width="14"
          height="13"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.2796 10.3025C7.10471 10.2103 6.89565 10.2102 6.72067 10.3022L3.68214 11.8997L4.26259 8.51604C4.296 8.32125 4.23135 8.1225 4.08973 7.98465L1.62874 5.58912L5.02395 5.09706C5.21946 5.06872 5.3885 4.94596 5.47593 4.7688L6.99522 1.69034L8.51451 4.7688C8.60195 4.94596 8.77098 5.06872 8.9665 5.09706L12.3617 5.58912L9.90072 7.98465C9.7591 8.1225 9.69445 8.32125 9.72786 8.51604L10.3081 11.8983L7.2796 10.3025Z"
            stroke="#E3AD09"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "starHalf":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.2796 11.3025C8.10471 11.2103 7.89565 11.2102 7.72067 11.3022L4.68214 12.8997L5.26259 9.51604C5.296 9.32125 5.23135 9.1225 5.08973 8.98465L2.62874 6.58912L6.02395 6.09706C6.21946 6.06872 6.3885 5.94596 6.47593 5.7688L7.99522 2.69034L9.51451 5.7688C9.60195 5.94596 9.77098 6.06872 9.9665 6.09706L13.3617 6.58912L10.9007 8.98465C10.7591 9.1225 10.6944 9.32125 10.7279 9.51604L11.3081 12.8983L8.2796 11.3025Z"
            stroke="#E3AD09"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.99989 11.8334L3.88522 13.9967L4.67122 9.41472L1.33789 6.17005L5.93789 5.50338L7.99522 1.33472V5.50338V8V9.41472V11L7.99989 11.8334Z"
            fill="#E3AD09"
          />
        </svg>
      );
    case "starFull":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.99989 11.8333L3.88522 13.9966L4.67122 9.41459L1.33789 6.16993L5.93789 5.50326L7.99522 1.33459L10.0526 5.50326L14.6526 6.16993L11.3192 9.41459L12.1052 13.9966L7.99989 11.8333Z"
            fill="#E3AD09"
          />
        </svg>
      );
    case "triangleRight":
      return (
        <svg
          width="10"
          height="12"
          viewBox="0 0 10 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.666748 0.666656V11.3333L9.33341 5.99999L0.666748 0.666656Z"
            stroke="#939393"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "triangleDown":
      return (
        <svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L7 7L13 1"
            stroke="#939393"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "triangleUp":
      return (
        <svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 7L7 1L13 7"
            stroke="#939393"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "checkmark":
      return (
        <svg
          width="17"
          height="12"
          viewBox="0 0 17 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 6L6 11L16 1"
            stroke="#939393"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "courseClock":
      return (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 3.66667V7L9 9M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z"
            stroke="#939393"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "courseDownload":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 17V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V17M7 11L12 16M12 16L17 11M12 16V4"
            stroke="#939393"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "courseCertificate":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19M14 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V8M14 3L19 8M19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H12M4.5 17L3 22L6 20.5L9 22L7.5 17M9 14C9 15.6569 7.65685 17 6 17C4.34315 17 3 15.6569 3 14C3 12.3431 4.34315 11 6 11C7.65685 11 9 12.3431 9 14Z"
            stroke="#939393"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "courseFileText":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19M14 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V8M14 3L19 8M9 9H10M9 13H15M9 17H15"
            stroke="#939393"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "courseFileTextCircle":
      return (
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="18" cy="18" r="18" fill="#F2F2F4" />
          <path
            d="M20 9V13C20 13.2652 20.1054 13.5196 20.2929 13.7071C20.4804 13.8946 20.7348 14 21 14H25M20 9H13C12.4696 9 11.9609 9.21071 11.5858 9.58579C11.2107 9.96086 11 10.4696 11 11V25C11 25.5304 11.2107 26.0391 11.5858 26.4142C11.9609 26.7893 12.4696 27 13 27H23C23.5304 27 24.0391 26.7893 24.4142 26.4142C24.7893 26.0391 25 25.5304 25 25V14M20 9L25 14M15 15H16M15 19H21M15 23H21"
            stroke="#939393"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "courseFileZip":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 20.735C5.69553 20.5592 5.44278 20.3063 5.26721 20.0017C5.09165 19.6971 4.99948 19.3516 5 19V5C5 4.46957 5.21072 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H16M11 5H10M13 7H12M11 9H10M13 11H12M11 13H10M13 15H12M11 17C11.5304 17 12.0391 17.2107 12.4142 17.5858C12.7893 17.9609 13 18.4696 13 19V21C13 21.2652 12.8946 21.5196 12.7071 21.7071C12.5196 21.8946 12.2652 22 12 22H10C9.73478 22 9.48043 21.8946 9.29289 21.7071C9.10536 21.5196 9 21.2652 9 21V19C9 18.4696 9.21071 17.9609 9.58579 17.5858C9.96086 17.2107 10.4696 17 11 17Z"
            stroke="#2F2F2E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "coursePause":
      return (
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="18" cy="18" r="18" fill="#F2C94C" />
          <path
            d="M15 11H14C13.4477 11 13 11.4477 13 12V24C13 24.5523 13.4477 25 14 25H15C15.5523 25 16 24.5523 16 24V12C16 11.4477 15.5523 11 15 11Z"
            fill="#2F2F2E"
          />
          <path
            d="M22 11H21C20.4477 11 20 11.4477 20 12V24C20 24.5523 20.4477 25 21 25H22C22.5523 25 23 24.5523 23 24V12C23 11.4477 22.5523 11 22 11Z"
            fill="#2F2F2E"
          />
        </svg>
      );
    case "courseFileYellow":
      return (
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="18" cy="18" r="18" fill="#F2C94C" />
          <path
            d="M20 9V13C20 13.2652 20.1054 13.5196 20.2929 13.7071C20.4804 13.8946 20.7348 14 21 14H25M20 9H13C12.4696 9 11.9609 9.21071 11.5858 9.58579C11.2107 9.96086 11 10.4696 11 11V25C11 25.5304 11.2107 26.0391 11.5858 26.4142C11.9609 26.7893 12.4696 27 13 27H23C23.5304 27 24.0391 26.7893 24.4142 26.4142C24.7893 26.0391 25 25.5304 25 25V14M20 9L25 14M15 15H16M15 19H21M15 23H21"
            stroke="#2F2F2E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "coursePlayButton":
      return (
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="18" cy="18" r="18" fill="#F2F2F4" />
          <path
            d="M13 10V26L26 18L13 10Z"
            stroke="#939393"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "courseFolder":
      return (
        <svg
          width="14"
          height="12"
          viewBox="0 0 14 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.33333 0.666626H5L7 2.66663H11.6667C12.0203 2.66663 12.3594 2.8071 12.6095 3.05715C12.8595 3.3072 13 3.64634 13 3.99996V9.33329C13 9.68691 12.8595 10.0261 12.6095 10.2761C12.3594 10.5262 12.0203 10.6666 11.6667 10.6666H2.33333C1.97971 10.6666 1.64057 10.5262 1.39052 10.2761C1.14048 10.0261 1 9.68691 1 9.33329V1.99996C1 1.64634 1.14048 1.3072 1.39052 1.05715C1.64057 0.807102 1.97971 0.666626 2.33333 0.666626Z"
            stroke="#939393"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "courseTriangleRight":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 4V20L20 12L7 4Z"
            stroke="#939393"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "profileIcon":
      return (
        <svg
          width="14"
          height="20"
          viewBox="0 0 14 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 19V17C1 15.9391 1.42143 14.9217 2.17157 14.1716C2.92172 13.4214 3.93913 13 5 13H9C10.0609 13 11.0783 13.4214 11.8284 14.1716C12.5786 14.9217 13 15.9391 13 17V19M11 5C11 7.20914 9.20914 9 7 9C4.79086 9 3 7.20914 3 5C3 2.79086 4.79086 1 7 1C9.20914 1 11 2.79086 11 5Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "loadingCircle":
      return (
        <svg
          width="70"
          height="70"
          viewBox="0 0 45 45"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#000"
        >
          <g
            fill="none"
            fillRule="evenodd"
            transform="translate(1 1)"
            strokeWidth="2"
          >
            <circle cx="22" cy="22" r="6" strokeOpacity="0">
              <animate
                attributeName="r"
                begin="1.5s"
                dur="3s"
                values="6;22"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="strokeOpacity"
                begin="1.5s"
                dur="3s"
                values="1;0"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="strokeWidth"
                begin="1.5s"
                dur="3s"
                values="2;0"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="22" cy="22" r="6" strokeOpacity="0">
              <animate
                attributeName="r"
                begin="3s"
                dur="3s"
                values="6;22"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="strokeOpacity"
                begin="3s"
                dur="3s"
                values="1;0"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="strokeWidth"
                begin="3s"
                dur="3s"
                values="2;0"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="22" cy="22" r="8">
              <animate
                attributeName="r"
                begin="0s"
                dur="1.5s"
                values="6;1;2;3;4;5;6"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </svg>
      );
    case "threeDots":
      return (
        <svg
          width="80"
          height="16"
          viewBox="0 0 120 30"
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
        >
          <circle cx="15" cy="15" r="15">
            <animate
              attributeName="r"
              from="15"
              to="15"
              begin="0s"
              dur="0.8s"
              values="15;9;15"
              calcMode="linear"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fillOpacity"
              from="1"
              to="1"
              begin="0s"
              dur="0.8s"
              values="1;.5;1"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="60" cy="15" r="9" fillOpacity="0.3">
            <animate
              attributeName="r"
              from="9"
              to="9"
              begin="0s"
              dur="0.8s"
              values="9;15;9"
              calcMode="linear"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fillOpacity"
              from="0.5"
              to="0.5"
              begin="0s"
              dur="0.8s"
              values=".5;1;.5"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="105" cy="15" r="15">
            <animate
              attributeName="r"
              from="15"
              to="15"
              begin="0s"
              dur="0.8s"
              values="15;9;15"
              calcMode="linear"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fillOpacity"
              from="1"
              to="1"
              begin="0s"
              dur="0.8s"
              values="1;.5;1"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      );
    case "headerCircleLeft":
      return (
        <svg
          width="414"
          height="414"
          viewBox="0 0 414 414"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="207"
            cy="207"
            r="80.5"
            stroke="white"
            strokeOpacity="0.05"
          />
          <circle
            cx="207.5"
            cy="207.5"
            r="132"
            stroke="white"
            strokeOpacity="0.05"
          />
          <circle
            cx="207"
            cy="207"
            r="171.5"
            stroke="white"
            strokeOpacity="0.05"
          />
          <circle
            cx="207"
            cy="207"
            r="206.5"
            stroke="white"
            strokeOpacity="0.05"
          />
          <circle
            opacity="0.5"
            cx="5"
            cy="5"
            r="5"
            transform="matrix(-1 0 0 1 98 74)"
            fill="#158FFF"
          />
        </svg>
      );
    case "headerCircleRight":
      return (
        <svg
          width="414"
          height="414"
          viewBox="0 0 414 414"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="207"
            cy="207"
            r="80.5"
            stroke="white"
            strokeOpacity="0.2"
          />
          <circle
            cx="207.5"
            cy="207.5"
            r="132"
            stroke="white"
            strokeOpacity="0.2"
          />
          <circle
            cx="207"
            cy="207"
            r="171.5"
            stroke="white"
            strokeOpacity="0.2"
          />
          <circle
            cx="207"
            cy="207"
            r="206.5"
            stroke="white"
            strokeOpacity="0.2"
          />
          <circle
            opacity="0.7"
            cx="5"
            cy="5"
            r="5"
            transform="matrix(-1 0 0 1 98 74)"
            fill="#158FFF"
          />
        </svg>
      );

    case "header1":
      return (
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 5V3C6 2.46957 6.21071 1.96086 6.58579 1.58579C6.96086 1.21071 7.46957 1 8 1H12C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V5M10 10V10.01M1 11C3.79158 12.4067 6.87403 13.1394 10 13.1394C13.126 13.1394 16.2084 12.4067 19 11M3 5H17C18.1046 5 19 5.89543 19 7V16C19 17.1046 18.1046 18 17 18H3C1.89543 18 1 17.1046 1 16V7C1 5.89543 1.89543 5 3 5Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "header2":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 10H2M10 1V2M18 10H19M3.6 3.6L4.3 4.3M16.4 3.6L15.7 4.3M7.7 15H12.3M7 14C6.16047 13.3704 5.54033 12.4925 5.22743 11.4908C4.91453 10.4892 4.92473 9.41442 5.25658 8.41886C5.58844 7.4233 6.22512 6.55739 7.07645 5.94379C7.92778 5.33019 8.95059 5 10 5C11.0494 5 12.0722 5.33019 12.9236 5.94379C13.7749 6.55739 14.4116 7.4233 14.7434 8.41886C15.0753 9.41442 15.0855 10.4892 14.7726 11.4908C14.4597 12.4925 13.8395 13.3704 13 14C12.6096 14.3865 12.3156 14.8594 12.1419 15.3806C11.9681 15.9018 11.9195 16.4566 12 17C12 17.5304 11.7893 18.0391 11.4142 18.4142C11.0391 18.7893 10.5304 19 10 19C9.46957 19 8.96086 18.7893 8.58579 18.4142C8.21071 18.0391 8 17.5304 8 17C8.08046 16.4566 8.03185 15.9018 7.85813 15.3806C7.6844 14.8594 7.39043 14.3865 7 14Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "header3":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="12" fill="#2F2F2E" />
          <path
            d="M15 31H33M18 18H30C30.5523 18 31 18.4477 31 19V27C31 27.5523 30.5523 28 30 28H18C17.4477 28 17 27.5523 17 27V19C17 18.4477 17.4477 18 18 18Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "header4":
      return (
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 4C44.7276 4 49.4089 4.93117 53.7766 6.74034C58.1443 8.54951 62.1129 11.2012 65.4558 14.5442C68.7988 17.8871 71.4505 21.8557 73.2597 26.2234C75.0688 30.5911 76 35.2724 76 40C76 44.7276 75.0688 49.4089 73.2597 53.7766C71.4505 58.1443 68.7987 62.1129 65.4558 65.4559C62.1129 68.7988 58.1443 71.4505 53.7766 73.2597C49.4089 75.0688 44.7276 76 40 76C35.2724 76 30.5911 75.0688 26.2234 73.2597C21.8557 71.4505 17.8871 68.7987 14.5441 65.4558C11.2012 62.1129 8.5495 58.1443 6.74033 53.7766C4.93116 49.4089 4 44.7276 4 40C4 35.2724 4.93117 30.5911 6.74034 26.2234C8.54952 21.8557 11.2013 17.887 14.5442 14.5441C17.8871 11.2012 21.8557 8.5495 26.2234 6.74033C30.5911 4.93116 35.2724 4 40 4L40 4Z"
            stroke="#2F2F2E"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40 4C47.6025 4 55.0098 6.40678 61.1603 10.8754C67.3108 15.344 71.8887 21.645 74.238 28.8754C76.5873 36.1058 76.5873 43.8943 74.238 51.1246C71.8887 58.355 67.3108 64.656 61.1603 69.1246"
            stroke="#158FFF"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "header5":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="12" fill="#2F2F2E" />
          <path
            d="M15 33V31C15 29.9391 15.4214 28.9217 16.1716 28.1716C16.9217 27.4214 17.9391 27 19 27H23C24.0609 27 25.0783 27.4214 25.8284 28.1716C26.5786 28.9217 27 29.9391 27 31V33M28 15.13C28.8604 15.3503 29.623 15.8507 30.1676 16.5523C30.7122 17.2539 31.0078 18.1168 31.0078 19.005C31.0078 19.8932 30.7122 20.7561 30.1676 21.4577C29.623 22.1593 28.8604 22.6597 28 22.88M33 33V31C32.9949 30.1172 32.6979 29.2608 32.1553 28.5644C31.6126 27.868 30.8548 27.3707 30 27.15M25 19C25 21.2091 23.2091 23 21 23C18.7909 23 17 21.2091 17 19C17 16.7909 18.7909 15 21 15C23.2091 15 25 16.7909 25 19Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "searchIcon":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
            stroke="#158FFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    default:
      return <svg></svg>;
  }
};
