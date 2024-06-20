import { Lokesh_Second_Data } from "../Lokesh_data/Lokesh_Second_Data";
import { Lokesh_Second_Single_Card } from "./Lokesh_Second_Single_Card";

const Lokesh_Second_Data_Card_Element = () => {
  return (
    <div>
      <div className="Lokesh_Second_Single_SinglePage_Element_grid">
        {Lokesh_Second_Data.map((elem) => {
          return (
            <div key={elem.id}>
              <Lokesh_Second_Single_Card {...elem} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Lokesh_Second_Data_Card_Element };
