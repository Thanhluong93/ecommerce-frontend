import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice.jsx';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </button>
    </div>
  );
}