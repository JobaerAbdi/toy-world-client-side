import { useLoaderData } from "react-router-dom";

const SingleToyDetails = () => {
  const singleToy = useLoaderData();
  const {pictureUrl,name,sellerName,sellerEmail,price,rating,quantity,description} = singleToy;
  console.log(singleToy);
  return (
    <div className="px-14 mt-12">
      <h1 className="text-center font-bold">Single Toy Details</h1>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="w-1/2">
         <img src={pictureUrl} alt="Toy" />
        </figure>
        <div className="card-body w-1/2">
          <h2 className="card-title">Toy Name: {name}</h2>
          <h2 className="card-title">Seller Name: {sellerName}</h2>
          <h2 className="card-title">Seller Email: {sellerEmail}</h2>
          <h2 className="card-title">Price: ${price}</h2>
          <h2 className="card-title">Rating: {rating}</h2>
          <h2 className="card-title">Quantity: {quantity}</h2>
          <h2 className="card-title">Description: {description}</h2>
        </div>
      </div>
    </div>
  );
};

export default SingleToyDetails;
