import { ClickableArrowIconProps, SVGIconPropType } from '@type/Main';

export const StarSvg = ({ className }: SVGIconPropType) => {
  return (
    <svg
      width="99"
      height="95"
      className={className}
      viewBox="0 0 99 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M49.5014 75.8733L80.0365 94.2351L71.9334 59.6283L98.911 36.3438L63.3855 33.3409L49.5014 0.703247L35.6173 33.3409L0.0917969 36.3438L27.0694 59.6283L18.9663 94.2351L49.5014 75.8733Z"
        fill="#959799"
      />
    </svg>
  );
};

export const CarouselArrowIcon = () => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.71647 0.229493L5.59086 1.35509L10.0454 5.81758L0.330077 5.81758L0.330077 7.41418L10.0454 7.41418L5.59086 11.8767L6.71646 13.0023L13.1029 6.61588L6.71647 0.229493Z"
        fill="#1A1A1A"
      />
    </svg>
  );
};

export const TikTokIcon = ({ className }: SVGIconPropType) => {
  return (
    <svg
      height="512pt"
      className={className}
      viewBox="-32 0 512 512"
      width="512pt"
      xmlns="http://www.w3.org/2000/svg">
      <path d="m432.734375 112.464844c-53.742187 0-97.464844-43.722656-97.464844-97.464844 0-8.285156-6.714843-15-15-15h-80.335937c-8.28125 0-15 6.714844-15 15v329.367188c0 31.59375-25.707032 57.296874-57.300782 57.296874s-57.296874-25.703124-57.296874-57.296874c0-31.597657 25.703124-57.300782 57.296874-57.300782 8.285157 0 15-6.714844 15-15v-80.335937c0-8.28125-6.714843-15-15-15-92.433593 0-167.632812 75.203125-167.632812 167.636719 0 92.433593 75.199219 167.632812 167.632812 167.632812 92.433594 0 167.636719-75.199219 167.636719-167.632812v-145.792969c29.851563 15.917969 63.074219 24.226562 97.464844 24.226562 8.285156 0 15-6.714843 15-15v-80.335937c0-8.28125-6.714844-15-15-15zm0 0" />
    </svg>
  );
};

export const FacebookIcon = ({ className }: SVGIconPropType) => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      x="0px"
      className={className}
      y="0px"
      viewBox="0 0 155.139 155.139">
      <g>
        <path
          id="f_1_"
          d="M89.584,155.139V84.378h23.742l3.562-27.585H89.584V39.184
          c0-7.984,2.208-13.425,13.67-13.425l14.595-0.006V1.08C115.325,0.752,106.661,0,96.577,0C75.52,0,61.104,12.853,61.104,36.452
          v20.341H37.29v27.585h23.814v70.761H89.584z"
        />
      </g>
    </svg>
  );
};

export const ClickableArrowIcon = ({ className, onClick }: ClickableArrowIconProps) => {
  return (
    <svg
      width="12"
      height="20"
      className={className}
      viewBox="0 0 12 20"
      fill="none"
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg">
      <path d="M0 18.03L1.77 19.8L11.67 9.9L1.77 0L0 1.77L8.13 9.9L0 18.03H0Z" fill="#FFC700" />
    </svg>
  );
};

export const ThickStarIcon = ({ className }: SVGIconPropType) => {
  return (
    <svg
      width="35"
      height="32"
      className={className}
      viewBox="0 0 35 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.6095 11.1663L17.3421 0L22.0747 11.1663L34.1842 12.1937L24.9884 20.16L27.7505 32L17.3421 25.7179L6.93368 32L9.69579 20.16L0.5 12.1937L12.6095 11.1663ZM18.9757 12.4965L17.342 8.63965L15.7083 12.4628L14.9167 14.3323L12.8957 14.5007L8.73568 14.8544L11.902 17.5996L13.4346 18.9302L12.9799 20.9175L12.0367 24.9765L15.6073 22.8207L17.342 21.7765L19.0767 22.8544L22.6473 25.0102L21.7041 20.9512L21.2494 18.9639L22.782 17.6333L25.9483 14.8881L21.7883 14.5344L19.7673 14.366L18.9757 12.4965Z"
        fill="#565656"
      />
    </svg>
  );
};

export const CaretDownInCircleIcon = ({ className }: SVGIconPropType) => {
  return (
    <svg width="21" height="20" className={className} viewBox="0 0 21 20" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 0C4.98 0 0.5 4.48 0.5 10C0.5 15.52 4.98 20 10.5 20C16.02 20 20.5 15.52 20.5 10C20.5 4.48 16.02 0 10.5 0ZM10.5 2C14.91 2 18.5 5.59 18.5 10C18.5 14.41 14.91 18 10.5 18C6.09 18 2.5 14.41 2.5 10C2.5 5.59 6.09 2 10.5 2ZM6.5 9L10.5 13L14.5 9H6.5Z"
        fill="black"
      />
    </svg>
  );
};

export const ConfigIcon = ({ className }: SVGIconPropType) => {
  return (
    <svg
      width="33"
      height="32"
      className={className}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M28.4008 17.5669C28.4675 17.0669 28.5008 16.5502 28.5008 16.0002C28.5008 15.4669 28.4675 14.9336 28.3842 14.4336L31.7675 11.8002C32.0675 11.5669 32.1508 11.1169 31.9675 10.7836L28.7675 5.25024C28.5675 4.88358 28.1508 4.76691 27.7842 4.88358L23.8008 6.48358C22.9675 5.85024 22.0842 5.31691 21.1008 4.91691L20.5008 0.683577C20.4342 0.283577 20.1008 0.000244141 19.7008 0.000244141H13.3008C12.9008 0.000244141 12.5842 0.283577 12.5175 0.683577L11.9175 4.91691C10.9342 5.31691 10.0342 5.86691 9.2175 6.48358L5.23417 4.88358C4.8675 4.75024 4.45083 4.88358 4.25083 5.25024L1.0675 10.7836C0.867501 11.1336 0.934167 11.5669 1.2675 11.8002L4.65083 14.4336C4.5675 14.9336 4.50083 15.4836 4.50083 16.0002C4.50083 16.5169 4.53417 17.0669 4.6175 17.5669L1.23417 20.2002C0.934167 20.4336 0.850834 20.8836 1.03417 21.2169L4.23417 26.7502C4.43417 27.1169 4.85083 27.2336 5.2175 27.1169L9.20083 25.5169C10.0342 26.1502 10.9175 26.6836 11.9008 27.0836L12.5008 31.3169C12.5842 31.7169 12.9008 32.0002 13.3008 32.0002H19.7008C20.1008 32.0002 20.4342 31.7169 20.4842 31.3169L21.0842 27.0836C22.0675 26.6836 22.9675 26.1502 23.7842 25.5169L27.7675 27.1169C28.1342 27.2502 28.5508 27.1169 28.7508 26.7502L31.9508 21.2169C32.1508 20.8502 32.0675 20.4336 31.7508 20.2002L28.4008 17.5669ZM16.5008 22.0002C13.2008 22.0002 10.5008 19.3002 10.5008 16.0002C10.5008 12.7002 13.2008 10.0002 16.5008 10.0002C19.8008 10.0002 22.5008 12.7002 22.5008 16.0002C22.5008 19.3002 19.8008 22.0002 16.5008 22.0002Z"
        fill="black"
      />
    </svg>
  );
};

export const MobilePhoneIcon = ({ className }: SVGIconPropType) => {
  return (
    <svg
      width="15"
      height="22"
      className={className}
      viewBox="0 0 15 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 0L12.5 0.01C13.6 0.01 14.5 0.9 14.5 2V20C14.5 21.1 13.6 22 12.5 22H2.5C1.4 22 0.5 21.1 0.5 20V2C0.5 0.9 1.4 0 2.5 0ZM2.5 18H12.5V4H2.5V18Z"
        fill="white"
      />
    </svg>
  );
};
