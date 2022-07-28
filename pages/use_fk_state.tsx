import { useEffect, useState } from "react";

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

export default Issue_array;

// export default UseFKState;
