import { ReactComponent as Check } from "../../assets/check.svg";

interface FeatureRowProps {
  data: {
    [otherOptions: string]: boolean;
  };
  feature: string;
}

function FeatureRow({ data, feature }: FeatureRowProps) {
  const subscriptionTypes = Object.keys(data).map((subscriptionType) => {
    return (
      <th
        key={subscriptionType + feature}
        className="compare-subscription"
      >
        {subscriptionType.toUpperCase()}
      </th>
    )
  });

  const subscriptionFeatures = Object.values(data).map(
    (subscriptionFeature, i) => {
      return <td key={feature + i}>{subscriptionFeature && <Check />}</td>;
    }
  );

  return (
    <>
      <tr>
        <th colSpan={3} scope="colgroup" className="comparisons">
          {feature}
        </th>
      </tr>
      <tr className="subscription-types">{subscriptionTypes}</tr>
      <tr className="subscription-features">{subscriptionFeatures}</tr>
    </>
  );
}

export default FeatureRow;
