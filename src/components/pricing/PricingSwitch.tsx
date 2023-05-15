interface PricingSwitchProps {
  subscriptionLength: string;
  handleToggleSubscription: (length: string | null) => void;
}

function PricingSwitch({
  subscriptionLength,
  handleToggleSubscription,
}: PricingSwitchProps) {
  return (
    <div className={`pricing-switch ${subscriptionLength} subscription-length`}>
      <span
        className="month"
        onClick={() => handleToggleSubscription("monthly")}
      >
        Monthly
      </span>
      <button
        className="pricing-switch_button"
        onClick={() => handleToggleSubscription(null)}
        aria-label={`click to show ${subscriptionLength} pricing`}
      >
        <span className="pricing-switch_button_toggle"></span>
      </button>
      <span className="year" onClick={() => handleToggleSubscription("yearly")}>
        Yearly
      </span>
    </div>
  );
}

export default PricingSwitch;
