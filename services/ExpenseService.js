import Api from './api';

const ExpenseService = {

    listExpensesByUser: async () => {
        const response = await Api.get('/expenses/all', {}, {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        });
        return response.data;
    },

    createExpense: async (params) => {
        const response = await Api.post('/expenses/create', params, {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        });
        return response.data;
    },

    deleteExpense: async (id) => {
        try {
            const response = await Api.delete('/expenses/delete', id, {
                headers: {
                    'x-access-token': localStorage.getItem('token')
                }
            });
            return response.data;
        } catch (error) {
            alert(error);
        }
    }
}

export default ExpenseService;



