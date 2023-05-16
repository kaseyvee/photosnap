import { ReactComponent as Check } from "../../assets/check.svg";

interface FeatureRowProps {
  data: {
    [otherOptions: string]: boolean;
  };
  feature: string;
}

function FeatureRow({ data, feature }: FeatureRowProps) {
  const subscriptionTypes = Object.keys(data).map((subscriptionType) => {
    return <th key={subscriptionType + feature}>{subscriptionType}</th>;
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
      <tr>{subscriptionTypes}</tr>
      <tr>{subscriptionFeatures}</tr>
    </>
  );
}

export default FeatureRow;
