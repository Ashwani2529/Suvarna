import axios from "axios";

const BASE_QUERY = `http://127.0.0.1:8000/`;

const OPTIONS = {
  headers : {
    'Content-Type': 'application/json',
    'Authorization' : 'Bearer '.concat('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyNDcxNTg2LCJqdGkiOiIyMzJiZjc3YWE2ZDY0MDM1YWQ5ZjIzNjBjYjUwNjYwOCIsInVzZXJfaWQiOjV9.jF7rIC7g6FHtlinNFCqctB3TOjO6yVO4OURTFM33gfI')
  },
}

const fetchData = async (method, apiRoutes) => {
  try {
    if (method.toLowerCase() === "get") {
      const response = await axios.get(BASE_QUERY.concat(apiRoutes),OPTIONS);
      console.log(response.data);
      return response.data;
    } else if (method.toLowerCase() === "post") {
      const response = await axios.post(BASE_QUERY.concat(apiRoutes),OPTIONS);
      console.log(response.data);
      return response.data;
    } else if (method.toLowerCase() === "put") {
      const response = await axios.put(BASE_QUERY.concat(apiRoutes),OPTIONS);
      console.log(response.data);
      return response.data;
    } else if (method.toLowerCase() === "delete") {
      const response = await axios.delete(BASE_QUERY.concat(apiRoutes),OPTIONS);
      console.log(response.data[0]);
      return response.data;
    }
  } catch (error) {
    console.error("Error: ", error);
  }
};

export default fetchData;
