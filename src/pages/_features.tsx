import FeatureCard from "../components/FeatureCard";
import InviteBanner from "../components/InviteBanner";
import TitleCard from "../components/TitleCard";
import featuresData from "../helpers/data/featuresData";
import useScrollToTop from "../helpers/useScrollToTop";

function Features() {
  useScrollToTop();

  const featuresList = featuresData.features.map(feature => {
    return (
      <FeatureCard
        key={feature.title + "feature"}
        data={feature}
      />
    )
  })

  return (
    <main className="features page">
      <TitleCard
        data={featuresData.titleCard}
        hero={true}
        imagePosition="right"
        page="features"
      />
      <div className="features_features">
        <div className="wrapper">
          {featuresList}
        </div>
      </div>
      <InviteBanner />
    </main>
  );
}

export default Features;