// SearchInput.js
import React, { useState, useMemo } from "react";

const SearchInput = ({ items, onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const trimmedSearchTerm = searchTerm.trim().toLowerCase();

  const searchKeys = useMemo(() => {
    if (!items || items.length === 0) return [];
    return Object.keys(items[0]);
  }, [items]);

  const filteredItems = useMemo(() => {
    if (!searchTerm) {
      return items; // Show all items when searchTerm is empty
    }
    return items.filter((item) =>
      searchKeys.some((key) =>
        String(item[key]).toLowerCase().includes(trimmedSearchTerm)
      )
    );
  }, [items, searchKeys, searchTerm, trimmedSearchTerm]);

  React.useEffect(() => {
    onSearchResults(filteredItems);
  }, [filteredItems, onSearchResults]);

  return (
    <input
      type="text"
      placeholder="Search here..."
      className="text-base leading-[22px] w-full text-[#6C757D] placeholder:text-[#6C757D] outline-none font-poppins py-[13px] px-1"
      value={searchTerm}
      onChange={handleSearchChange}
    />
  );
};

export default SearchInput;
