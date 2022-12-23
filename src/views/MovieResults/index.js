import { useParams } from "react-router-dom";
import moviesImage from "../../assets/movie-theater.png"

const MovieResults = () => {
    const { title } = useParams();

    return (
        <div className="flex flex-row">
            <div className="w-3/5">
                
            </div>
            <div className="w-2/5">
                <img src={moviesImage} alt="Movies" className="w-full h-screen object-cover"/>
            </div>
        </div>
    );
}

export default MovieResults;