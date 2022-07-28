import { ProfileProps } from "../types/Profile";

const Profile = ({ name, age }: ProfileProps) => {
  return (
    <>
      <div>
        <div>{name}</div>
        <div>{age}</div>
      </div>
    </>
  );
};

export default Profile;
