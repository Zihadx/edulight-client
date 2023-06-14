import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProviders";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_IMAGE_TOKEN;
const AddClass = () => {
  const { user } = useContext(AuthContext);
  //   const {useAxiosSecure} =useAxiosSecure()
  //   console.log(user);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=YOUR_CLIENT_API_KEY${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();

    console.log(formData);
    formData.append("image", data.image[0]);
    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageRes) => {
        console.log(imageRes);
      });
  };
  console.log(errors);
  console.log(image_hosting_url);
  return (
    <div className="w-full md:ps-4">
      <Helmet>
        <title> EduLight | Add Item</title>
      </Helmet>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-slate-100 rounded-md p-8"
      >
        <div className="flex gap-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Class name</span>
            </label>
            <input
              type="text"
              placeholder="class name"
              {...register("className", { required: true, maxLength: 80 })}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Instructor name</span>
            </label>
            <input
              type="text"
              placeholder="instructor name"
              defaultValue={user?.displayName}
              {...register("instructorName", { required: true, maxLength: 80 })}
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
            placeholder="instructor email"
            defaultValue={user?.email}
            {...register("instructorEmail", { required: true, maxLength: 80 })}
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
              placeholder="available seat"
              {...register("availableSeat", { required: true, maxLength: 80 })}
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              {...register("price", { required: true })}
              type="price"
              placeholder="Price"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="md:flex gap-6 justify-between">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Class Image*</span>
            </label>
            <input
              {...register("image1", { required: true })}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          {/* <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">
                Instructor Image*
              </span>
            </label>
            <input
              {...register("image2", { required: true })}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div> */}
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
