import  { useState } from "react"
import { Link } from "react-router-dom"
import "./Card.css";

const Card = ({item, handleClick}) => {
  const [open, setOpen] = useState(false)
  const { title,price,image,description,rating,id } = item;

  return (
    <div className="Card">
      <Link to={`/about/${id}`}>
        <img src={image} height={"200px"} width={"200px"} alt={title} />
      </Link>
       <h5>{title}</h5>
       <p>$ {price}</p>
       <p>{rating.rate}🌟</p>
      <div className="cbtns"><button className="add-to-cart-button" onClick={()=>handleClick(item)}>Add card</button>
      <button className="read-more-button"  onClick={() => setOpen(!open)}>Read More</button></div>
      
      {open && (
        <div>
          <p>{description}</p>
          <button className="close-btn" onClick={() => setOpen(!open)}>Close</button>
        </div>
      )}
    </div>
  )
}

export default Card
