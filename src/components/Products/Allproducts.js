import React from "react";
import Product from './Product'

export default function Allproducts({ data }) {

  /* const [filtereddata, updatefiltereddata] = useState(Productdata);

  useEffect(() => {
    const NewData = Productdata.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
    updatefiltereddata(NewData);
  }, [search]) */
  return (
    <>
      <div className="container mt-4" style={{minHeight: '100vh'}}>
        <div className="product-outr d-flex flex-wrap justify-content-center">
          {data.map((product) => (
            <Product
              key={product.key}
              id={product.key}
              title={product.title}
              image={product.image}
              cost={product.price}
              description={product.description}
              rating={product.rating}
              category={product.category}
              type={"add"}
            />
          ))}
        </div>
      </div>
    </>
  );
}
