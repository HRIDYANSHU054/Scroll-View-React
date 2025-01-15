// const API_URL = "https://api.unsplash.com/photos/random";
const API_URL = "http://localhost:3000/api/images";

export const fetchRandomPhotos = async (count = 1) => {
  try {
    const response = await fetch(`${API_URL}?count=${count}`, {});

    if (!response.ok)
      throw new Error("Some error occured with status:", response.status);

    const data = await response.json();
    console.log("data from API");
    console.log(data);

    const onlyUrls = data.images.map((d) => ({ id: d.id, url: d.regular }));

    return onlyUrls;
  } catch (err) {
    console.error(err.message);
    return null;
  }
};
