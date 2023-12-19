// import {loadStripe} from '@stripe/stripe-js';
import GooglePayButton from "@google-pay/button-react"
import { useState, useEffect} from "react"
import{ Link }from "react-router-dom"
import "./Cart.css"
const Cart = ({cart, setCart}) => {
  const { title, image, id } = cart;

  const [price, setPrice] = useState(0)
  

  console.log(cart);
   
  function handlePrice(){
    let ans=0
    cart.map((item)=>ans+=item.price*item.amount)
    setPrice(ans)
  }
  useEffect(()=>{
    handlePrice()
  },[cart])

  function handleIncrement(id) {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, amount: item.amount + 1 } : item
    );
    setCart(updatedCart);
  }

  // Function to handle quantity decrement
  function handleDecrement(id) {
    const updatedCart = cart.map((item) =>
      item.id === id && item.amount > 1
        ? { ...item, amount: item.amount - 1 }
        : item
    );
    setCart(updatedCart);
  }
  function handleRemove(id){
    const del=cart.filter(i=> id!==i.id)
    setCart(del)
  }
  // const makePayment=async ()=>{
  //   const stripe = await loadStripe("pk_test_51ONH6jSH1qhOMqwGM3oLImpIfkbj7Q6zA19ORsAojcV8DSmYnBfPN33tT6WliTYozhrZheW7yVCT2DVOZC5ob9b200mtGWrmr1")
  //   const body = {
  //     cart: cart, // sending the cart data to the server
  //   };

  //   const headers = {
  //     "Content-Type": "application/json",
  //   };

  //   try {
  //     const response = await fetch(`${apiURL}/create-checkout-session`, {
  //       method: "POST",
  //       headers: headers,
  //       body: JSON.stringify(body),
  //     });

  //     const session = await response.json();

  //     // Redirect to Stripe Checkout
  //     const result = await stripe.redirectToCheckout({
  //       sessionId: session.id,
  //     });

  //     if (result.error) {
  //       console.error(result.error.message);
  //     }
  //   } catch (error) {
  //     console.error("Error creating checkout session:", error);
  //   }
  // };

  return (
    <div>
      <center><table>
      <thead >
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Inc</th>
            <th>Qty</th>
            <th>Desc</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) =>{
            return(
              <tr key={item.id} >
                <td>
                <Link to={`/about/${item.id}`}>
                  <img src={item.image} alt={item.title} height={'100px'} width={'100px'} />
                </Link>
              </td>
              <td>{item.title}</td>
              <td>
                <button className='cartbtn' onClick={() => handleDecrement(item.id)} style={{
    backgroundColor: 'red',
    color: 'white',
    padding: '8px 12px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    outline: 'none',
    
  }}>
                  -
                </button>
                
              </td>
              <td>{item.amount}</td>
              <td>
                <button className='cartbtn' onClick={() => handleIncrement(item.id)} style={{
    backgroundColor: 'green',
    color: 'white',
    padding: '8px 12px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    outline: 'none',
    
  }}>
                  +
                </button>
              </td>
              <td>{item.price * item.amount}</td>
              <td>
                <button className='cartbtn' onClick={() => handleRemove(item.id)}>
                  🗑️
                </button>
              </td>
              </tr>
            )
          } )}
        </tbody>
        <tfoot>
          <tr>
            <td>Total Amount</td>
            <td colSpan={5}>{price.toFixed(2) }</td>
            <td><button className="gpay"><GooglePayButton
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'USD',
      countryCode: 'US',
    },
  }}
  onLoadPaymentData={paymentRequest => {
    console.log('load payment data', paymentRequest);
  }}
/></button></td>
          </tr>
        </tfoot>
      </table></center>
    </div>
  )
}

export default Cart