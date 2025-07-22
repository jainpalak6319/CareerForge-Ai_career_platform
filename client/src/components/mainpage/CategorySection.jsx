import React, { useState } from 'react';

const CategorySection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { name: "Technology", icon: "💻" },
    { name: "Finance", icon: "💰" },
       { name: "Healthcare", icon: "🏥" },
    { name: "Marketing", icon: "📊" },
    { name: "Education", icon: "🎓" },
    { name: "Design", icon: "🎨" },
    { name: "Sales", icon: "📈" },
    { name: "Engineering", icon: "⚙️" },
    { name: "Legal", icon: "⚖️" },
    { name: "Consulting", icon: "💼" },
    { name: "Human Resources", icon: "👥" },
    { name: "Media", icon: "📺" },
    { name: "Retail", icon: "🛍️" },
    { name: "Hospitality", icon: "🏨" }
  ];

  return (
    <section className="category-section" id="categories">
      <h2>Explore Career Categories</h2>
      <div className="category-grid">
        {categories.map((category, i) => (
          <div 
            key={i}
            className={`category-card ${selectedCategory === category.name ? 'highlight' : ''}`}
            onClick={() => setSelectedCategory(category.name)}
          >
            <div className="icon">{category.icon}</div>
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;