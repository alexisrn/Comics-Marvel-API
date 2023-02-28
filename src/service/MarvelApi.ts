import axios from "axios";
import md5 from "md5";

const publicKey = "d738c79c76b55b39b1dc8fd16f5116a6";
const privateKey = "37227ecbedccae02b5286c26f641c70f81bac886";
const ts = Number(new Date());
const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public",
  params: {
    ts,
    apikey: publicKey,
    hash,
  },
});

export default api;

export const search = async () => {
  const response = await axios.get(
    `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=${ts}&hash=${hash}`
  );
  return response.data;
};
