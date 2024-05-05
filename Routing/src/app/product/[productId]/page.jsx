'use client';

import { notFound } from 'next/navigation';

function Product1({ params }) {
  console.log("params", params);
  if(params.productId > 1000) {
    notFound();
  }
  return <div>Product1</div>;
}

export default Product1;
