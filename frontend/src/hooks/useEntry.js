import { useState } from "react";

export const useEntry = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const entry = async (student_id, name, reason, professor) => {
    setIsLoading(true);
    setError(null);

    console.log(student_id, name, reason, professor);

    const response = await fetch("/api/entries/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ student_id, name, reason, professor }),
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

  return { entry, isLoading, error };
};
