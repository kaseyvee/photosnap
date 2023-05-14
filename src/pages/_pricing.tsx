import InviteBanner from "../components/InviteBanner";
import TitleCard from "../components/TitleCard";
import pricingData from "../helpers/data/pricingData";

function Pricing() {
  return (
    <main className="pricing page">
      <TitleCard
        data={pricingData.titleCard}
        hero={true}
        imagePosition="right"
        page="pricing"
      />
      <InviteBanner />
    </main>
  );
}

export default Pricing;