import { RouterOutput } from "~/utils/trpc";

interface RestaurantFilterProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  categories: RouterOutput['category']['list']['categories'];
}

const RestaurantFilter = ({ selectedCategory, onCategoryChange, categories }: RestaurantFilterProps) => {
  return <div className="flex gap-4 my-12 flex-wrap">
    <button
      className={`px-4 py-2 mx-auto rounded-full ${selectedCategory === null
        ? 'bg-primary text-white'
        : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
        } whitespace-nowrap`}
      onClick={() => onCategoryChange(null)}
    >
      Entire
    </button>
    {categories.map((category) => (
      <button
        key={category.name}
        className={`px-4 py-2 mx-auto rounded-full ${selectedCategory === category.name
          ? 'bg-primary text-white'
          : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
          } whitespace-nowrap`}
        onClick={() => onCategoryChange(category.name)}
      >
        {category.name}
      </button>
    ))}
  </div>;
};

export default RestaurantFilter;
