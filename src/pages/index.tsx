import { RestaurantList } from "~/components/restaurants/RestaurantList";
import { trpc } from '~/utils/trpc';
import RestaurantFilter from "~/components/restaurants/RestaurantFilter";
import SearchBar from "~/components/restaurants/SearchBar";
import { useState } from "react";
import { DEBOUNCE_TIME, useDebounce } from "~/hooks/useDebounce";
import { NextPageWithLayout } from "./_app";

const RestaurantsPage: NextPageWithLayout = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const debouncedSearchQuery = useDebounce(searchQuery, DEBOUNCE_TIME); // 500ms delay
  const restaurantsQuery = trpc.restaurants.list.useQuery({ name: debouncedSearchQuery, categoryName: selectedCategory ?? undefined });
  const categoriesQuery = trpc.category.list.useQuery();
  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <SearchBar
        className="my-12"
        onChange={setSearchQuery}
        value={searchQuery}
      />
      <RestaurantFilter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        categories={categoriesQuery.data?.categories || []}
      />

      {restaurantsQuery.error && (
        <div className="text-red-500">Error: {restaurantsQuery.error.message}</div>
      )}

      {restaurantsQuery.status === 'pending' && (
        <div className="text-gray-400">Loading...</div>
      )}

      {restaurantsQuery.status === 'success' && (
        <RestaurantList restaurants={restaurantsQuery.data?.restaurants || []} />
      )}
    </>
  );
}

export default RestaurantsPage;