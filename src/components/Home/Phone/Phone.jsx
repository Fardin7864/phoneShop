const Phone = ({ phone }) => {
  const { image, brand_name, phone_name, price, rating } = phone;
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
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to fevorite</button>
        </div>
      </div>
    </div>
  );
};

export default Phone;
