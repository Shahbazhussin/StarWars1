import React from 'react';
import './CharacterCard.css'; 

const colors = {
    'color1': '#f0f0f0',
    'color2': '#c0c0c0',

};

function CharacterCard({ character, onClick }) {
   // console.log(character.species.length);
    const species = character.species.length ? 'color1' : 'color2';


    return (
        <div
            className="character-card"
            style={{ backgroundColor: colors[species] || '#ffffff' }}
            onClick={onClick}
        >
            <img src={`https://picsum.photos/200?random=${Math.floor(Math.random() * 100)}`} alt={character.name} />
            <h3>{character.name}</h3>
        </div>
    );
}

export default CharacterCard;
