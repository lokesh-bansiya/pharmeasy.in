import "./Home_Styles/Home_Single_Card.css";
import { useNavigate,Link } from "react-router-dom";


const Home_Single_Card = ({...elem}) => {
    const navigate=useNavigate();
    const {id,img1,title,mrp,strike,discount} = elem;
    const StoreAtLocalStorage=()=>{
        localStorage.setItem("singleProductdata",JSON.stringify(elem));
        // console.log(elem);
    }


    return (
        <Link to="/singleproduct"><div key={id} onClick={StoreAtLocalStorage} className="Home_Single_Card_Item">
            <div>
                <img src={img1} alt={title} />
            </div>
            <div>
                <p>{title}</p>
                <p>MRP <span>₹{strike}</span></p>
                <p>₹{mrp} <span>{discount}% OFF</span></p>
            </div>
        </div></Link>
    );
}

export {Home_Single_Card};