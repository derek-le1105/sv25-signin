import { useState } from "react";

export const useStudent = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [exists, setExists] = useState(null);
  const [name, setName] = useState(null);

  const student = async (id) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`/api/student/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    console.log(json[0]);
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      setExists(false);
    }
    if (response.ok) {
      setIsLoading(true);
      setExists(true);
      setName(json[0].name.split(" ")[0]);
    }
  };

  return { student, isLoading, error, exists, name };
};
