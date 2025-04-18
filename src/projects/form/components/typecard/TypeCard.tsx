
import { FiUser } from "react-icons/fi";
import { FaUserFriends } from "react-icons/fa";
import "./TypeCard.css";


interface TypeCardProps {
  type: string;
}
const TypeCard = ({type}:TypeCardProps) => {

   const displayType = type === "solo" ? " I'm a solo user":"I'm part of a team";
    const displayDescription = type === "solo" ? "I need to set up an account for myself." : "I need to set up an account for my team.";
  return (
    <>
      <div className="user-type">
            <div className="icon-container">
              {type === "solo" && <FiUser color="white" size={30} className="user-icon" />}
              {type === "team" && <FaUserFriends color="white" size={30} className="user-icon"/>}
            </div>
            <div className="user-description">
              <h2>{displayType}</h2>
              <p>{displayDescription}</p>
            </div>
          </div>
    
    </>
  );
};

export default TypeCard;
