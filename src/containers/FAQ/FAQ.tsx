import Minus from '@/utils/Icons/Minus';
import Plus from '@/utils/Icons/Plus';
import React from 'react';

const FAQ = () => {
  return (
    <section className="faq-container xl:max-w-[1200px]  lg:max-w-[900px] lg:flex-col lg:items-center lg:justify-between lg:gap-[28px]  sm:max-w-[300px]  mx-auto mb-[160px]">
      <p className="title-faq xl:text-[40px] xl:leading-[1] font-secondary text-primary text-center xl:max-w-[642px] mx-auto mb-[80px] sm:text-center sm:mb-[16px] sm:text-[22px]">
        FAQs
      </p>
      <div className="list-faq">
        <div className="faq-answer-item xl:pb-[40px] xl:border-b xl:border-b-[#FFFFFF1A]">
          <div className="flex justify-between mb-[32px]">
            <p className="text-primary font-primary xl:text-[24px] leading-[1.3] lg:text-[18px] sm:text-[12px]">
              01. What is a proposal investment?
            </p>
            <div className="bg-white xl:w-[40px] xl:h-[40px] rounded-[100%] flex items-center justify-center sm:w-[30px] sm:h-[30px]">
              <Minus className="size-8 text-[#1A1A27] sm:size-4" />
            </div>
          </div>

          <p className="description-create-investment font-primary xl:text-[16px] text-secondary xl:leading-[1.5] xl:max-w-[1024px] lg:text-[14px] lg:max-w-[850px] sm:text-[12px] sm:max-w-[270px] ">
            An investment club is a group of people who pool their capital and
            make investments together. Currently, Syndicate enables you to
            create Web3 Investment Clubs. Syndicate can also help you create
            legal entities for your investment club(s).
          </p>
        </div>

        <div className="faq-question-item flex justify-between xl:pt-[44px] xl:border-b xl:border-b-[#FFFFFF1A] xl:pb-[40px] sm:pt-[20px] sm:pb-[20px]">
          <p className="text-primary font-primary xl:text-[24px] leading-[1.4] lg:text-[18px] sm:text-[12px] sm:max-w-[80%]">
            02. What are the criteria to create a club on Syndicate?
          </p>
          <div className="bg-[#555761] xl:w-[40px] xl:h-[40px] rounded-[100%] sm:flex sm:items-center sm:justify-center sm:w-[30px] sm:h-[30px]">
            <Plus className="size-8 text-[#FAFAFD] sm:size-4" />
          </div>
        </div>
        <div className="faq-question-item flex justify-between xl:pt-[44px] xl:border-b xl:border-b-[#FFFFFF1A] xl:pb-[40px] sm:pt-[20px] sm:pb-[20px]">
          <p className="text-primary font-primary xl:text-[24px] leading-[1.4] lg:text-[18px] sm:text-[12px] sm:max-w-[80%]">
            02. What are the criteria to create a club on Syndicate?
          </p>
          <div className="bg-[#555761] xl:w-[40px] xl:h-[40px] rounded-[100%] sm:flex sm:items-center sm:justify-center sm:w-[30px] sm:h-[30px]">
            <Plus className="size-8 text-[#FAFAFD] sm:size-4" />
          </div>
        </div>
        <div className="faq-question-item flex justify-between xl:pt-[44px] xl:border-b xl:border-b-[#FFFFFF1A] xl:pb-[40px] sm:pt-[20px]  sm:pb-[20px]">
          <p className="text-primary font-primary xl:text-[24px] leading-[1.4] lg:text-[18px] sm:text-[12px] sm:max-w-[80%]">
            02. What are the criteria to create a club on Syndicate?
          </p>
          <div className="bg-[#555761] xl:w-[40px] xl:h-[40px] rounded-[100%] sm:flex sm:items-center sm:justify-center sm:w-[30px] sm:h-[30px]">
            <Plus className="size-8 text-[#FAFAFD] sm:size-4" />
          </div>
        </div>
        <div className="faq-question-item flex justify-between xl:pt-[44px] xl:border-b xl:border-b-[#FFFFFF1A] xl:pb-[40px] sm:pt-[20px] sm:pb-[20px]">
          <p className="text-primary font-primary xl:text-[24px] leading-[1.4] lg:text-[18px] sm:text-[12px] sm:max-w-[80%]">
            02. What are the criteria to create a club on Syndicate?
          </p>
          <div className="bg-[#555761] xl:w-[40px] xl:h-[40px] rounded-[100%] sm:flex sm:items-center sm:justify-center sm:w-[30px] sm:h-[30px]">
            <Plus className="size-8 text-[#FAFAFD] sm:size-4" />
          </div>
        </div>
        <div className="faq-question-item flex justify-between xl:pt-[44px] xl:border-b xl:border-b-[#FFFFFF1A] xl:pb-[40px] sm:pt-[20px] sm:pb-[20px]">
          <p className="text-primary font-primary xl:text-[24px] leading-[1.4] lg:text-[18px] sm:text-[12px] sm:max-w-[80%]">
            02. What are the criteria to create a club on Syndicate?
          </p>
          <div className="bg-[#555761] xl:w-[40px] xl:h-[40px] rounded-[100%] sm:flex sm:items-center sm:justify-center sm:w-[30px] sm:h-[30px]">
            <Plus className="size-8 text-[#FAFAFD] sm:size-4" />
          </div>
        </div>

        <div className="button-create-investment  xl:max-w-[200px] mx-auto lg:max-w-[150px] sm:max-w-[100px] mt-[50px]">
          <button className=" xl:py-[10px] xl:px-[19px] bg-primary text-primary text-center xl:text-[18px] font-primary rounded-[5px] lg:text-[16px] lg:py-[10px] lg:px-[18px]  sm:text-[12px] sm:py-[6px] sm:px-[16px] w-full">
            See more
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
