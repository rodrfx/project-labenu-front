import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          authorization: localStorage.getItem('token')
        }
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
        console.log("Ocorreu um erro, tente novamente");
      });
  }, [url]);

  return [data];
};

export default useRequestData;