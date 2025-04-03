import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  onChange?: (value: string) => void;
  value?: string;
}

const SearchBar = ({ className, placeholder = "Search for the name of the restaurant", onChange, value }: SearchBarProps) => {
  const classes = classNames(
    'relative w-full',
    className
  )
  return (
    <div className={classes}>
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        className="w-full pl-10 pr-4 py-2.5 rounded-lg 
                 bg-[rgb(31,41,55)] 
                 text-gray-200 
                 placeholder-gray-400
                 border border-gray-600
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                 transition-all duration-200"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
