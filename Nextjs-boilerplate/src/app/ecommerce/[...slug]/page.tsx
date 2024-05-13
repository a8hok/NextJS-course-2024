'use client';

/**
 * This component renders an ecommerce page based on the route parameters.
 *
 * The route parameters are an array of strings, where the first element is the category,
 * the second element is the sub-category, and the third element is the product id.
 *
 * If there are not three elements in the array, it will render a generic ecommerce page.
 *
 * @param {{params: {slug: string[]}}}
 * @return {JSX.Element}
 */
function Ecommerce({ params }: { params: { slug: string[] } }) {
  console.log('params', params.slug.length);
  if (params.slug.length === 3) {
    return 'coming from details';
  }
  return <div>Ecommerce</div>;
}

export default Ecommerce;
