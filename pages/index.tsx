
import ProductGrid from '../components/ProductGrid';
import ShoppingCart from '../components/ShoppingCart';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">Create a business: Eco-Friendly E-commerce - Sustainable products marketplace</h1>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <ProductGrid />
        <ShoppingCart />
      </main>
    </div>
  );
}
