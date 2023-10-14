import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CardCoffee = ({ coffee,coffees, setCoffees }) => {
  console.log( coffee);
  const { _id, name, quantity, supplier, taste, photo } = coffee;
  
  const handleDelete = (_id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire("Deleted!", "Your Coffee has been deleted.", "success")
                const remaining = coffees.filter(cof => cof._id !== _id);
              setCoffees(remaining);
              }
            });
        }
      });
  }

  return (
    <div className="card card-side bg-base-100 shadow-xl p-2">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between w-full pr-4">
        <div className="mt-10">
          <h2 className="card-title">Name: {name}</h2>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-4">
            <button className="btn">View</button>
            <Link to={`updateCoffees/${_id}`}>
              <button className="btn">Edit</button>
            </Link>
            <button
                onClick={() => handleDelete(_id)}
              className="btn bg-orange-500"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CardCoffee.propTypes = {
  coffee: PropTypes.object,
  coffees:PropTypes.object,
  setCoffees:PropTypes.func,
};

export default CardCoffee;
