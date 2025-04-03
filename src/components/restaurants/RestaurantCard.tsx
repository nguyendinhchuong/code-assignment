"use client"
import { StarIcon, HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';
import { formatPriceRange } from '~/utils/formatPriceRange';
import { ImageSlider } from '../common/ImageSlider';

interface Props {
  restaurant: any;
  onFavorite: () => void;
}

export const RestaurantCard = ({ restaurant, onFavorite }: Props) => {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="relative h-48 rounded-lg overflow-hidden">
        <ImageSlider images={restaurant.images} alt={restaurant.name} />
        <button
          className="absolute top-4 right-4"
          onClick={onFavorite}
        >
          {restaurant.is_favorite ? (
            <HeartIconSolid
              className={`w-6 h-6 text-red-500`}
            />
          ) : (
            <HeartIconOutline
              className={`w-6 h-6 text-white`}
            />
          )}
        </button>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold  font-bold">{restaurant.name}</h3>
          <div className="flex items-center">
            <StarIcon className="w-5 h-5 text-yellow-400" />
            <span className="ml-1 ">{restaurant.rating}</span>
            <span className="text-gray-500 ml-1">({restaurant.rating_count})</span>
          </div>
        </div>

        <p className="mt-2">{restaurant.desc}</p>

        <div className="mt-4 text-sm text-gray-500">
          <span className="uppercase">{restaurant.city}</span> · {restaurant.category.name} · {formatPriceRange(restaurant.price_range)}
        </div>
      </div>
    </div>
  );
}; 