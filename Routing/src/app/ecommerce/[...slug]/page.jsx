'use client'

function Ecommerce({params}) {
    console.log("params", params.slug.length)
    if(params.slug.length === 3) {
        return 'coming from details'
    }
  return (
    <div>Ecommerce</div>
  )
}

export default Ecommerce