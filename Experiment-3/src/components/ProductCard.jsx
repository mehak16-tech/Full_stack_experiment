function ProductCard({ product, onAdd }) {
  return (
<div className="col-12 col-sm-6 mb-3">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">
            {product.name}
          </h5>
          <p className="card-text">
            ₹ {product.price}
          </p>
          <button
            className="btn btn-primary"
            onClick={() => onAdd(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
