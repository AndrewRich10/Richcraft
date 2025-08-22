import React, { useEffect, useState } from 'react';
import './products.css';

const SPREADSHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQr9Cakbh3RQ-Vv6rSV8QNlzBCpyZdLgXhIy_jXsBJv7BCcXpp1jbACNVg3xbtiE6UfXzx5ITF9xGh5/pub?output=csv';
const FALLBACK_IMAGE = './placeholder.png';

function parseCost(costStr: string) {
  if (!costStr || costStr.trim() === '') return 0;
  const cleaned = costStr.replace(/[^0-9.]/g, '');
  const parsed = parseFloat(cleaned);
  return isNaN(parsed) ? 0 : parsed;
}

function parseCSV(csv: string) {
  const lines = csv.split(/\r?\n/);
  const result: string[][] = [];
  for (let line of lines) {
    if (line.trim() === '') continue;
    const fields = line.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g) || [];
    const cleaned = fields.map(field => field.replace(/^"|"$/g, '').replace(/""/g, '"').trim());
    result.push(cleaned);
  }
  return result;
}

type Product = {
  productId: string;
  category: string;
  description: string;
  size: string;
  cost: number;
  qty: number;
  image: string;
};

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState('');
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(SPREADSHEET_URL)
      .then(res => res.text())
      .then(csvText => {
        const data = parseCSV(csvText);
        if (data.length <= 1) {
          setError('Error: No data found in the spreadsheet.');
          return;
        }
        const prods = data.slice(1).map(row => ({
          productId: row[0] || '',
          category: row[1] || '',
          description: row[2] || '',
          size: row[3] || '',
          cost: parseCost(row[4]),
          qty: parseInt(row[5]) || 0,
          image: row[6],
        }));
        setAllProducts(prods);
        setProducts(prods);
      })
      .catch(() => setError('Error loading data from spreadsheet.'));
  }, []);

  useEffect(() => {
    let filtered = category ? allProducts.filter(p => p.category === category) : [...allProducts];
    if (sortField) {
      filtered.sort((a, b) => {
        let valA = (a as any)[sortField];
        let valB = (b as any)[sortField];
        if (typeof valA === 'number') {
          return sortOrder === 'asc' ? valA - valB : valB - valA;
        }
        return sortOrder === 'asc'
          ? String(valA).localeCompare(String(valB))
          : String(valB).localeCompare(String(valA));
      });
    }
    setProducts(filtered);
  }, [category, sortField, sortOrder, allProducts]);

  const categories = Array.from(new Set(allProducts.map(p => p.category).filter(Boolean))).sort();

  return (
    <div>
      <div className="title-container">
        <p className="image-error" style={{ display: 'none' }}>
          Logo inaccessible. Check file ID or sharing settings.
        </p>
      </div>
      {error && <div id="error-message">{error}</div>}
      <div id="controls">
        <label>
          Filter by Category:
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option value="">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </label>
        <label>
          Sort by:
          <select value={sortField} onChange={e => setSortField(e.target.value)}>
            <option value="">None</option>
            <option value="category">Category</option>
            <option value="size">Size</option>
            <option value="cost">Cost</option>
            <option value="qty">Quantity</option>
          </select>
        </label>
        <label>
          Order:
          <select value={sortOrder} onChange={e => setSortOrder(e.target.value as 'asc' | 'desc')}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </div>
      <p id="disclaimer">Individual handmade items may vary from the specific image.</p>
      <div id="products" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map(product => (
          <div className="card" key={product.productId}>
            <div className="card-inner">
              <div className="card-front">
                <div className="image-container">
                  <img src={product.image} alt={product.description}
                       onError={e => (e.currentTarget.src = FALLBACK_IMAGE)}
                  />
                </div>
                <p><strong>Description:</strong> {product.description}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Size:</strong> {product.size}</p>
                <p><strong>Cost:</strong> ${product.cost.toFixed(2)}</p>
                <p><strong>Quantity:</strong> {product.qty}</p>
                <p><strong>Product ID:</strong> {product.productId}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
