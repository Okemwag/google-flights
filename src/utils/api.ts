import axios from 'axios';
import { SearchParams } from '../types/flight';

const API_KEY = 'ce1e8a55aemshc34bbf7a3f83adap19f6c7jsn71061d72b11c';
const API_HOST = 'sky-scrapper.p.rapidapi.com';

export async function searchFlights(params: SearchParams) {
  try {
    const response = await axios({
      method: 'get',
      url: 'https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights',
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': API_HOST
      },
      data: {
        originSkyId: params.origin,
        destinationSkyId: params.destination,
        date: params.departureDate.toISOString().split('T')[0],
        adults: params.passengers,
        currency: 'USD'
      }
    });
    console.log(response.data);

    return response.data.flights || [];
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to fetch flights: ${error.message}`);
    }
    throw error;
  }
}