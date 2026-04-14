function ProductCard({ product, onAdd, added, qty }) {

  return (
    <div className="col-md-6 col-lg-4 mb-4">

      <div className="card h-100 shadow-sm p-3">

        <h5 className="card-title">{product.name}</h5>

        <p className="card-text">₹ {product.price}</p>

        {qty > 0 && (
          <p className="text-success">
            In Cart: {qty}
          </p>
        )}

        <button
          className={added ? "btn btn-success" : "btn btn-primary"}
          onClick={() => onAdd(product)}
        >
          {added ? "Add More +" : "Add to Cart"}
        </button>

      </div>

    </div>
  );
}

export default ProductCard;