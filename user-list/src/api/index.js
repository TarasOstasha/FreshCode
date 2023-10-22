import queryString from 'query-string'; // npm module to create query string
import CONFIGS from './config/index'


export function loadUsers(options) {
    const defaultOptions = {
        page: 1,
        results: 10,
        baseUrl: CONFIGS.BASE_URL,
        seed: CONFIGS.RESULTS_ORDER
    };
    const { baseUrl,...realOptions } = {
        ...defaultOptions, 
        ...options
    }
    // return fetch(`${realOptions.baseUrl}?results=${realOptions.results}&page=${realOptions.page}&seed=${realOptions.resultsOrder}`)
    //     .then((res) => res.json())
    return fetch(`${baseUrl}?${queryString.stringify(realOptions)}`).then((res) => res.json())
}

