import { useState } from "react";

export const useStudent = ({ setExists }) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [name, setName] = useState(null);
  const [professors, setProfessors] = useState(null);

  const getStudent = async (id) => {
    setIsLoading(true);
    setError(null);
    if (id === "") {
      setError("Input cannot be empty");
      return;
    }

    const response = await fetch(`/api/student/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      setExists(null);
    }
    if (response.ok) {
      if (!json) {
        setIsLoading(false);
        setExists(false);
      } else {
        setIsLoading(false);
        setExists(true);
        setName(json[0].name.split(" ")[0]);
        setProfessors(json[0].professors);
      }
    }
  };

  const createStudent = async (student_id, name, professors) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("/api/student/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ student_id, name, professors }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      setIsLoading(false);
      return response.ok;
    }
  };

  return {
    getStudent,
    isLoading,
    error,
    name,
    professors,
    createStudent,
  };
};
