import "./Home_Styles/Lokesh_Second_Single_Card.css";

const Lokesh_Second_Single_Card = ({id,img1,title,mrp,strike,discount}) => {

    const StoreAtLocalStorage=(ele)=>{
        localStorage.setItem("singleProductdata",JSON.stringify(ele));
    }

    return (
        <div onClick={()=> StoreAtLocalStorage(id)} key={id} className="Lokesh_Second_Single_Car_Item">
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

export {Lokesh_Second_Single_Card};
