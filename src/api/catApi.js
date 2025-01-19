export const fetchCats = async (page) => {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&order=DESC`);
    const data = await response.json();
    return data;
  };
  