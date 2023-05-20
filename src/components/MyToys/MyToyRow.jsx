import Swal from "sweetalert2";

const MyToyRow = ({toy , toys, setToys}) => {
    const {_id,pictureUrl,name,sellerName,email,subCategory,price,rating,quantity} = toy;

    const handleDelete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You want to delete this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:5000/addtoys/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
                  const remaining = toys.filter(toy=> toy._id !== id);
                  setToys(remaining)
                }
              });
          }
        });
      };

    
  return (
    <tr>
        <th><button className="btn btn-info">Update</button></th>
      <td>
        <div className="rounded-lg w-24 h-24">
          <img src={pictureUrl} alt="img" />
        </div>
      </td>
      <td>{name}</td>
      <td>{sellerName}</td>
      <td>{email}</td>
      <td>{subCategory}</td>
      <td>${price}</td>
      <td>{rating}</td>
      <td>{quantity}</td>
      <th>
      <button onClick={()=>handleDelete(_id)} className="btn btn-active btn-warning">Delete</button>
      </th>
    </tr>
  );
};

export default MyToyRow;
