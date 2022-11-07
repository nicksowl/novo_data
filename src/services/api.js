import axios from 'axios';

const customUrl = 'https://type.fit/api/quotes/'

export default (url=customUrl) => {
    return axios.create({
        baseURL: url
    })
}

