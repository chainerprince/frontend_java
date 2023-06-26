import { GetStaticProps } from "next";
import Hero from "../components/Hero";
import NewsletterSection from "../components/NewsletterSection";
import PopularProducts from "../components/PopularProducts";
import ServiceSection from "../components/ServiceSection";
import { loadProducts } from "../lib/products";
import { Product } from "../types/models";

interface HomePageProps {
  products: Product[];
 
}
function HomePage(props:HomePageProps) {
  
  return (
    <section>
      <Hero/>
      <PopularProducts 
      products={props.products.slice(0,3)}
      />
      <ServiceSection/>      
    </section>
  );
}


export const getStaticProps: GetStaticProps = async () => {
  const products = await loadProducts();
  
  return {
    props: {
      products:
        products?.map((product: Product) => ({
          id: product.id,
          name: product.name,
          price: product.price,
          photos: product?.photos
           || null,                             
        })) || [],
    },
  };
};







export default HomePage;
