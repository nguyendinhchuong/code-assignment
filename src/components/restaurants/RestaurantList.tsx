import { RestaurantCard } from './RestaurantCard';
import type { RouterOutput } from '~/utils/trpc';
import { trpc } from '~/utils/trpc';

interface RestaurantListProps {
  restaurants: RouterOutput['restaurants']['list']['restaurants'];
}

export const RestaurantList = ({ restaurants }: RestaurantListProps) => {
  const utils = trpc.useUtils();
  const toggleFavoriteMutation = trpc.addFavorite.toggle.useMutation({
    onSuccess: () => {
      // Invalidate and refetch the restaurants list query
      utils.restaurants.list.invalidate();
    },
  });

  const handleToggleFavorite = (restaurantId: string, currentFavoriteStatus: boolean) => {
    try {
      toggleFavoriteMutation.mutate({
        restaurantId,
        isFavorite: !currentFavoriteStatus,
      });
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            onFavorite={() => handleToggleFavorite(restaurant.id, restaurant.is_favorite)}
          />
        ))}
      </div>
    </div>
  );
}; 