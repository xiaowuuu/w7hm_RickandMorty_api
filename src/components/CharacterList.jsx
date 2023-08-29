import { styled } from "styled-components";
import CharacterItem from "./CharacterItem"

const CharacterList = ({ results }) => {
    const characterList = results.map((character) => <CharacterItem characterItem={character} />)
    return (
        <>
            {characterList}
        </>
    )
}

export default CharacterList