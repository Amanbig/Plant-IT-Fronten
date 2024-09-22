// utils/recommendation.js
export const recommendProperties = (properties, currentProperty) => {
    return properties.filter(property => {
      // Basic similarity check (customize this as needed)
      return (
        property._id !== currentProperty._id &&
        Math.abs(property.price - currentProperty.price) < 50000 && // Price similarity
        property.location === currentProperty.location // Location similarity
      );
    });
  };
  