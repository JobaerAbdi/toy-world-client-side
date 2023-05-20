import { useLoaderData } from "react-router-dom";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
  const allToys = useLoaderData();
  // console.log(allToys);
  return (
    <div className="px-14">
      <h2 className="font-bold text-center mb-5">All Toys</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full ">
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {
                allToys.map(toy=> <AllToysRow
                key={toy._id}
                toy={toy}
                ></AllToysRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
