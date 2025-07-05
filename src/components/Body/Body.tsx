import { useState } from "react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { IconButton } from "@mui/material";
import type { Category } from "@/types";
import categoriesData from "@/data.json";
import CategoryCard from "@/components/CategoryCard/CategoryCard";

const categories: Category[] = categoriesData;

function Body() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  function handleNavigation(direction: 'left' | 'right') {
    setSelectedCategory(prev => {
      const current = prev ?? 0;
      if (direction === 'left') {
        return current === 0 ? categories.length - 1 : current - 1;
      } else {
        return current === categories.length - 1 ? 0 : current + 1;
      }
    });
  }

  return (
    <div className="flex flex-col" data-testid="body">
      <div className="flex items-center justify-center bg-pink-100">
        <IconButton onClick={() => handleNavigation('left')}>
          <KeyboardArrowLeftIcon />
        </IconButton>
        <h1 className="flex-1 text-center">
          Explore Accounts
        </h1>
        <IconButton onClick={() => handleNavigation('right')}>
          <KeyboardArrowRightIcon />
        </IconButton>
      </div>
      <div className="flex flex-wrap justify-around items-start m-4">
        {categories.map((cat, idx) => (
          <CategoryCard
            key={cat.name}
            category={cat}
            selected={selectedCategory === idx}
            onSelect={() =>
              setSelectedCategory(selectedCategory === idx ? null : idx)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Body;