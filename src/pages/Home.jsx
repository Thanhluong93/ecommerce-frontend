import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../features/productSlice.jsx';
import ProductCard from '../components/ProductCard.jsx';

export default function Home() {
  const dispatch = useDispatch();
  const { items, status } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  return (
    <div className="product-grid">
      {status === 'loading' && <p>Loading...</p>}
      {items.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}