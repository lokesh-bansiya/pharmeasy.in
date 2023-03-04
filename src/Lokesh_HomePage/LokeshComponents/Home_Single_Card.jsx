import "./Home_Styles/Home_Single_Card.css";
import { Link } from "react-router-dom";

const Home_Single_Card = ({ ...elem }) => {
  const { id, img1, title, mrp, strike, discount } = elem;

  return (
    <Link to="/product">
      <div
        key={id}
        className="Home_Single_Card_Item"
      >
        <div>
          <img src={img1} alt={title} />
        </div>
        <div>
          <p>{title}</p>
          <p>
            MRP <span>₹{strike}</span>
          </p>
          <p>
            ₹{mrp} <span>{discount}% OFF</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export { Home_Single_Card };
