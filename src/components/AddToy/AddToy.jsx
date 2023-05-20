import { useContext } from "react";
import { AuthContext } from "../context/UserContext";
import Swal from 'sweetalert2';

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const pictureUrl = form.pictureUrl.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const email = user?.email;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const addToData = {
      pictureUrl,
      name,
      sellerName,
      email,
      subCategory,
      price,
      rating,
      quantity,
      description,
    };
    form.reset();
    fetch("http://localhost:5000/addtoys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addToData),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
          Swal.fire({
            title: 'Success',
            text: 'Toy added successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="px-14 w-3/5 mx-auto bg-sky-300 py-8">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Picture URL</span>
            </label>
            <input
              type="text"
              name="pictureUrl"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input type="text" name="name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Seller Name</span>
            </label>
            <input
              type="text"
              name="sellerName"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Sub Category</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              name="subCategory"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Price</span>
            </label>
            <input type="text" className="input input-bordered" name="price" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Rating</span>
            </label>
            <input type="text" className="input input-bordered" name="rating" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Quantity</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              name="quantity"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Description</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              name="description"
            />
          </div>
        </div>
        <div className="form-control mt-8 w-3/5 mx-auto">
          <input
            className="btn btn-info btn-block font-bold text-1xl"
            type="submit"
            value="Add A Toy"
          />
        </div>
      </form>
      <div className="card-body"></div>
    </div>
  );
};

export default AddToy;
