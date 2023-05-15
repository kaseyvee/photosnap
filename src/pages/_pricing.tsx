import { useState } from "react";
import InviteBanner from "../components/InviteBanner";
import PricingCard from "../components/pricing/PricingCard";
import PricingSwitch from "../components/pricing/PricingSwitch";
import TitleCard from "../components/TitleCard";
import pricingData from "../helpers/data/pricingData";

function Pricing() {
  const [subscriptionLength, setSubscriptionLength] = useState("monthly");

  function handleToggleSubscription(length: string | null) {
    if (!length) return setSubscriptionLength(subscriptionLength === "monthly" ? "yearly" : "monthly");
    return setSubscriptionLength(length);
  }

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
          <PricingSwitch
            subscriptionLength={subscriptionLength}
            handleToggleSubscription={handleToggleSubscription}
          />
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