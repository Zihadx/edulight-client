/* eslint-disable react/prop-types */
const PopularInstructorCard = ({ popularInstructor }) => {
  const { instructorName, instructorImage, email } = popularInstructor;

  return (
    <div className="card bg-base-100 border mt-8">
      <figure className="px-10 pt-10">
        <img
          src={instructorImage}
          alt="Shoes"
          className="rounded-xl h-40 w-full"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{instructorName}</h2>
        <p>{email}</p>
        <div className="card-actions">
          <button className="btn btn-ghost bg-purple-900 text-white hover:text-slate-900">
            See Classes
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructorCard;
