import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import type { Product } from "@/types";
import { getIconPath } from "@/utils/utils";

type ProductAccordionProps = {
  product: Product;
  expanded: boolean;
  onToggle: () => void;
};

function ProductAccordion({ product, expanded, onToggle }: ProductAccordionProps) {
  return (
    <div className="p-2 text-left">
    <div
        className="p-2 bg-white flex justify-between items-center cursor-pointer"
        onClick={e => {
          e.stopPropagation();
          onToggle();
        }}
      >
        {product.name}
        <span className="text-lg">
          {expanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </span>
      </div>
      {expanded && (
        <div className="bg-white flex py-1 px-3">
          <div className="flex items-center">
            <img src={getIconPath(product.icon)} alt={product.name} className="w-6 h-6" />
          </div>
          <div className="flex-1 px-4 flex items-center">
            {product.description}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductAccordion;
