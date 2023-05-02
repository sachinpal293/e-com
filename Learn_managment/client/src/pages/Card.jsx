import {Link} from 'react-router-dom'
const Card = (props) => {
  return (
    <>    
    <Link to="/course">
    
      <div className="cards">
        <div className=" card1 kuch">
          <span className="">
            <img src={props.src} class="  card__img" />
          </span>
          <span className="card__info">
            <p>{props.title}</p>
            <div>{props.sname}</div>
            </span>
        </div>
      </div>
      </Link>
    </>
  );
};

export default Card;
