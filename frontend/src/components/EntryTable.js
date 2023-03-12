import Table from "react-bootstrap/Table";

import formatDistanceToNow from "date-fns/formatDistanceToNow";

const EntryTable = ({ entries }) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Reason</th>
            <th>Professor</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {entries &&
            entries.map((entry) => (
              <tr>
                <td>{entry.student_id}</td>
                <td>{entry.name}</td>
                <td>{entry.reason}</td>
                <td>{entry.professor}</td>
                <td>
                  {formatDistanceToNow(new Date(entry.createdAt), {
                    addSuffix: true,
                  })}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default EntryTable;
