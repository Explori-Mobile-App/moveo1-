import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Page } from './Router';

interface SearchSectionProps {
  onNavigate?: (page: Page, data?: any) => void;
}

export function SearchSection({ onNavigate }: SearchSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = [
    { type: 'place', title: 'Coastal Café', category: 'Restaurant' },
    { type: 'place', title: 'Mountain View Hotel', category: 'Hotel' },
    { type: 'event', title: 'City Marathon 2025', category: 'Fitness' },
    { type: 'event', title: 'Spring Food Festival', category: 'Food' },
  ];

  const filteredSuggestions = suggestions.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setShowSuggestions(query.length > 0);
  };

  const handleSuggestionClick = (suggestion: any) => {
    setSearchQuery(suggestion.title);
    setShowSuggestions(false);
    // Navigate to appropriate detail page
    if (suggestion.type === 'place') {
      onNavigate?.('PlaceDetail', suggestion);
    } else {
      onNavigate?.('EventDetail', suggestion);
    }
  };

  return (
    <div className="px-6 pb-6 relative" data-bravo="[container]">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl -z-10"></div>
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search places, events & adventures..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setShowSuggestions(searchQuery.length > 0)}
          className="w-full pl-12 pr-12 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 text-slate-900 placeholder-slate-500 shadow-sm focus:shadow-lg focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200"
          data-bravo="[input]"
        />
        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery('');
              setShowSuggestions(false);
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Search Suggestions */}
      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className="absolute top-full left-6 right-6 mt-2 bg-white/95 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-xl z-50 max-h-64 overflow-y-auto">
          {filteredSuggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full px-4 py-4 text-left hover:bg-slate-50/80 border-b border-slate-100 last:border-b-0 first:rounded-t-2xl last:rounded-b-2xl transition-all duration-150"
              data-bravo="[button]"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm">
                  {suggestion.type === 'place' ? '📍' : '🎉'}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-slate-900 text-sm">{suggestion.title}</p>
                  <p className="text-xs text-slate-500">{suggestion.category}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}