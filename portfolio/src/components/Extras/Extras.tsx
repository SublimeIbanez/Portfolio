import { Link } from "react-router-dom";


const Extras = () => {
    return (
        <div className="">
            <h2 className="font-extrabold text-3xl">EXTRAS</h2>
            <hr className="h-1 bg-gray-100 border-0 rounded dark:bg-gray-700" />

            <div className="ml-2 my-3">
                <Link to="/FauxHollows">
                    <h2 className="font-extrabold text-sky-600 text-2xl">Faux Hollows Solver</h2>
                </Link>
                <p className="text_entry">Generates solutions for the mini-game 'Faux Hollows' in the larger game Final Fantasy: XIV. Provides a game board to modify which will be used to filter out the non-relevant solutions.</p>
            </div>

        </div>
    );
}

export default Extras;
