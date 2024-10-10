import React from 'react';
interface IconProps {
  className: string;
}
const TelegramIcon = (props: IconProps) => {
  return (
    <>
      <svg
        width="23"
        height="19"
        viewBox="0 0 23 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M22.4975 1.96905L19.2169 17.4652C18.9694 18.5589 18.324 18.8311 17.4068 18.3158L12.4083 14.6265L9.99638 16.95C9.72947 17.2173 9.50624 17.4409 8.99183 17.4409L9.35095 12.3419L18.6152 3.95711C19.018 3.59741 18.5278 3.39812 17.9891 3.75782L6.53626 10.9809L1.60569 9.43521C0.533198 9.09981 0.513786 8.36097 1.82893 7.84573L21.1144 0.403885C22.0074 0.0684917 22.7887 0.603177 22.4975 1.96905Z"
          fill="black"
        />
      </svg>
    </>
  );
};

export default TelegramIcon;
