import React from 'react';
import {ClipPath, Defs, G, Path, Rect, Svg} from 'react-native-svg';

export const UserIcon = ({isActive}: {isActive: boolean}) => {
  return (
    <Svg width="24" height="22" viewBox="0 0 18 16" fill="none">
      <G clipPath="url(#clip0_11_24)">
        <Path
          opacity="0.962"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.92605 -0.00537226C8.27235 -0.00573528 8.61868 -0.00609834 8.96498 -0.00646136C10.6509 0.252569 11.7968 1.09202 12.4028 2.5119C12.9329 4.39326 12.2809 5.85271 10.4468 6.8903C9.25454 7.40757 8.03689 7.45831 6.79396 7.04248C5.00998 6.25483 4.18755 4.97492 4.32665 3.20278C4.54255 1.96212 5.26213 1.02675 6.48536 0.396685C6.94295 0.186869 7.42316 0.0528497 7.92605 -0.00537226ZM7.99404 0.914332C9.54014 0.813141 10.6523 1.37571 11.3305 2.60203C11.8589 4.0606 11.4076 5.21325 9.97676 6.06003C9.09727 6.45598 8.19244 6.50639 7.26228 6.21122C5.56524 5.41956 4.99983 4.2086 5.56602 2.57841C6.06062 1.65904 6.86994 1.10435 7.99404 0.914332Z"
          fill={isActive ? '#ffffff' : '#6B7280'}
        />
        <Path
          opacity="0.971"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.2037 15.1804C10.1092 15.1837 7.01474 15.1869 3.92029 15.1902C2.84949 15.0695 2.08374 14.5758 1.62303 13.7091C1.52147 13.4895 1.45421 13.2621 1.42123 13.0269C1.33002 11.8848 1.47408 10.7671 1.8534 9.67367C2.10249 8.97818 2.53197 8.38928 3.14183 7.90695C3.82879 7.44625 4.59943 7.26742 5.45374 7.37046C5.82269 7.55302 6.18039 7.75045 6.52681 7.96274C7.80559 8.618 9.10151 8.64631 10.4145 8.04767C10.822 7.81235 11.2351 7.58443 11.6538 7.36396C13.0279 7.24144 14.0729 7.70023 14.7888 8.74034C15.326 9.6397 15.6287 10.5987 15.6967 11.6174C15.7455 12.0926 15.746 12.5673 15.6982 13.0416C15.4308 14.2708 14.5992 14.9838 13.2037 15.1804ZM4.85141 8.24636C4.94145 8.2414 5.03084 8.24626 5.11954 8.26091C5.64104 8.57523 6.18875 8.85157 6.76259 9.08996C8.24443 9.5822 9.67427 9.48178 11.0521 8.78876C11.3647 8.61041 11.6773 8.43206 11.9899 8.25371C12.8337 8.24835 13.4652 8.5691 13.8845 9.21601C14.2993 9.89048 14.5459 10.6122 14.624 11.3812C14.6885 11.9152 14.7003 12.4493 14.6592 12.9833C14.4905 13.6379 14.0385 14.0488 13.3032 14.216C13.1039 14.2481 12.9028 14.2681 12.7 14.276C9.94073 14.2987 7.18139 14.3016 4.42205 14.2847C3.63346 14.3099 3.03551 14.0287 2.62817 13.441C2.55198 13.2885 2.49595 13.1304 2.4601 12.9664C2.36055 11.8454 2.52698 10.7574 2.95939 9.70218C3.18668 9.18408 3.5605 8.77323 4.08082 8.46969C4.33177 8.36731 4.58864 8.29286 4.85141 8.24636Z"
          fill={isActive ? '#ffffff' : '#6B7280'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_11_24">
          <Rect
            width="17.1592"
            height="15.1911"
            fill={isActive ? '#ffffff' : '#6B7280'}
            transform="translate(0 0.0179749) rotate(-0.0600625)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};