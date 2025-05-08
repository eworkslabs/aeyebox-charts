import axios from 'axios';

export default async function apiConsumer (endpoint, token, method = 'GET', data = null) {
  try {
    const response = await axios({
      url: endpoint, 
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data,
    });

    return response;
  } catch (error) {
    console.error('Error on consume API:', error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};
