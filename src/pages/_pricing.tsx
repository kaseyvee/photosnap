import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import pricingData from "../helpers/data/pricingData";
import { features } from "../helpers/data/pricingData";

import TitleCard from "../components/TitleCard";
import PricingSwitch from "../components/pricing/PricingSwitch";
import PricingCard from "../components/pricing/PricingCard";
import InviteBanner from "../components/InviteBanner";
import useScrollToTop from "../helpers/useScrollToTop";
import FeatureRow from "../components/pricing/FeatureRow";

function Pricing() {
  // useScrollToTop();

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
      <li key={pricing.title + "pricing"}>
        <PricingCard
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

  const featureList = features.map((feature) => {
    const subscriptions: any = {};

    pricingData.pricing.map((subscription) => {
      if (subscription.features.includes(feature)) {
        subscriptions[subscription.title] = true;
      } else {
        subscriptions[subscription.title] = false;
      }
    });

    return <FeatureRow key={feature} feature={feature} data={subscriptions} />;
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
          <h3 className="comparisons">THE FEATURES</h3>
          <table>
            <colgroup span={3}></colgroup>
            <tbody>{featureList}</tbody>
          </table>
        </div>
      </div>
      <InviteBanner />
    </main>
  );
}

export default Pricing;
