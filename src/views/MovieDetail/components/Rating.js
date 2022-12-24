import yellowStar from "../../../assets/yellow-star.png";

const Rating = ({rating}) => {
  return (
    <div className="flex flex-row my-1 items-center">
        <span className="text-xl font-bold w-full">{rating}</span>
        <img className="ml-1 w-6 h-6" src={yellowStar} alt=""/>
    </div>
  )
}

export default Rating