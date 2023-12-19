import { Link} from "react-router-dom"
import "./Navbar.css"
import cartimg from "../img/cart.png"
import { useState, useEffect } from "react";
const Navbar = ({setSearch,size,data,setData,Data}) => {
  const [sortOrder, setSortOrder] = useState('asc');
  

  

  const filterresult = (catItem) => {
    let result;

    if (catItem === 'price') {
     result = [...data].sort((a, b) => {
        const priceA = a.price;
        const priceB = b.price;
        return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
      });
    } else {
    
      result = data.filter((curData) => curData.category === catItem);
    }

    setData(result);
  };

  const handleSort = () => {
    
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));

   
    filterresult('price');
  };
  const filterResult=(catItem)=>{
    const newdata=Data;
    const result=newdata.filter((curData)=>{
      return curData.category===catItem
    })
    console.log(result);
    setData(result)
    
  }
  const filterResult2=(catItem)=>{
    const newdata=Data;
    const result=newdata.filter((curData)=>{
      return curData.category===catItem
    })
    console.log(result);
    setData(result)
    
  }
  const filterResult3=(catItem)=>{
    const newdata=Data;
    const result=newdata.filter((curData)=>{
      return curData.category===catItem
    })
    console.log(result);
    setData(result)
    
  }
  const filterResult4=(catItem)=>{
    const newdata=Data;
    const result=newdata.filter((curData)=>{
      return curData.category===catItem
    })
    console.log(result);
    setData(result)
    
  }
  return (
    <div>
      <nav>
        <article className="">
          <div className="navimg">
            <Link style={{ color: "white" }} to="/">
              <img
                src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg"
                style={{ height: "80px", width: "150px" }}
                alt="Amazon Logo"
              />
            </Link>
          </div>
          <div className="inputt">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="search your product"
            />
          </div>
          
          <button
            className="filterbtn"
            onClick={() => filterResult(`men's clothing`)}
          >
            Men
          </button>
          <button
            className="filterbtn"
            onClick={() => filterResult2(`womens clothing`)}
          >
            Womens
          </button>
          <button
            className="filterbtn"
            onClick={() => filterResult3(`electronics`)}
          >
            Electronics
          </button>
          <button
            className="filterbtn"
            onClick={() => filterResult4(`jewelery`)}
          >
            Jwellery
          </button>
          <button className="filterbtn" onClick={handleSort}>
            Sort Price {sortOrder === "asc" ? "" : ""}
          </button>
          <div>
            <Link
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
              to="/cart"
            >
              <sup
                style={{
                  marginRight: "5px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "lightgray",
                }}
              >
                {size}
              </sup>
              <img
                src={cartimg}
                alt="cart icon"
                style={{
                  borderRadius: "10%",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              />
            </Link>
          </div>

        </article>
        <article className="Artbtn">
          
        </article>
      </nav>
    </div>
  )
}

export default Navbar