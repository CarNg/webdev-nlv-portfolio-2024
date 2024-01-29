import { SvgIcon, SvgIconProps } from "@mui/material";

export default (props: SvgIconProps) => {
  return (
    <SvgIcon
      width="50"
      height="40"
      viewBox="0 0 50 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 11.7121V32.1429C0 36.0877 3.19797 39.2857 7.14286 39.2857H42.8571C46.802 39.2857 50 36.0877 50 32.1429V11.7121L28.7436 24.793C26.4478 26.2058 23.5522 26.2058 21.2565 24.793L0 11.7121Z"
        fill="#fcfcfc"
      />
      <path
        d="M50 7.51863V7.14286C50 3.19797 46.802 0 42.8571 0H7.14286C3.19797 0 0 3.19796 0 7.14286V7.51864L23.1282 21.7514C24.2761 22.4578 25.7239 22.4578 26.8718 21.7514L50 7.51863Z"
        fill="#fcfcfc"
      />
    </SvgIcon>
  );
};
