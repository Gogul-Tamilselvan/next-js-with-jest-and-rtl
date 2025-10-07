"use client"

// components/UserProfile.jsx
import { useEffect, useState } from "react";    

export default function UserProfile({ fetchUser }) {
  const [user, setUser] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUser()
      .then(setUser)
      .catch(() => setError("Failed to fetch user"));
  }, [fetchUser]);

  if (error) return <p>{error}</p>;
  if (!user) return <p>Loading...</p>;

  return <h1>{user}</h1>;
}
