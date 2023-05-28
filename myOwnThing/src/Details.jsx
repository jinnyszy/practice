import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Carousel from "./Carousel";
import fetchPet from "./fetchPet";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";
import AdoptedPetContext from "./AdoptedPageContext";

const Details = () => {
    const { id } = useParams();
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [_, setAdoptedPet] = useContext(AdoptedPetContext);
    //fetchPet if id does not exist in cache
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
                <button onClick={() => setShowModal(true)}>Adopt</button>
                <p>{pet.description}</p>
                {
                    showModal ? (
                        <Modal>
                            <div>
                                <h1>Would you like to adopt {pet.name}?</h1>
                                <div className="buttons">
                                    <button onClick={() => {
                                        setAdoptedPet(pet);
                                        navigate("/");
                                    }}>YES</button>
                                    <button onClick={() => setShowModal(false)}>NO</button>
                                </div>
                            </div>
                        </Modal>
                    ) : null
                }
            </div>
        </div>
    )
};

function DetailsErrorBoundary() {
    return (
        <ErrorBoundary errorMsg={<h2>haha error</h2>}>
            <Details />
        </ErrorBoundary>
    )
}

export default DetailsErrorBoundary;