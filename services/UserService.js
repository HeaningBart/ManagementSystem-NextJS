import Api from './api';

const UserService = {
    register: async (params) => {
        const response = await Api.post('/users/', params);
        return response.data;
    },
    login: async (params) => {
        const response = await Api.post('/users/login', params);
        return response.data;
    },

    isAdmin: async () => {
        const response = await Api.post('/users/verify', {}, {
            headers: {
                'x-access-token': localStorage.getItem('token'),
            }
        })
        return response.data.admin;
    }
}

export default UserService;