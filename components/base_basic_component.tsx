import { ProfileProps } from "../types/Profile";

const BaseBasicComponent = ({ name, age }: ProfileProps) => {
  return (
    <>
      <div>
        <div>{name}</div>
        <div>{age}</div>
      </div>
    </>
  );
};

export default BaseBasicComponent;
