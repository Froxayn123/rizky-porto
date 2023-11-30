import { useState } from "react";

const Dot = (props) => {
  const dotStyle = `m-2 ${props.color} ${props.size} ${props.position} ${props.coor} ${props.width}  `;
  const titleStyle = [` font-frt text-sm`, `hidden`];

  const [hold, setHolder] = useState(false);

  return (
    <div>
      <div
        id={props.id}
        className={dotStyle}
        onMouseEnter={() => {
          setHolder(!hold);
        }}
        onMouseLeave={() => {
          setHolder();
        }}
      >
        <h1 className={hold ? titleStyle[0] : titleStyle[1]}>{props.title}</h1>
      </div>
    </div>
  );
};

export default Dot;
