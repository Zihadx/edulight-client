import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const handleAddClass = (event) => {
    event.preventDefault();
    const form = event.target;
    const classesName = form.class.value;
    const instructorName = form.instructor.value;
    const classesImage = form.photo.value;
    const instructorImage = form.photo1.value;
    const email = form.email.value;
    const availableSeats = form.seat.value;
    const price = form.price.value;
    const addNewClass ={
      classesName,
      instructorName,
      classesImage,
      instructorImage,
      email,
      availableSeats,
      price
    }
    fetch('http://localhost:5000/instrucClasses',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(addNewClass)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'class added successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        
      }
    })
  };

  return (
    <div className="w-full md:ps-4">
      <Helmet>
        <title> EduLight | Add Item</title>
      </Helmet>

      <form onSubmit={handleAddClass} className="bg-slate-100 rounded-md p-8">
        <div className="flex gap-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Class name</span>
            </label>
            <input
              type="text"
              name="class"
              placeholder="class name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Instructor name</span>
            </label>
            <input
              type="text"
              name="instructor"
              placeholder="instructor name"
              defaultValue={user?.displayName}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Instructor Email</span>
          </label>
          <input
            type="text"
            name="email"
            placeholder="instructor email"
            defaultValue={user?.email}
            className="input input-bordered w-full"
          />
        </div>
        <div className=" flex gap-6 b-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Available seat</span>
            </label>
            <input
              type="text"
              name="seat"
              placeholder="available seat"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="price"
              name="price"
              placeholder="Price"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="md:flex gap-6 justify-between">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Classes photoURL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photoUrl"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Instructor photoURL</span>
            </label>
            <input
              type="text"
              name="photo1"
              placeholder="photoUrl"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <input
          className="btn btn-ghost mt-4 bg-purple-900 text-white hover:text-slate-900"
          type="submit"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddClass;
