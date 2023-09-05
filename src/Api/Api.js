import axios from "axios";






const api = axios.create({
    baseURL: 'https://64c2579deb7fd5d6ebcfa937.mockapi.io/'
})

const Api = {
    getHouses: () => api.get('house1'),
    deleteHouse: (id) => api.delete('house1/' + id),
    createHouse: (data) => api.post('house1', data),
    getHouseById: (id) => api.get('house1/' + id)
}

export default Api