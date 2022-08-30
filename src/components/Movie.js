import  propTypes  from "prop-types";
import { Link } from "react-router-dom";

//Props !! : Movie component가 부모로부터 coverImg, title, summary, genres에 대한 정보를 받아옴! 
function Movie({ id, coverImg, title, summary, genres }) {
    return (
    <div className="container">
        <img src={coverImg} alt={title} />
        <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary}</p>
        <ul>
            {genres.map((g) => (
            <li key={g}>{g}</li>
            ))}
        </ul>
    </div>
    );
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    coverImg: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired,
}

export default Movie;