const URL = 'https://restcountries.com/v3.1/name'

export { fetchCountries };

function fetchCountries(name) {
    return fetch(`${URL}/${name}?fields=name,capital,population,flags,languages`)
        .then(responce => {
            if (!responce.ok) {
                throw new Error(responce.status);
            }
            return responce.json();
        })
};