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
      <div className="feature-card_image-container">
        <img src={`/photosnap/assets/features/desktop/${data.image}`} alt="" />
      </div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
}

export default FeatureCard;