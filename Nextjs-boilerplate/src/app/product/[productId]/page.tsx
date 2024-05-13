'use client';

import { notFound } from 'next/navigation';

/**
 * Page component for a product detail page. The page will return a 404 error
 * if the product ID is greater than 1000.
 *
 * @param {{productId: string}} props - The route parameters.
 * @returns {React.ReactElement} The page content.
 */
function Product1({ params }: { params: { productId: string } }) {
  if (Number(params.productId) > 1000) {
    notFound();
  }
  return <div>Product1</div>;
}

export default Product1;
