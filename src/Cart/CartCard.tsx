
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { Remove_from_Cart } from '../Store/CartSlice';

export const CartCard = ({cartList}) => {
  const {id,name,image,price} = cartList;
  const dispatch = useDispatch()
  return (
    <div className="flex items-center w-full max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
  <Link to="#" className="flex-shrink-0">
    <img
      className="w-24 h-24 rounded-lg object-cover"
      src={image}
      alt="product image"
    />
  </Link>
  <div className="flex flex-col justify-between ml-4 flex-grow">
    <Link to="#">
      <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
        {name}
      </h5>
    </Link>
    <div className="flex items-center mt-2">
      <div className="flex items-center space-x-1">
        {/* Star Rating */}
        {Array(4)
          .fill()
          .map((_, index) => (
            <svg
              key={index}
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
        <svg
          className="w-4 h-4 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      </div>
      <span className="text-xs font-semibold text-blue-800 bg-blue-100 rounded px-2 py-0.5 ml-2 dark:bg-blue-200 dark:text-blue-800">
        5.0
      </span>
    </div>
    <div className="flex items-center justify-between mt-2">
      <span className="text-lg font-bold text-gray-900 dark:text-white">
        ${price}
      </span>
      <Link
        to="#"
        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        onClick={() => dispatch(Remove_from_Cart(cartList))}
      >
        Remove
      </Link>
    </div>
  </div>
</div>

  )
}
