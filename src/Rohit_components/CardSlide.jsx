import "./cardslide.css"
import Card from "./card";

const CardSlide = ({data}) => {
  return (
    <div id="card-slide-div">
      {data.map((ele) => {
        return <Card key={ele.productId} ele={ele}  />;
      })}
    </div>
  );
};

export default CardSlide;
