export const fetchCombinedContacts = async (numberOfPages) => {
    const baseURL = "https://rickandmortyapi.com/api/character?page=";
    const urls = Array.from(
        { length: numberOfPages },
        (_, i) => baseURL + (i + 1)
    );

    const responses = await Promise.all(urls.map((url) => fetch(url)));

    const data = await Promise.all(
        responses.map((response) => response.json())
    );

    const results = data.map((obj) => obj.results);

    const combinedResults = results.reduce(
        (accumulator, current) => [...accumulator, ...current],
        []
    );

    return combinedResults;
};

export const fetchContact = async (contactId) => {
    const response = await fetch(
        `https://rickandmortyapi.com/api/character/${contactId}`
    );
    const data = await response.json();

    return data;
};

export const fetchEpisode = async (episodeNumber) => {
    const response = await fetch(
        `https://rickandmortyapi.com/api/episode/${episodeNumber}`
    );
    const data = await response.json();

    return data;
};

export const getEpisodeNumbers = (episode) => {
    return episode.map((url) => url.split("/").pop()).join(",");
};
