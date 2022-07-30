// enum Colors {
//   RED = "red",
//   WHITE = "white",
// }

//not use enum

const Colors = {
  Red: "red",
  White: "white",
} as const;
type Colors = typeof Colors[keyof typeof Colors];

type Props = {
  // color: Colors;
  //   color: "red" | "white" | "blue";
  color: Colors;
};

const ExampeComponent = ({ color }: Props) => {
  if (color === Colors.Red) {
    return <div>Red</div>;
  }

  return <div>not red</div>;
};

const EnumX = () => {
  return (
    <>
      <div>
        <ExampeComponent color={Colors.RED} />
      </div>
    </>
  );
};

export default EnumX;
