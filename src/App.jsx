import { useEffect, useState } from 'react';
import { ArrowDownRight, ShoppingBag, Sparkles } from 'lucide-react';
import cvsuLogo from './assets/cvsu-logo.png';
import cvsuBanner from './assets/cvsu-values-banner.png';
import ProductCard from './components/ProductCard.jsx';
import SearchBar from './components/SearchBar.jsx';
import products from './data/products.js';
import './App.css';

function App() {
  // Keep cart and filter values in the parent so child controls stay reusable.
  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState('');
  const [searchText, setSearchText] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('default');

  // Wait for typing to pause, and cancel the old timer whenever the text changes.
  useEffect(() => {
    const timer = window.setTimeout(() => setDebouncedSearch(searchText), 300);
    return () => window.clearTimeout(timer);
  }, [searchText]);

  // Filter a copy so sorting never changes the original product data.
  const normalizedSearch = debouncedSearch.trim().toLowerCase();
  let filteredProducts = [...products].filter((product) => {
    const matchesTitle = product.title.toLowerCase().includes(normalizedSearch);
    const matchesCategory = category === 'All' || product.category === category;
    return matchesTitle && matchesCategory;
  });
  if (sortOrder === 'low-high') filteredProducts.sort((a, b) => a.price - b.price);
  if (sortOrder === 'high-low') filteredProducts.sort((a, b) => b.price - a.price);

  // Keep the browser tab title in sync with the number of matching products.
  useEffect(() => {
    document.title = `CvSU Mini Store (${filteredProducts.length} results)`;
  }, [filteredProducts.length]);

  function handleAddToCart(title) {
    setCartCount((count) => count + 1);
    setLastAdded(title);
  }

  function clearFilters() {
    setSearchText('');
    setDebouncedSearch('');
    setCategory('All');
    setSortOrder('default');
  }

  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="CvSU Mini Store home">
          <img className="brand__logo" src={cvsuLogo} alt="Cavite State University emblem" />
          <span>CvSU <b>MINI STORE</b></span>
        </a>
        <a className="header-link" href="#catalog">Explore the catalog <ArrowDownRight size={16} /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero__copy">
          <div className="eyebrow"><Sparkles size={14} /> THE CAMPUS ESSENTIALS EDIT</div>
          <h1>Good finds.<br /><em>Good days.</em></h1>
          <p>Thoughtful little essentials for studying, making, and everything in between.</p>
          <a className="hero__cta" href="#catalog">Shop the collection <span>↓</span></a>
        </div>
        <div className="hero__art">
          <img className="hero__banner" src={cvsuBanner} alt="CvSU values: Truth, Excellence, Service" />
        </div>
      </section>

      <section className="catalog" id="catalog">
        <div className="section-heading">
          <div><span className="eyebrow">A LITTLE SOMETHING FOR EVERY DAY</span><h2>Find your next favorite.</h2></div>
          <div className="cart-note" aria-live="polite">
            <span className="cart-note__icon"><ShoppingBag size={17} /></span>
            {cartCount === 0 ? <span>Your cart is empty.</span> : <span>Items added to cart: <strong>{cartCount}</strong><small>Last added: {lastAdded}</small></span>}
          </div>
        </div>

        <SearchBar
          searchText={searchText}
          onSearchChange={setSearchText}
          category={category}
          onCategoryChange={setCategory}
          sortOrder={sortOrder}
          onSortChange={setSortOrder}
          onClear={clearFilters}
        />

        <div className="results-line" aria-live="polite">
          <span>Showing <strong>{filteredProducts.length}</strong> of {products.length} products</span>
          <span>CURATED FOR CAMPUS LIFE</span>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {/* Render each result with a stable key and optional badge content. */}
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} onAddToCart={handleAddToCart}>
                {product.id === 1 && <span className="badge badge--new">New</span>}
                {product.id === 5 && <span className="badge badge--favorite">Student fave</span>}
                {product.id === 8 && <span className="badge badge--sale">Popular</span>}
              </ProductCard>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span className="empty-state__icon">⌕</span>
            <h3>No products found.</h3>
            <p>Try a different keyword or category.</p>
            <button type="button" onClick={clearFilters}>Clear all filters</button>
          </div>
        )}
      </section>

      <footer className="site-footer"><span>CVSU MINI STORE</span><span>Little things for big days. <b>♡</b></span><span>MADE FOR THE MAKERS</span></footer>
    </main>
  );
}

export default App;
