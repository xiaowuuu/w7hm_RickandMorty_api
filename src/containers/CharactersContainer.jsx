import { useState, useEffect } from "react";

const CharactersContainer = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            let allCharacters = [];
            let currentPage = 1;
            let totalPages = 42;
            while (currentPage <= totalPages) {
                const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`);
                const data = await response.json();
                allCharacters = [...allCharacters, ...data.results];
                totalPages = data.info.pages;
                currentPage++;
            }
            setCharacters(allCharacters);
        };
        fetchCharacters();
    }, []);
    return (
        <div>
            <h1>Rick and Morty Characters</h1>
            <ul type="none">
                {characters.map((character) => (
                    <li key={character.id}>{character.name}</li>
                ))}
                
            </ul>
        </div>
    )
}
export default CharactersContainer;