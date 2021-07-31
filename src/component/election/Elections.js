import electionService from "../../services/election.service";
import { useEffect, useState } from "react";

const Elections = () => {
  const [data, setData] = useState([]);

  const Details = ({ title, description, date, index }) => {
    // let cDate = Date.parse(date).toString("dd MM yyy");
    return (
      <tr key={index}>
        <td className="px-3 py-2">{title}</td>
        <td className="px-3 py-2">{description}</td>
        <td className="px-3 py-2">{date}</td>
        <td className="px-3 py-2">
          <button onClick={() => {}}>Edit</button>
          <button onClick={() => {}}>Del</button>
        </td>
      </tr>
    );
  };

  const electionList = data.map((dt, index) => (
    <Details
      title={dt.title}
      description={dt.description}
      date={dt.election_date}
      key={index}
    />
  ));

  useEffect(() => {
    electionService.getAll().then((res) => {
      setData(res.data);
    });
  }, [data]);


  const handleDelete = (index) => {
    electionService.delete(index).then(() => {
      setData(data.filter((dt, i) => i !== index));
    });
  };

  const handleEdit = (index) => {

    

    electionService.update(index, data).then(() => {
      setData(data);
    });
  };


  return (
    <div>
      <table className="table-auto text-left">
        <thead>
          <tr>
            <th className="px-3 py-2">Title</th>
            <th className="px-3 py-2">Description</th>
            <th className="px-3 py-2">Date</th>
            <th className="px-3 py-2">Action</th>
          </tr>
        </thead>
        <tbody>{electionList}</tbody>
      </table>
    </div>
  );
};

export default Elections;
