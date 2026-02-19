function ProductCard({ product, onAdd }) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm border-0 product-card">

        <img
          src={product.img}
          alt={product.name}
          className="card-img-top p-3"
        />

        <div className="card-body text-center">

          <h5 className="fw-bold">{product.name}</h5>

          <span className="badge bg-success fs-6 mb-3">
            ₹ {product.price}
          </span>

          <br />

          <button
            className="btn btn-primary w-100"
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
