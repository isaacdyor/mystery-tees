import { GetServerSideProps } from 'next';
import { env } from '../env.mjs';

// Define a type for our product data
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'physical' | 'digital';
};

// Define a type for our props
interface PropductProps {
  product: Product;
}

// Export the page component
export default function productsPage({ product }: PropductProps) {
  // Render the product
  return (
    <div style={{ height: '100vh', padding: 50 }}>
      <p>Hello World</p>
    </div>
  );
}

// Export the getServerSideProps function with GetServerSideProps type
export const getServerSideProps: GetServerSideProps = async (context) => {

  // Define the API url with the product id
  const API_URL = `${env.BASE_URL}shops.json`;
  const headers = { 'Authorization': `Bearer ${env.PRINTIFY_TOKEN}` };

  // Fetch data
  const res = await fetch(API_URL, { headers });

  // Parse the data
  const data = await res.json();
  console.log(data)

  // If the product is not found, return notFound - 404 page
  if (data === null) {
    return {
      notFound: true,
    };
  }

  // Return the product as props
  return {
    props: {
      data,
    },
  };
};