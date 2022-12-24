// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const CoinGecko = require('coingecko-api');
 
//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

export default async function handler(req, res) {

  let data = await CoinGeckoClient.coins.all();
  res.status(200).json({ name: data.data })
}
