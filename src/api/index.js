/**
 * 
 * @param {*} options
 * @param {number} options.page 
 * @param {number} options.results 
 * @param {string} options.format 
 * @returns 
 */
export const getUsers = (options = {}) => {
    const {currentPage=1, results=2, format='json'} = options;
    return fetch(`https://randomuser.me/api/?format=${format}?results=${results}&page=${currentPage}&seed=users`)
    .then((response) => response.json());
}