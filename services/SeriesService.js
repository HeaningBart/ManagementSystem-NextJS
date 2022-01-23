import Api from './api';

const SeriesService = {

    createSeries: async (params) => {
        try {
            let response = await Api.post('/series', params, {
                headers: {
                    'x-access-token': localStorage.getItem('token')
                }
            })
            return response.data;
        } catch (err) {
            alert(err);
        }
    },

    getAll: async () => {
        const response = await Api.get('/series');
        return response.data;
    },
}

export default SeriesService;