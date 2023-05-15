import React from 'react';
import Button from '../Button';
import { useMediaQuery } from 'react-responsive';

function PricingCard(props) {
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1099px)' })

  return (
    <div className='pricing-card pricing-card_white'>
      <div className='pricing-card_main'>
        <h2 className='pricing-title'>
          Basic
        </h2>
        <p className='pricing-card_main_description'>Includes basic usage of our platform. Recommended for new and aspiring photographers.</p>
        {!isTablet && <div className='pricing-card_main_price'>
          <span className='price'>$19.00</span>
          <p>per month</p>
        </div>}
        <Button
          text='PICK PLAN'
          colour='black'
          border={true}
        />
      </div>
      {isTablet && <div className='pricing-card_price'>
        <span className='price'>$19.00</span>
        <p>per month</p>
      </div>}
    </div>
  );
}

export default PricingCard;