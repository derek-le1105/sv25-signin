import { useState, useEffect, useRef } from "react";

import { Table, Button } from "react-bootstrap";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";

import formatDistanceToNow from "date-fns/formatDistanceToNow";

const EntryTable = ({ entries }) => {
  const limit = 20;
  const maxPages = useRef(0);
  const [page, setPage] = useState(1);
  const [entryPages, setEntryPages] = useState(entries);

  const incrementPage = () => {
    setPage(page + 1);
  };

  const decrementPage = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    if (entries) {
      if (!maxPages.current)
        maxPages.current = Math.ceil(entries.length / limit);
      setEntryPages(entries.slice((page - 1) * limit, page * limit));
    }
  }, [entries, page]);

  return (
    <div className="entry-details">
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
          {entryPages &&
            entryPages.map((entry, idx) => (
              <tr key={idx}>
                <td>{entry.student_id}</td>
                <td>{entry.name}</td>
                <td>{entry.reason}</td>
                <td>{entry.professor}</td>
                <td>{entry.createdAt}</td>
              </tr>
            ))}
        </tbody>
        <caption>
          {entries && <span>{`${page} of ${maxPages.current}`}</span>}
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={decrementPage}
            disabled={page <= 1}
          >
            <ArrowLeft />
          </Button>
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={incrementPage}
            disabled={page >= maxPages.current}
          >
            <ArrowRight />
          </Button>
        </caption>
      </Table>
    </div>
  );
};

export default EntryTable;
