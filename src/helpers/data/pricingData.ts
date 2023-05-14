const features = [
  "UNLIMITED STORY POSTING",
  "UNLIMITED PHOTO UPLOAD",
  "EMBEDDING CUSTOM CONTENT",
  "CUSTOMIZE METADATA",
  "ADVANCED METRICS",
  "PHOTO DOWNLOADS",
  "SEARCH ENGINE INDEXING",
  "CUSTOM ANALYTICS"
];

const pricingData = {
  titleCard: {
    title: "PRICING",
    description: "Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.",
    image: "hero.jpg",
    cardColour: "black"
  },
  pricing: {
    basic: {
      title: "Basic",
      description: "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
      monthlyPrice: 19,
      yearlyPrice: 190,
      features: [...features.slice(0,1)]
    },
    pro: {
      title: "Pro",
      description: "More advanced features available. Recommended for photography veterans and professionals.",
      monthlyPrice: 39,
      yearlyPrice: 390,
      features: [...features.slice(0,3)]
    },
    business: {
      title: "Business",
      description: "Additional features available such as more detailed metrics. Recommended for business owners.",
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [...features]
    },
  }
};

export default pricingData;