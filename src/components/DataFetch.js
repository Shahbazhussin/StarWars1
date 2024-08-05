import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import Modal from './Modal';
import Loader from './Loader';

function DataFetch() {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setCharacters(data.results);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const handleClick = (character) => {
        setSelectedCharacter(character);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedCharacter(null);
    };

    if (loading) return <Loader />;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <div className="character-list">
                {characters.map((character, index) => (
                    <CharacterCard
                        key={index}
                        character={character}
                        onClick={() => handleClick(character)}
                    />
                ))}
            </div>
            {showModal && selectedCharacter && (
                <Modal character={selectedCharacter} closeModal={closeModal} />
            )}
        </div>
    );
}

export default DataFetch;
