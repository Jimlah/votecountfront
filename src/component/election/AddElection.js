import useInput from "./../input/useInput";
const AddElection = () => {
  const styleClass =
    "border-gray-900 border-2 border-opacity-50 hover:border-opacity-100";

  const [title, bindTitle, resetTitle] = useInput("");
  const [description, bindDescription, resetDescription] = useInput("");
  const [electionDate, bindElectionDate, resetElectionDate] = useInput("");

  const handleSubmit = () => {
      
  }

  return (
    <div className="">
      <div>{"working"}</div>
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
    </div>
  );
};

export default AddElection;
