import { EntriesContext } from "../context/EntryContext";
import { useContext } from "react";

export const useEntriesContext = () => {
  const context = useContext(EntriesContext);

  if (!context) {
    throw Error(
      "useEntriesContext must be used inside an WorkoutsContextProvider"
    );
  }

  return context;
};
