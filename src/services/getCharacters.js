export const getCharacterService = async(search) => {
    const res = await fetch(` https://rickandmortyapi.com/api/character/?name=${search}`)
    const data = await res.json()
    if(!data) return null
    //mapear
    const mappedData = data.results?.map(character => ({
        id: character.id,
        name: character.name,
        img: character.image,
        gender: character.gender,
        status: character.status,
        location: character.location.name,
        date: character.created
    }))
    return mappedData
}