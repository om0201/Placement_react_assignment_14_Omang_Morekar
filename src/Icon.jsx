import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return <FaRegCircle className="icon" />;

    case "cross":
      return <FaTimes className="icon" />;

    default:
      return <FaPen className="icon" />;
  }
};

export default Icon;
