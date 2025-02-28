export const API_BASE_URL = "http://localhost:5000/api/ui";

export const fetchUIData = async () => {
  try {
    const response = await fetch(API_BASE_URL);
    return await response.json();
  } catch (error) {
    console.error("Error fetching UI data:", error);
    return null;
  }
};
