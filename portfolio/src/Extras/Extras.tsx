import { Link } from "react-router-dom";


const Extras = () => {
    return (
        <div className="">
            <h2 className="font-extrabold text-3xl">EXTRAS</h2>
            <hr className="h-1 bg-gray-100 border-0 rounded dark:bg-gray-700" />
            <Link to="/FauxHollows">
                Faux Hollows Solver
            </Link>

        </div>
    );
}

export default Extras;
