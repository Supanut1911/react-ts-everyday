import { UserLog } from "../../types/User";

const getUsername: UserLog = (): React.ReactNode => {
  return "string";
};

const Strc = () => {
  return (
    <>
      <div>hi</div>
      <div>{getUsername}</div>
    </>
  );
};

export default Strc;
