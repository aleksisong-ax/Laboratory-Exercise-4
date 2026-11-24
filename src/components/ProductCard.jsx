import './ProductCard.css';

// This reusable card shows product details, availability, and an optional badge.
function ProductCard({
  title,
  price,
  category = 'General',
  inStock,
  onAddToCart,
  children,
  image,
  imageAlt,
  imageFit = 'cover',
}) {
  return (
    <article className={`product-card${inStock ? '' : ' product-card--out'}`}>
      <div className="product-card__topline">
        <span className="product-card__category">{category}</span>
        {children && <div className="product-card__badges">{children}</div>}
      </div>
      <div className="product-card__art">
        <img
          className={`product-card__image${imageFit === 'contain' ? ' product-card__image--contain' : ''}`}
          src={image}
          alt={imageAlt || title}
          loading="lazy"
        />
      </div>
      <div className="product-card__content">
        <h2>{title}</h2>
        <p className="product-card__price">₱{Number(price).toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        <div className="product-card__footer">
          <span className={`stock-label ${inStock ? 'stock-label--yes' : 'stock-label--no'}`}>
            <span className="stock-label__dot" aria-hidden="true" />
            {inStock ? 'In Stock' : 'Out of Stock'}
          </span>
          <button type="button" onClick={() => onAddToCart(title)} disabled={!inStock}>
            {inStock ? 'Add to cart' : 'Unavailable'}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
