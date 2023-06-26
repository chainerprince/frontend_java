import ProductItem from "../ProductItem";

interface ProductListProps {
  products: any[];
  searchTerm: string;
  price: number;
  categoryId: number;
}

function ProductList(props: ProductListProps) {
  return (
    <ul className="list">
      {props.products
        .filter((product) => {
          const { name, price, categoryId } = product;
          if (props.searchTerm === "") {
            return price <= props.price && props.categoryId !== 0
              ? categoryId === props.categoryId
              : price <= props.price;
          } else if (
            name
              .toLocaleLowerCase()
              .includes(props.searchTerm.toLocaleLowerCase())
          ) {
            return price <= props.price && props.categoryId !== 0
              ? categoryId === props.categoryId
              : price <= props.price;
          }
        })
        .map((product) => {
          const { id, photos, name, price } = product;

          return (
            <ProductItem
              key={id}
              id={id}
              photos={photos}
              name={name}              
              price={price}
            />
          );
        })}
    </ul>
  );
}

export default ProductList;
