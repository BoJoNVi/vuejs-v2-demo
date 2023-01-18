import type { PexelsSearchInterface } from "./commonInterfaces";

const headers = {
  Authorization: "", // PEXELS AUTHORIZATION KEY
};

export const utilGetPhoto = async (config: PexelsSearchInterface) => {
  const { search = "", items = 10, page = 1 } = config;
  const res = await fetch(
    `https://api.pexels.com/v1/search?query=${search}&per_page=${items}&page=${page}`,
    {
      headers,
    }
  );
  return await res.json();
};
