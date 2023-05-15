import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import pricingData from "../helpers/data/pricingData";

import TitleCard from "../components/TitleCard";
import PricingSwitch from "../components/pricing/PricingSwitch";
import PricingCard from "../components/pricing/PricingCard";
import InviteBanner from "../components/InviteBanner";

function Pricing() {
  const [subscriptionLength, setSubscriptionLength] = useState("monthly");
  const isMobile = useMediaQuery({ query: "(max-width: 767px" });

  function handleToggleSubscription(length: string | null) {
    if (!length)
      return setSubscriptionLength(
        subscriptionLength === "monthly" ? "yearly" : "monthly"
      );
    return setSubscriptionLength(length);
  }

  const pricingList = pricingData.pricing.map((pricing) => {
    return (
      <li>
        <PricingCard
          key={pricing.title}
          data={pricing}
          price={
            subscriptionLength === "monthly"
              ? pricing.monthlyPrice
              : pricing.yearlyPrice
          }
        />
      </li>
    );
  });

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
          <ul>{pricingList}</ul>
        </div>
        <div className="pricing_data_comparison">
          {!isMobile && <h2 className="header-large">COMPARE</h2>}
        </div>
      </div>
      <InviteBanner />
    </main>
  );
}

export default Pricing;
