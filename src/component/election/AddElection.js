import electionService from "../../services/election.service";
import useInput from "./../input/useInput";
const AddElection = () => {
  const styleClass =
    "border-gray-900 border-2 border-opacity-50 hover:border-opacity-100";

  const [title, bindTitle, resetTitle] = useInput("");
  const [description, bindDescription, resetDescription] = useInput("");
  const [electionDate, bindElectionDate, resetElectionDate] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      title: title,
      description: description,
      election_date: electionDate,
    };

    electionService
      .create(data)
      .then((response) => {
        resetTitle();
        resetDescription();
        resetElectionDate();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="">
      <div>{"working"}</div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" {...bindTitle} className={styleClass} />
        <input
          type="text"
          name="description"
          {...bindDescription}
          className={styleClass}
        />
        <input
          type="text"
          name="election_date"
          {...bindElectionDate}
          className={styleClass}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddElection;
