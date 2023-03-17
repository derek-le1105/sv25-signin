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
      setIsLoading(false);
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
      setError(json.error);
      setExists(null);
    }
    if (response.ok) {
      if (!json) setExists(false);
      else {
        setName(json.name.split(" ")[0]);
        setProfessors(json.professors);
        setExists(true);
      }
    }

    setIsLoading(false);
  };

  const createStudent = async (student_id, name, professors) => {
    setIsLoading(true);
    setError(null);
    professors = !professors ? null : professors.split(", ");

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
