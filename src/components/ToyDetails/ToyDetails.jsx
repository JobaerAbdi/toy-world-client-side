import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const car = useLoaderData();

  return (
    <div className="lg:px-14">
      <div className="card card-side bg-base-100 shadow-xl my-10">
        <figure className="w-1/2">
          <img className="w-96 h-96"
            src={car.toys[0].picture}
            alt="car"
          />
        </figure>
        <div className="w-1/2 mt-20">
          <h2 className="card-title">{car.toys[0].name}</h2>
          <h2 className="card-title">Price: ${car.toys[0].price}</h2>
          <h2 className="card-title">Ratings: {car.toys[0].rating}</h2>
          <button className="btn btn-primary mt-12">Buy Now</button>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl my-10">
        <figure className="w-1/2">
          <img className="w-96 h-96"
            src={car.toys[1].picture}
            alt="car"
          />
        </figure>
        <div className="w-1/2 mt-20">
          <h2 className="card-title">{car.toys[1].name}</h2>
          <h2 className="card-title">Price: ${car.toys[1].price}</h2>
          <h2 className="card-title">Ratings: {car.toys[1].rating}</h2>
          <button className="btn btn-primary mt-12">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
