/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
const InstructorsCard = ({ instructor }) => {
  const { instructorName , instructorImage, email} = instructor;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={instructorImage}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{instructor.instructorName}</h2>
        <p>{email}</p>
        <div className="card-actions">
          <button className="btn btn-primary">See Classes</button>
        </div>
      </div>
    </div>
  );
};

export default InstructorsCard;
