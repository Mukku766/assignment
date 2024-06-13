import Container from "@/ui";
import Image from "next/image";
import React, { useState } from "react";

export default function Filter({ products }) {
  const [fiter, setFilter] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const btnsData = [
    { name: `Men's `, value: `men's clothing` },
    { name: `Women's`, value: `women's clothing` },
    { name: "Jewelery", value: "jewelery" },
    { name: "Electronics", value: "electronics" },
  ];
  const onChange = (a) => {
    if (a) {
      const d = products?.filter((f) => f.category === a);
      setFilteredProducts(d);
      setFilter(a);
    } else {
      setFilter("");
      setFilteredProducts(products);
    }
  };
  return (
    <div>
      <Container>
        <div className="filter" style={{ display: "flex", gap: 10 }}>
        <h3>Sort By Category:</h3>          <button
            onClick={() => onChange(false)}
            
            className={fiter === false ? "active" : ""}
          >
            All
          </button>
          {btnsData.map((btn) => (
            <button
              key={btn.name}
              onClick={() => onChange(btn.value)}
              className={fiter === btn.value ? "active" : ""}
            >
              {btn.name}
            </button>
          ))}
        </div>
        <div className="products products-grids">
          {filteredProducts.map((item, index) => (
            <div key={index} className="product">
              <div className="product-card">
                <div className="product-image">
                  <Image
                    width={400}
                    height={400}
                    src={item?.image}
                    alt={item?.title}
                  />
                </div>
                <div className="product-info">
                  <h2>{item?.title}</h2>
                  <p className="description">{item?.description}</p>
                  <p className="price">${item?.price}</p>
                  <div className="rating">
                    <p>
                      Rating: {item?.rating?.rate} ({item?.rating?.count}{" "}
                      reviews)
                    </p>
                  </div>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
