import Pet from './Pet'

const Results = ({ pets }) => {
    return (
        <div className='grid gap-4 grid-cols-8 sm:grid-cols-2 lg:grid-cols-3'>
            {!pets.length ? (
                <h1>No Pets Found</h1>
            ) : (
                pets.map((pet) => {
                    return (
                        <Pet
                            animal={pet.animal}
                            breed={pet.breed}
                            name={pet.name}
                            images={pet.images}
                            location={`${pet.city}, ${pet.state}`}
                            key={pet.id}
                            id={pet.id}
                        />
                    );
                })
            )}
        </div>
    )
}

export default Results