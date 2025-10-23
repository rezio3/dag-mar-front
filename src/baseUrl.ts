const isLocalhost =
  typeof window !== "undefined" && window.location.hostname === "localhost";

export const baseUrl = isLocalhost
  ? "http://localhost:5000/"
  : "https://dag-mar-backend.onrender.com/";
