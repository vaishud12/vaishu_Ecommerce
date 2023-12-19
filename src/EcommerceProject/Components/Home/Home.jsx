import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import img from "../img/speimg.png"
// import Data from "../Data"
import Card from "../Card/Card"
import "./Home.css"
const Home = ({search,handleClick,data}) => {
  const handleAddToCart = (item) => {
    handleClick(item);
    alert(`${item.title} added to cart successfully!`);
  };
  return (
    <>
    <main>
      <div className="container">
        <div className="slider-container has-scrollbar">
          <div className="slider-item">
            
            <div className="banner-content">
              <h1 className="banner-subtitle">Trending item</h1>
              <p className="banner-title">Women's latest fashion sale</p>
              <p className="banner-text">
                starting at $ <b>20</b>.00
              </p>
              <a href="#" className="banner-btn">
                Shop now
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div className="Home">
        <Carousel>
            {data.filter((item)=>item.category.toLocaleLowerCase().includes(search)).map((item)=>{
                return(
                    <header key={item.id} style={{height:'800px', width:'80%', margin:'auto'}}>
                        <div>
                          <img src={item.image} />
                          <p className="legend">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <p>{item.price}$</p>
                            <p>{item.rating.rate}</p>
                            <button className="addcart" onClick={() => handleAddToCart(item)}>Add Cart</button>
                          </p>
                        </div>
                    </header>
                )
            })}
                
       </Carousel>
       <div className="midsec" >
        <img src={img}></img>
       </div>
      <section className="sect">
        {data.filter((item)=>item.category.toLocaleLowerCase().includes(search)).map((item)=>{
          return(
            <Card key={item.id} item={item} handleClick={() => handleAddToCart(item)}/>
          )
          
        })}
      </section>
    </div></>
    
  )
}

export default Home