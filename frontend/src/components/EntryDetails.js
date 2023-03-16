import { useEntriesContext } from "../hooks/useEntriesContext";
import { useAuthContext } from "../hooks/useAuthContext";

import formatDistanceToNow from "date-fns/formatDistanceToNow";

const EntryDetails = ({ entry }) => {
  const { dispatch } = useEntriesContext();
  const { user } = useAuthContext();
  return (
    <div className="entry-details">
      <h4>{entry.name}</h4>
      <p>
        <strong>ID Number: </strong>
        {entry.student_id}
      </p>
      <p>
        <strong>Reason: </strong>
        {entry.reason}
      </p>
      <p>
        <strong>Professor: </strong>
        {entry.professor}
      </p>
      <p>
        {formatDistanceToNow(new Date(entry.createdAt), { addSuffix: true })}
      </p>
    </div>
  );
};

export default EntryDetails;
