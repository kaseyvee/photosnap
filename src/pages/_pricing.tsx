import { useState } from "react";
import InviteBanner from "../components/InviteBanner";
import PricingCard from "../components/pricing/PricingCard";
import TitleCard from "../components/TitleCard";
import pricingData from "../helpers/data/pricingData";

function Pricing() {
  const [subscriptionLength, setSubscriptionLength] = useState("monthly");

  const pricingList = pricingData.pricing.map(pricing => {
    return (
      <li>
        <PricingCard
          key={pricing.title}
          data={pricing}
          price={subscriptionLength === "monthly" ? pricing.monthlyPrice : pricing.yearlyPrice}
        />
      </li>
    )
  })

  return (
    <main className="pricing page">
      <TitleCard
        data={pricingData.titleCard}
        hero={true}
        imagePosition="right"
        page="pricing"
      />
      <div className="pricing_data">
        <div className="pricing_data_options">
          <div className="pricing_data_options_switch">

          </div>
          <ul>
            {pricingList}
          </ul>
        </div>
        <div className="pricing_data_comparison">

        </div>
      </div>
      <InviteBanner />
    </main>
  );
}

export default Pricing;