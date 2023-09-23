import Rating from "react-rating";
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Phone = ({ phone }) => {
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
          <button className="btn btn-primary">Add to fevorite</button>
          <button className="btn btn-primary"><Link to={`/details/${id}`}>Phone Details</Link></button>
        </div>
      </div>
    </div>
  );
};

Phone.propTypes = {
    phone: PropTypes.object.isRequired,
    image: PropTypes.string.isRequired,
    brand_name: PropTypes.string.isRequired,
    phone_name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired
}

export default Phone;
