import FeatureCard from "../components/features/FeatureCard";
import InviteBanner from "../components/InviteBanner";
import TitleCard from "../components/TitleCard";
import featuresData from "../helpers/data/featuresData";
import useScrollToTop from "../helpers/useScrollToTop";

function Features() {
  useScrollToTop();

  const featuresList = featuresData.features.map((feature) => {
    return (
      <li key={feature.title + "feature"}>
        <FeatureCard data={feature} />
      </li>
    )
  });

  return (
    <main className="features page">
      <TitleCard
        data={featuresData.titleCard}
        hero={true}
        imagePosition="right"
        page="features"
      />
      <div className="features_features">
        <ul className="wrapper">{featuresList}</ul>
      </div>
      <InviteBanner />
    </main>
  );
}

export default Features;
