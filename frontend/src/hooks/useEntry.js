import { useState } from "react";

export const useEntry = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const entry = async (id) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("/api/student/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
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
