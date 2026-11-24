import { Search, X } from 'lucide-react';
import './SearchBar.css';

// These controlled inputs display and update values owned by the parent.
function SearchBar({ searchText, onSearchChange, category, onCategoryChange, sortOrder, onSortChange, onClear }) {
  return (
    <section className="search-panel" aria-label="Search and filter products">
      <label className="search-field">
        <Search size={19} aria-hidden="true" /><span className="sr-only">Search products</span>
        <input type="search" placeholder="Search the catalog..." value={searchText} onChange={(event) => onSearchChange(event.target.value)} />
        {searchText && <button className="search-field__clear" type="button" aria-label="Clear search text" onClick={() => onSearchChange('')}><X size={16} /></button>}
      </label>
      <label className="select-field"><span>Category</span>
        <select value={category} onChange={(event) => onCategoryChange(event.target.value)}>
          <option value="All">All categories</option><option value="Electronics">Electronics</option><option value="Books">Books</option><option value="School Supplies">School Supplies</option><option value="Accessories">Accessories</option>
        </select>
      </label>
      <label className="select-field select-field--sort"><span>Sort by</span>
        <select value={sortOrder} onChange={(event) => onSortChange(event.target.value)}>
          <option value="default">Featured</option><option value="low-high">Price: Low to High</option><option value="high-low">Price: High to Low</option>
        </select>
      </label>
      <button className="clear-filters" type="button" onClick={onClear}>Clear filters</button>
    </section>
  );
}
export default SearchBar;
