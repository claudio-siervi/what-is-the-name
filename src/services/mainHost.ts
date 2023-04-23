import axios from 'axios';

export default axios.create({
    baseURL: 'https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking',
    headers: {
        'Content-type': 'application/json'
    }
});