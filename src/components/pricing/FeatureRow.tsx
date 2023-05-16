import checkmark from "../../assets/check.svg";

interface FeatureRowProps {
  data: {
    [otherOptions: string]: boolean;
  };
  feature: string;
  isMobile?: boolean;
}

function FeatureRow({ data, feature, isMobile }: FeatureRowProps) {
  const subscriptionTypes = Object.keys(data).map((subscriptionType) => {
    return (
      <th key={subscriptionType + feature} className="compare-subscription">
        {subscriptionType.toUpperCase()}
      </th>
    );
  });

  const subscriptionFeatures = Object.values(data).map(
    (subscriptionFeature, i) => {
      return (
        <td key={feature + i}>
          {subscriptionFeature && (
            <img src={checkmark} alt={`checkmark for ${feature}`} />
          )}
        </td>
      );
    }
  );

  return (
    <>
      {isMobile ? (
        <>
          <tr>
            <th colSpan={3} scope="colgroup" className="comparisons">
              {feature}
            </th>
          </tr>
          <tr className="subscription-types">{subscriptionTypes}</tr>
          <tr className="subscription-features">{subscriptionFeatures}</tr>
        </>
      ) : (
        <tr>
          <td>{feature}</td>
          {subscriptionFeatures}
        </tr>
      )}
    </>
  );
}

export default FeatureRow;
