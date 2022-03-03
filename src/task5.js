import { Nfts } from '../db/schema/nfts.js';

export const getNfts = async (query) => {
  const dbNfts = await Nfts.find(query);

  return dbNfts || [];
};
