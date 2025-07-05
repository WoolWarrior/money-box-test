import { useState } from "react";
import type { Category } from "@/types";
import ProductAccordion from "@/components/ProductAccordion/ProductAccordion";

type CategoryCardProps = {
  category: Category;
  selected: boolean;
  onSelect: () => void;
};

function CategoryCard({ category, selected, onSelect }: CategoryCardProps) {
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);

  return (
    <div
      className={`m-2 w-60 border border-gray-300 flex flex-col items-center justify-center cursor-pointer ${selected ? 'bg-pink-100' : ''}`}
      data-testid="category-card"
      data-selected={selected}
      onClick={() => {
        setExpandedProduct(null);
        onSelect();
      }}
    >
      <div className="p-3 w-full">{category.name}</div>
      {selected && (
        <div className="w-full border-t border-gray-300">
          {category.products.map((prod, pidx) => (
            <ProductAccordion
              key={prod.name}
              product={prod}
              expanded={expandedProduct === pidx}
              onToggle={() =>
                setExpandedProduct(expandedProduct === pidx ? null : pidx)
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryCard;