import React, { useState, useEffect } from 'react';
import './Modal.css';
import { format } from 'date-fns';

function Modal({ character, closeModal }) {
    const [homeworld, setHomeworld] = useState(null);

    useEffect(() => {
        fetch(character.homeworld)
            .then(response => response.json())
            .then(data => setHomeworld(data))
            .catch(err => console.log(err));
    }, [character.homeworld]);

    const formatDate = (dateString) => {
        return format(new Date(dateString), 'dd-mm-yyyy');
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={closeModal}>X</button>
                <h2>{character.name}</h2>
                <p><strong>Height:</strong> {character.height} meters</p>
                <p><strong>Mass:</strong> {character.mass} kg</p>
                <p><strong>Date Added:</strong> {formatDate(character.created)}</p>
                <p><strong>Number of Films:</strong> {character.films.length}</p>
                <p><strong>Birth Year:</strong> {character.birth_year}</p>
                {homeworld && (
                    <div>
                        <h3>Homeworld</h3>
                        <p><strong>Name:</strong> {homeworld.name}</p>
                        <p><strong>Terrain:</strong> {homeworld.terrain}</p>
                        <p><strong>Climate:</strong> {homeworld.climate}</p>
                        <p><strong>Residents:</strong> {homeworld.residents.length}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Modal;
