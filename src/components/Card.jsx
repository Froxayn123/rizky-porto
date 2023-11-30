import Dot from "./Dot";

const Card = (props) => {
  const cardStyle = `m-5 me-10 max-md:me-5 p-4 ${props.size} rounded-xl shadow-lg transition hover:shadow-2xl flex  justify-center items-center`;
  const titleStyle = "font-sec font-bold mt-2 text-xl";
  const descStyle = "font-sec text-sm";

  return (
    <div>
      <div className={cardStyle}>
        <a href={props.link}>
          <div className="flex justify-center items-center">
            <img src={props.img} alt={props.alt} className={props.sizeImg} />
          </div>
          <div>
            <h1 className={titleStyle}>{props.title}</h1>
            <div className="flex justify-center items-center">
              {props.items === 3 ? (
                <div className="flex">
                  <Dot size={props.sizeSkillDot} width={props.widthSkillDot} color={props.color} />
                  <Dot size={props.sizeSkillDot} width={props.widthSkillDot} color={props.color} />
                  <Dot size={props.sizeSkillDot} width={props.widthSkillDot} color={props.color} />
                </div>
              ) : (
                <div className="flex">
                  <Dot size={props.sizeSkillDot} width={props.widthSkillDot} color={props.color} /> <Dot size={props.sizeSkillDot} width={props.widthSkillDot} color={props.color} />
                </div>
              )}
            </div>
            <p className={descStyle}>{props.desc}</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;
