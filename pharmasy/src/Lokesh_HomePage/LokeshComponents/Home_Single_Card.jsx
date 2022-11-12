import "./Home_Styles/Home_Single_Card.css";

const Home_Single_Card = ({id,img1,title,mrp,strike,discount}) => {


    return (
        <div key={id} className="Home_Single_Card_Item">
            <div>
                <img src={img1} alt={title} />
            </div>
            <div>
                <p>{title}</p>
                <p>MRP <span>₹{strike}</span></p>
                <p>₹{mrp} <span>{discount}% OFF</span></p>
            </div>
        </div>
    );
}

export {Home_Single_Card};
