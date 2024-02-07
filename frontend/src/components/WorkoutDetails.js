const WorkoutDetails = ({ workout }) => {
  const dateCreatedAt = new Date(workout.createdAt);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
  };
  return (
    <div className="workout-details">
      <h2>{workout.title}</h2>
      <p>
        <strong>Descritpion: </strong>
        {workout.description}
      </p>
      <p>{dateCreatedAt.toLocaleDateString("fr-FR", options)}</p>
    </div>
  );
};
export default WorkoutDetails;
