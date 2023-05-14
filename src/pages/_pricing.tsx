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
      <div className="pricing_data">
        <div className="pricing_data_options">

        </div>
        <div className="pricing_data_comparison">

        </div>
      </div>
      <InviteBanner />
    </main>
  );
}

export default Pricing;