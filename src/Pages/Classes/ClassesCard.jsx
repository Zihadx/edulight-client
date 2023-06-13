/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
const ClassesCard = ({ allClass }) => {
  const { classesName , classesImage, availableSeats, price, instructorName } =
    allClass;


  return (
    <div className="card bg-base-100 shadow-xl  mt-8">
      <figure>
        <img src={classesImage} alt="Shoes" className="h-48 w-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Instructor: {allClass.instructorName}</h2>
        <h2 className="card-title">{allClass.classesName}</h2>
        <p>Price: ${price}</p>
        <div className="card-actions">
          <button className="btn btn-ghost bg-purple-900 text-white hover:text-slate-900">
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
