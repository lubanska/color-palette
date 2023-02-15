import { useEffect, useState } from "react";

export function useColorName(hex: string): string {
  const [data, setData] = useState<any>();

  const endpoint = "https://www.thecolorapi.com/";
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${endpoint}id?hex=${hex}&format=json`,
        options
      );
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, [hex]);

  if (!data) return "";

  return data.name.value;
}
