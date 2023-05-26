import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Carousel from "./Carousel";
import fetchPet from "./fetchPet";

const Details = () => {
    const { id } = useParams();
    //fetchPet is id does not exist in cache
    const results = useQuery(["details", id], fetchPet);

    if (results.isLoading) {
        return (
            <div className="loading-pane">
                <h2 className="loader">🎃</h2>
            </div>
        )
    }

    const pet = results.data.pets[0];

    return (
        <div className="details">
            <Carousel images={pet.images} />
            <div>
                <h1>{pet.name}</h1>
                <h2>{pet.animal} - {pet.breed} - {pet.city},{pet.state}</h2>
                <button>Adopt</button>
                <p>{pet.description}</p>
            </div>
        </div>
    )
};

export default Details;