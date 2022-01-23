import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import ExpenseService from '../services/ExpenseService';
import SeriesService from '../services/SeriesService';
import UserService from '../services/UserService';

const Main = ({ email }) => {
    let router = useRouter();
    const [value, setValue] = useState('Translation');
    const [id, setID] = useState(0);
    const [receipt, setReceipt] = useState('');
    const [series, setSeries] = useState(null);
    const [chapter, setChapter] = useState('');
    const [expenses, setExpenses] = useState(null);
    const [admin, setAdmin] = useState(false);


    const { register, handleSubmit } = useForm();
    const [result, setResult] = useState("");


    const fetchExpenses = async () => {
        try {
            let response = await ExpenseService.listExpensesByUser();
            setExpenses(response);
        } catch (e) {
            alert(e);
        }
    }

    const fetchSeries = async () => {
        try {
            let response = await SeriesService.getAll();
            setSeries(response);
            setID(response[0].id);
        } catch {
            console.log('An error occurred.');
        }
    }

    const isAdmin = async () => {
        try {
            let response = await UserService.isAdmin();
            setAdmin(response);
        } catch (err) {
            console.log(err);
        }
    }

    const CreateSeries = async (params) => {
        try {
            let response = await SeriesService.createSeries(params);
            if (response) {
                fetchSeries();
            } else {
                console.log('Something happened')
            }
        } catch (err) {
            console.log(err);
        }
    }



    useEffect(() => {
        isAdmin();
        fetchSeries();
        fetchExpenses();
    }, [])


    const createExpense = async () => {
        try {
            let response = await ExpenseService.createExpense({ type: value, series_id: id, comprovation: receipt, chapter_number: chapter });
            console.log(response);
            if (response) {
                await fetchExpenses();
            } else {
                alert('something has gone wrong')
            }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <div className="container mx-auto">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="expense-form gap-x-2">
                            {series &&
                                <select className="inline-block mb-5" id="series-select" value={id} onChange={(e) => setID(e.target.value)}>
                                    {series.map((series) => {
                                        return <option key={series.slug} value={series.id}>{series.name}</option>
                                    })}
                                </select>
                            }
                            <select className="inline-block mb-5" id="function-select" value={value} onChange={(e) => { setValue(e.target.value); console.log(value) }}>
                                <option value="Translation">TL</option>
                                <option value="Proofreading">PR</option>
                                <option value="Cleaning/redrawing">CLRD</option>
                                <option value="Typesetting">TS</option>
                            </select>
                            <input type="number" className="chapter-number block w-full mb-5" placeholder="Insert here the chapter number..." value={chapter} onChange={(event) => setChapter(event.target.value)} />
                            <input type="text" className="comprovante block w-full mb-5" placeholder="Insert here your receipt..." value={receipt} onChange={(event) => setReceipt(event.target.value)} />
                            <button type="submit" className="rounded w-full p-3 bg-stone-800 text-white" onClick={() => createExpense()}>Create new expense</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="expense-form gap-x-2">
                            <table className="tftable" border="1">
                                <thead>
                                    <tr>
                                        <th>Series</th>
                                        <th>Chapter</th>
                                        <th>Function</th>
                                        <th>Value per position</th>
                                        <th>Day</th>
                                    </tr>
                                </thead>
                                {series && expenses &&
                                    <tbody>
                                        {expenses.map((expense) => {
                                            let current = series.filter((series) => series.id === expense.series_id)
                                            current = current[0];
                                            return (
                                                <tr key={expense.id}>
                                                    <td>{current.name}</td>
                                                    <td>{expense.chapter_number}</td>
                                                    <td>{expense.type}</td>
                                                    <td>{expense.value}</td>
                                                    <td>Jan 21, 2022</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {admin &&
                <div className="container mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <div className="expense-form gap-x-2">
                                <form onSubmit={handleSubmit((data) => CreateSeries(data))}>
                                    <input {...register('name')} type="text" className="series-slug block w-full mb-5" placeholder="Insert here the series name..." />
                                    <input {...register('slug')} type="text" className="series-slug block w-full mb-5" placeholder="Insert here the series slug..." />
                                    <input {...register('tl_value')} type="number" className="tl-value block w-full mb-5" placeholder="Insert here the Translation Value..." />
                                    <input {...register('pr_value')} type="number" className="tl-value block w-full mb-5" placeholder="Insert here the Proofreading Value..." />
                                    <input {...register('clrd_value')} type="number" className="tl-value block w-full mb-5" placeholder="Insert here the Cl/Rd Value..." />
                                    <input {...register('ts_value')} type="number" className="tl-value block w-full mb-5" placeholder="Insert here the Typesetting Value..." />
                                    <button type="submit" className="rounded w-full p-3 bg-stone-800 text-white">Create new series</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}


export default Main;