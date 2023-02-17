import { useState } from "react";

export const useStudent = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

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

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      setIsLoading(true);
    }
  };

  return { student, isLoading, error };
};
