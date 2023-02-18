import { HomeData } from "../Lokesh_data/Lokesh_Data";
import { Home_Single_Card } from "./Home_Single_Card";

const Home_SinglePage_Element = (ele) => {

  return (
    <div data-testid="Home_page_data" style={{ display: "flex" }}>
      <div className="Home_SinglePage_Element_grid">
        {
          HomeData.map((elem, index) => {
            return (
              <div key={index}>
                <Home_Single_Card {...elem} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export { Home_SinglePage_Element };