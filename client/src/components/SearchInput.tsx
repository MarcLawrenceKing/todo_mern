import { useState } from "react";

import { DynamicIcon } from "lucide-react/dynamic";

const SearchInput = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="relative w-full max-w-md">
      <p className="text-sm md:text-base">SEARCH</p>
      <DynamicIcon
        name="search"
        className="absolute left-1/13 top-8/19 -translate-y-1/2 text-gray-400 md:left-1/34 md:top-10/25"
        size={14}
      />
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pl-6 pr-4 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none w-full text-xs md:w-3/4 md:text-sm"
      />
    </div>
  );
};

export default SearchInput;
