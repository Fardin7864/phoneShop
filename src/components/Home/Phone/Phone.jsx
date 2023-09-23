import Rating from "react-rating";
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';
import PropTypes from 'prop-types'
import { Link, useLocation } from "react-router-dom";
import { addToLocalStorage, getFromLocalStorage, removeFromLocalStorage } from "../../LocalStorageManagment/localStorage";
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";


const Phone = ({ phone,handleRemove}) => {
  const [isfevorite, setisfevorite] = useState(false);
  const location = useLocation();
  useEffect(() =>{
    if (location.pathname === '/fevorite') {
      setisfevorite(true)
    }else{setisfevorite(false)}
  },[])
  
  const duplicate = () => {
    toast('🦄 Sorry this phone already added!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };

  const success = () => {
    toast('🦄 Successfully added to Fevorite!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };

  const handleSave = (id) => {
    const storedPhones = getFromLocalStorage();
  
    if (storedPhones.includes(id)) {
      duplicate(); // Call duplicate if the ID already exists
    } else {
      addToLocalStorage(id);
      success(); // Call success if the ID is added without duplicates
    }
  };

  // const handleRemove =(id) =>{
  //   removeFromLocalStorage(id)

  // }
  const {id, image, brand_name, phone_name, price, rating } = phone;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{phone_name}</h2>
        <div className="flex gap-3">
        <p>Brand: {brand_name}</p>
        <p>Price: ${price}</p>
        </div>
        <div>
            <p>Reating: 
                <Rating
                emptySymbol={<AiOutlineStar className="text-yellow-300"></AiOutlineStar>}
                fullSymbol={<AiFillStar className="text-yellow-300"></AiFillStar>}
                initialRating={rating}
                readonly
                />
            </p>
        </div>
        <div className="card-actions justify-center">
          <button onClick={()=>handleSave(id)} className="btn btn-primary">Add to fevorite</button>
          <button className="btn btn-primary"><Link to={`/details/${id}`}>Phone Details</Link></button>
          {
            isfevorite? <button onClick={() => handleRemove(id)} className="btn btn-primary">Remove</button> : ''
          }
        </div>
      </div>
    </div>
  );
};

Phone.propTypes = {
    phone: PropTypes.object,
    image: PropTypes.string,
    brand_name: PropTypes.string,
    phone_name: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number
}

export default Phone;
