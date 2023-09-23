import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { useOutletContext, useParams } from "react-router-dom";

const PhoneDetails = () => {
    const phones = useOutletContext();
    const idx = useParams();
    const phoneDetail = phones.find(phone => phone.id === idx.id)
    // console.log(phoneDetail)
    const {id, image, brand_name, phone_name, price, rating } = phoneDetail;


    return (
        <div className="flex items-center justify-center my-10">
            <div className="card w-1/2 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="flex flex-col justify-center items-center gap-7 mb-10">
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
          </div>
        </div>
      </div>
        </div>
    );
};

export default PhoneDetails;