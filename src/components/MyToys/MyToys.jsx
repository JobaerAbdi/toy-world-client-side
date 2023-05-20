import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/UserContext";
import MyToyRow from "./MyToyRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const url = `http://localhost:5000/addtoys?email=${user?.email}`;
  console.log(toys);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [url]);


  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <button className="btn btn-info">Update</button>
              </th>
              <th>Image</th>
              <th>Toy Name</th>
              <th>Seller Name</th>
              <th>Email</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Ratings</th>
              <th>Quantity</th>
              <th>
                <button className="btn btn-active btn-warning">Delete</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <MyToyRow
                key={toy._id}
                toy={toy}
                toys={toys}
                setToys={setToys}
              ></MyToyRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
