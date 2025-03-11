export const API_BASE_URL = "http://10.0.2.2:5000/api/images";

export const fetchUIData = async () => {
  try {
    const response = await fetch(API_BASE_URL);
    return await response.json();
  } catch (error) {
    console.error("Error fetching UI data:", error);
    return null;
  }
};
