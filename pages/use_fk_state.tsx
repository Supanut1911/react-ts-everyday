import { useEffect, useState } from "react";

//CASE 1 moreType issue

const UseFKState = () => {
  //auto infer type by tyescript
  const [bool, setBool] = useState(false);
  const [count, setCount] = useState(0);

  //specifix type by using generic
  const [boolOrNum, setBoolOrNum] = useState<boolean | number>();

  return (
    <>
      <div>
        <button onClick={() => setCount((c) => c + 1)}>inc</button>

        {/* <button onClick={() => setBoolOrNum((c) => c + 1)}>inc</button> */}
        <button
          onClick={() =>
            setBoolOrNum((c) => {
              if (typeof c === "number") {
                return (c += 1);
              }
            })
          }
        >
          inc
        </button>
      </div>
    </>
  );
};

//CASE 2 array type issue
interface Items {
  id: number;
  name: string;
}

const Issue_array = () => {
  //issue with array => need to fix generic type
  // array Items object
  const [data, setData] = useState<Items[]>([]);

  useEffect(() => {
    setData([
      {
        id: 1,
        name: "Dogo",
      },
    ]);
  }, []);

  return (
    <>
      <div>
        {data.map((d) => {
          return (
            <>
              <p>
                Item {d.id} is {d.name}
              </p>
            </>
          );
        })}
      </div>
    </>
  );
};

//CASE 3 fix data type maybe from fetch API

interface User {
  id: number;
  name: string;
}

const api = (): Promise<User> => {
  return Promise.resolve({
    id: 1,
    name: "John",
  });
};

// const api = (): Promise<User> => {
//   return fetch("someURL");
// };

const Fix_type = () => {
  const [data, setData] = useState<User | null>(null);

  useEffect(() => {
    //best pratices below there(Immediately-invoked Function Expressuion (IIFE)), so better than const api2 = async () => { setDate(await api()) }
    (async () => {
      setData(await api());
    })();
  }, []);
  console.log("data", data);

  if (data === null) {
    console.log(data);

    return <div>isLoading</div>;
  }

  return (
    <>
      <div>name: {data.name}</div>
    </>
  );
};

// export default UseFKState;
// export default Issue_array;
export default Fix_type;
