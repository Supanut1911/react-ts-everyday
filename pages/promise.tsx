import { useEffect, useState } from "react";

const PromiseX = () => {
  const api = (id: string) => {
    return new Promise<string>((resolve, reject) => {});
  };

  //create custom hook from api
  const useData = (id: string) => {
    const [data, setData] = useState<number>();
    useEffect(() => {
      (async () => {
        setData(Number(await api(id)));
      })();
    }, [id]);
    return data;
  };

  return (
    <>
      <div>hi</div>
    </>
  );
};

export default PromiseX;
