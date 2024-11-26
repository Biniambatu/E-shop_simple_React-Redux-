import { useSelector } from "react-redux"
import { CartCard } from "../Cart/CartCard"

export const Cart = () => {
  const cartList = useSelector(state => state.cartState.cartList)
  const price = useSelector(state => state.cartState.price)
  return (
    <>
      <span>Price: ${price}</span>
      { cartList.map((cartList:any) => (
        <CartCard cartList={cartList}/>
      )) }
    </>
  )
}
