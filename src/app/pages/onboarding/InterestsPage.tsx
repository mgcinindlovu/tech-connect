import React, { useState } from 'react';
import InputFieldContainer from './components/InputFieldContainer';
 import InputField from './components/InputField'
 import CategoryButton from './components/CategoryButton'
 import GetStartedButton  from './components/GetStartedButton';

interface InterestsPageProps {
  onContinue: () => void;
}

const InterestsPage: React.FC<InterestsPageProps> = ({ onContinue }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  return (
    <div>
      <h1>Interests</h1>
      <div>
        {['Software Dev', 'Data Science', 'Web Developer'].map((category) => (
          <CategoryButton
            key={category}
            isSelected={selectedCategories.includes(category)}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </CategoryButton>
        ))}
      </div>
      <GetStartedButton onClick={onContinue}>Get Started</GetStartedButton>
    </div>
  );
};

export default InterestsPage;