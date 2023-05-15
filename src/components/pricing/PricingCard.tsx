import React from 'react';
import Button from '../Button';
import { useMediaQuery } from 'react-responsive';

interface PricingCardProps {
  data: {
    title: string;
    description: string;
    cardColour: string;
  };
  price: number;
}

function PricingCard({ data, price }: PricingCardProps) {
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1099px)' })

  return (
    <div className={`pricing-card pricing-card_${data.cardColour}`}>
      <div className='pricing-card_main'>
        <h2 className='pricing-title'>{data.title}</h2>
        <p className='pricing-card_main_description'>{data.description}</p>
        {!isTablet && <div className='pricing-card_main_price'>
          <span className='price'>${price}.00</span>
          <p>per month</p>
        </div>}
        <Button
          text='PICK PLAN'
          colour={data.cardColour === "black" ? "white" : "black"}
          border={true}
        />
      </div>
      {isTablet && <div className='pricing-card_price'>
        <span className='price'>${price}.00</span>
        <p>per month</p>
      </div>}
    </div>
  );
}

export default PricingCard;