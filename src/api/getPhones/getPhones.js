import { productsEndpoint } from "../connectApi/apiEndpoints";
import connectApi from "../connectApi/connectApi";

const getPhones = async () => {
  const phones = await connectApi.get(`${productsEndpoint}`);

  return phones.data;
};

export default getPhones;
