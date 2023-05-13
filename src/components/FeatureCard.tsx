interface FeatureCardProps {
  data: {
    image: string;
    title: string;
    description: string;
  }
}

function FeatureCard({ data } : FeatureCardProps) {
  return (
    <div className="feature-card">
      <img src={`/assets/features/desktop/${data.image}`} alt="" />
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
}

export default FeatureCard;