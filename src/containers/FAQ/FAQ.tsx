import Minus from '@/utils/Icons/Minus';
import Plus from '@/utils/Icons/Plus';
import React from 'react';

const FAQ = () => {
  return (
    <section className="faq-container mb-[160px]">
      <p className="title-faq text-[40px] leading-[40px] font-secondary text-primary text-center max-w-[642px] mx-auto mb-[80px]">
        FAQs
      </p>
      <div className="list-faq">
        <div className="faq-answer-item pb-[40px] border-b border-b-[#FFFFFF1A]">
          <div className="flex justify-between mb-[32px]">
            <p className="text-primary font-primary text-[24px] leading-[32px]">
              01. What is a proposal investment?
            </p>
            <div className="bg-white w-[40px] h-[40px] rounded-[100%] flex items-center justify-center">
              <Minus />
            </div>
          </div>

          <p className="description-create-investment font-primary text-[16px] text-secondary leading-[24px] max-w-[1024px]">
            An investment club is a group of people who pool their capital and
            make investments together. Currently, Syndicate enables you to
            create Web3 Investment Clubs. Syndicate can also help you create
            legal entities for your investment club(s).
          </p>
        </div>

        <div className="faq-question-item flex justify-between pt-[44px] border-b border-b-[#FFFFFF1A] pb-[40px]">
          <p className="text-primary font-primary text-[24px] leading-[32px]">
            02. What are the criteria to create a club on Syndicate?
          </p>
          <div className="bg-[#555761] w-[40px] h-[40px] rounded-[100%] flex items-center justify-center">
            <Plus />
          </div>
        </div>
        <div className="faq-question-item flex justify-between pt-[44px] border-b border-b-[#FFFFFF1A] pb-[40px]">
          <p className="text-primary font-primary text-[24px] leading-[32px]">
            02. What are the criteria to create a club on Syndicate?
          </p>
          <div className="bg-[#555761] w-[40px] h-[40px] rounded-[100%] flex items-center justify-center">
            <Plus />
          </div>
        </div>
        <div className="faq-question-item flex justify-between pt-[44px] border-b border-b-[#FFFFFF1A] pb-[40px]">
          <p className="text-primary font-primary text-[24px] leading-[32px]">
            02. What are the criteria to create a club on Syndicate?
          </p>
          <div className="bg-[#555761] w-[40px] h-[40px] rounded-[100%] flex items-center justify-center">
            <Plus />
          </div>
        </div>
        <div className="faq-question-item flex justify-between pt-[44px] border-b border-b-[#FFFFFF1A] pb-[40px]">
          <p className="text-primary font-primary text-[24px] leading-[32px]">
            02. What are the criteria to create a club on Syndicate?
          </p>
          <div className="bg-[#555761] w-[40px] h-[40px] rounded-[100%] flex items-center justify-center">
            <Plus />
          </div>
        </div>
        <div className="faq-question-item flex justify-between pt-[44px]  pb-[40px] mb-[40px]">
          <p className="text-primary font-primary text-[24px] leading-[32px]">
            02. What are the criteria to create a club on Syndicate?
          </p>
          <div className="bg-[#555761] w-[40px] h-[40px] rounded-[100%] flex items-center justify-center">
            <Plus />
          </div>
        </div>
        <div className="button-create-investment max-w-[200px] mx-auto">
          <button className="py-[10px] px-[19px] bg-primary text-white text-center text-[18px] font-primary rounded-[5px]">
            See more
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
