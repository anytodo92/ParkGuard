import React from "react";

type IconProps = {
  width?: number;
  height?: number;
  color?: string;
};

export const LeftArrowIcon: React.FC<IconProps> = (props) => {
  const {
    width = 17,
    height = 15,
    color = "#2686BC"
  } = props;

  return (
    <svg width={width} height={height} viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5023 13.8498C10.3657 13.9893 10.1827 14.0664 9.9928 14.0647C9.80288 14.0629 9.62121 13.9824 9.48692 13.8405C9.35263 13.6986 9.27645 13.5066 9.2748 13.3059C9.27315 13.1052 9.34616 12.9119 9.4781 12.7675L14.0362 7.95065L1.29836 7.95065C1.10625 7.95065 0.92202 7.87 0.786184 7.72646C0.650348 7.58291 0.574036 7.38822 0.574036 7.18521C0.574036 6.98221 0.650348 6.78752 0.786184 6.64397C0.92202 6.50042 1.10625 6.41978 1.29836 6.41978L14.0362 6.41978L9.4781 1.60292C9.34616 1.45856 9.27315 1.26521 9.2748 1.06451C9.27645 0.863818 9.35263 0.671838 9.48692 0.52992C9.62121 0.388003 9.80288 0.307503 9.9928 0.305759C10.1827 0.304015 10.3657 0.381166 10.5023 0.520596L16.2968 6.64405C16.3639 6.71531 16.4171 6.79984 16.4533 6.89282C16.4901 6.98539 16.5091 7.0848 16.5091 7.18521C16.5091 7.28563 16.4901 7.38504 16.4533 7.47761C16.4171 7.57058 16.3639 7.65511 16.2968 7.72637L10.5023 13.8498Z" fill={color} />
    </svg>
  );
};