import { useState } from "react";
import { Search } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";

const SearchInput = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="relative w-full max-w-md">
      <p className="text-sm">SEARCH</p>
      <DynamicIcon
        name="search"
        className="absolute left-1/13 top-7/16 -translate-y-1/2 text-gray-400"
        size={14}
      />
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pl-6 pr-4 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none w-full text-sm"
      />
    </div>
  );
};

export default SearchInput;
