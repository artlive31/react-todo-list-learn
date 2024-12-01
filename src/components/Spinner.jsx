import { BeatLoader } from "react-spinners";

const Spinner = ({ loading }) => {
  return (
    <BeatLoader
      color="#3b82f6"
      size={20}
      cssOverride={{ margin: "48px", textAlign: "center" }}
      loading={loading}
    />
  );
};

export default Spinner;
