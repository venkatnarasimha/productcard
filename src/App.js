import './App.css';
import {Product} from './components/Product';
import  one from './images/x.jpg';
function App() {
  const product = 
    {
        name: "oneplus9R",
        category: "mobilephones",
        image: {one},
        price: 39999,
        inStock: 20,
        brand: "OnePlus",
        rating: 154,
        numReviews: 0,
        description: "OnePlus 9R 5G (Carbon Black, 8GB RAM, 128GB Storage)",
        boxIncludes: "OnePlus 9R 5G, Power Adapter, Cable, Quick Guide, Welcome Leter, Important Notes, Logo Stickers, Transparent Case, Protector, Card Pin",
        isPrime: true
    }


  return (
    <div className="App">
      <Product name={product.description}  image={one} rating={product.rating} price ={product.price} prime={product.isPrime}/>

    </div>
  )
}

export default App;
