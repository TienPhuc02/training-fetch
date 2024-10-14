import DiscordIcon from '@/utils/Icons/DiscordIcon';
import TelegramIcon from '@/utils/Icons/TelegramIcon';
import TwitterIcon from '@/utils/Icons/TwitterIcon';
import React from 'react';

const SocialMediaIcons = () => {
  const icons = [
    {
      component: DiscordIcon,
      className:
        'bg-white xl:w-[40px] xl:h-[40px] xl:py-[10px] xl:px-[7px] rounded-[100%] sm:w-[28px] sm:h-[28px] sm:py-[5px] sm:px-[4px]'
    },
    {
      component: TelegramIcon,
      className:
        'bg-white xl:w-[40px] xl:h-[40px] xl:py-[10px] xl:px-[7px] rounded-[100%] sm:w-[28px] sm:h-[28px] sm:py-[5px] sm:px-[4px]'
    },
    {
      component: TwitterIcon,
      className:
        'bg-white xl:w-[40px] xl:h-[40px] xl:py-[10px] xl:px-[7px] rounded-[100%] sm:w-[28px] sm:h-[28px] sm:py-[5px] sm:px-[4px]'
    }
  ];

  return (
    <>
      {icons.map((icon, index) => {
        const IconComponent = icon.component;
        return <IconComponent key={index} className={icon.className} />;
      })}
    </>
  );
};

export default SocialMediaIcons;
