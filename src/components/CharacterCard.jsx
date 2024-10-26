
export const CharacterCard = ({ character }) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg w-full" src={character.img} alt={character.name} />
            </a>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{character.name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Status: {character.status}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Gender: {character.gender}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location: {character.location}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Date of creation: {character.date}</p>
            </div>
        </div>
    )
}
