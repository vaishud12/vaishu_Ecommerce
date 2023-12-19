import { Tilt } from 'react-tilt';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import "../About/About.css";

const About = ({ Data, handleClick}) => {
  const [open, setOpen] = useState(false)
  
  const getOtherData = () => {
    const mainItemCategory = data.category; 
    return Data.filter(item => item.id !== parseInt(aboutId) && item.category === mainItemCategory);
  };
  const handleAddToCart = (item) => {
    handleClick(item);
    alert(`${item.title} added to the cart successfully!`);
  };

  // const getOtherData = () => {
  //   return Data.filter(item => item.id !== parseInt(aboutId));
  // };

  const defaultOptions = {
    // Your Tilt options...
  };

  const { aboutId } = useParams();
  const data = Data.find(item => item.id === parseInt(aboutId));

  return (
    <>
       <div className='About'>
        <div className='right'>
          <Tilt options={defaultOptions}>
            <img style={{ height: '400px' }} src={data.image} alt={data.title} />
          </Tilt>
        </div>
        <div className='left'>
          <h1>{data.title}</h1>
          <p><b>Description:</b> {data.description}</p>
          <p><b>Price:</b> {data.price}</p>
          <p><b>Ratings:</b> {data.rating.rate}</p>
        </div>
      </div>
      <h2 className='ritem'>Related More Items:</h2>
      
      <div className="other-cards">
        {getOtherData().map(item => (
          <div className="CardAbout" key={item.id}>
            <Link to={`/about/${item.id}`}>
              <img src={item.image} height={"200px"} width={"200px"} />
            </Link>
            <h5>{item.title}</h5>
            <p>$ {item.price}</p>
            <p>{item.rating.rate}🌟</p>
            <div className="cbtns">
              <button className="add-to-cart-button" onClick={() => handleAddToCart(item)}>Add card</button>
              <button className="read-more-button" onClick={() => setOpen(!open)}>Read More</button>
            </div>
            {open && (
              <div>
                <p>{item.description}</p>
                <button className="close-btn" onClick={() => setOpen(!open)}>Close</button>
              </div>
            )}
          </div>
        ))}
      </div>
  
    </>
    
  );
}

export default About;
