import { useEffect } from "react";

import Navbar from "../components/Navbar";
import EntryDetails from "../components/EntryDetails";

import { useEntriesContext } from "../hooks/useEntriesContext";
import { useAuthContext } from "../hooks/useAuthContext";

const AdminDashboard = () => {
  const { entries, dispatch } = useEntriesContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchEntries = async () => {
      const response = await fetch("/api/entries", {
        headers: { Authorization: `Bearer ${user.token}` },
      });

      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_ENTRIES", payload: json });
      }
    };

    if (user) {
      fetchEntries();
    }
  }, [dispatch, user]);

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <div className="entries">
          {entries && entries.map((entry) => <EntryDetails entry={entry} />)}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
