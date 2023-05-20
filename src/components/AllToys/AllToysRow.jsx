const AllToysRow = ({toy}) => {
    console.log(toy);
    const {sellerName,name,subCategory,price,quantity,_id} = toy;
  return (
    <tr className="font-semibold">
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <th>
        <button className="btn btn-info">View Details</button>
      </th>
    </tr>
  );
};

export default AllToysRow;
