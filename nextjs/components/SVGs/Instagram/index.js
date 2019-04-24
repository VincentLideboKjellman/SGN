import React from 'react';
import styled from 'styled-components';

const StyledSvg = styled.svg`
  /* width: 6%; */
  height: 100%;
  fill: #fff;
  margin: ${props => props.margin || '0 1rem'};
`;

const Instagram = props => {
  return (
    <StyledSvg
      {...props}
      width="40"
      height="38"
      viewBox="0 0 40 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M19.5429 0C14.2337 0 13.5709 0.02375 11.4863 0.114C9.405 0.209 7.98814 0.52725 6.74229 0.9975C5.45734 1.482 4.3662 2.13275 3.27994 3.18883C2.19369 4.24492 1.52271 5.30417 1.026 6.555C0.542314 7.76625 0.213343 9.14375 0.117257 11.1673C0.0195429 13.1939 0 13.8383 0 19C0 24.1617 0.0244286 24.8061 0.117257 26.8328C0.214971 28.8547 0.542314 30.2338 1.026 31.445C1.52434 32.6927 2.19369 33.7551 3.27994 34.8112C4.3662 35.8657 5.45571 36.5196 6.74229 37.0025C7.98977 37.4712 9.40663 37.7926 11.4863 37.886C13.5709 37.981 14.2337 38 19.5429 38C24.852 38 25.5148 37.9762 27.5994 37.886C29.6791 37.791 31.0976 37.4712 32.3434 37.0025C33.6267 36.518 34.7195 35.8657 35.8058 34.8112C36.8904 33.7551 37.563 32.6974 38.0597 31.445C38.5418 30.2338 38.8724 28.8547 38.9685 26.8328C39.0662 24.8061 39.0857 24.1617 39.0857 19C39.0857 13.8383 39.0613 13.1939 38.9685 11.1673C38.8707 9.14533 38.5418 7.76467 38.0597 6.555C37.5614 5.30575 36.8904 4.24492 35.8058 3.18883C34.7195 2.13275 33.6316 1.48042 32.3434 0.9975C31.0976 0.52725 29.6791 0.207417 27.5994 0.114C25.5148 0.019 24.852 0 19.5429 0ZM19.5429 3.42C24.7592 3.42 25.3813 3.44533 27.4414 3.53242C29.3469 3.6195 30.381 3.92667 31.0683 4.1895C31.9835 4.53308 32.6317 4.94475 33.3189 5.60817C34.0013 6.27317 34.4247 6.90492 34.7781 7.79475C35.0452 8.46292 35.3644 9.46833 35.4507 11.3208C35.5436 13.3253 35.5647 13.927 35.5647 19C35.5647 24.073 35.5403 24.6763 35.4442 26.6792C35.3449 28.5317 35.0273 29.5371 34.7586 30.2052C34.3938 31.0951 33.9785 31.7253 33.2945 32.3934C32.6121 33.0568 31.9526 33.4685 31.0471 33.8121C30.3631 34.0718 29.3127 34.3821 27.4072 34.466C25.3324 34.5563 24.7217 34.5768 19.494 34.5768C14.2647 34.5768 13.6539 34.5531 11.5808 34.4597C9.67371 34.3631 8.62329 34.0543 7.93929 33.7931C7.01263 33.4384 6.37586 33.0347 5.69349 32.3697C5.00786 31.7063 4.56977 31.065 4.22777 30.1847C3.95906 29.5197 3.64311 28.4984 3.54377 26.6459C3.47049 24.6509 3.44443 24.035 3.44443 18.9762C3.44443 13.9159 3.47049 13.2984 3.54377 11.2797C3.64311 9.42717 3.95906 8.4075 4.22777 7.7425C4.56977 6.84 5.00786 6.2225 5.69349 5.55592C6.37586 4.8925 7.01263 4.465 7.93929 4.13408C8.62329 3.87125 9.65092 3.5625 11.5563 3.4675C13.6328 3.39625 14.2435 3.3725 19.4696 3.3725L19.5429 3.42ZM19.5429 9.2435C13.9976 9.2435 9.5076 13.6135 9.5076 19C9.5076 24.3913 14.0025 28.7565 19.5429 28.7565C25.0881 28.7565 29.5781 24.3865 29.5781 19C29.5781 13.6088 25.0833 9.2435 19.5429 9.2435ZM19.5429 25.3333C15.9437 25.3333 13.0286 22.4992 13.0286 19C13.0286 15.5008 15.9437 12.6667 19.5429 12.6667C23.142 12.6667 26.0571 15.5008 26.0571 19C26.0571 22.4992 23.142 25.3333 19.5429 25.3333ZM32.3206 8.85875C32.3206 10.1175 31.2686 11.1388 29.9755 11.1388C28.6808 11.1388 27.6303 10.1159 27.6303 8.85875C27.6303 7.60158 28.6824 6.58033 29.9755 6.58033C31.2669 6.57875 32.3206 7.60158 32.3206 8.85875Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="39.0857" height="38" fill="white" />
        </clipPath>
      </defs>
    </StyledSvg>
  );
};

export default Instagram;
