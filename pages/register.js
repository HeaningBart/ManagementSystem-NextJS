import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../styles/Default.module.scss';
import Layout from '../components/layout.js'
import publicPage from '../HOC/publicPage';
import UserService from '../services/UserService';



const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    let router = useRouter();

    const Register = async (name, email, password) => {
        const response = await UserService.register({ name, email, password });
        if (response) {
            router.push('/login');
        } else {
            alert('Something has gone wrong.')
        }
    }


    return (
        <>
            <Layout>
                <Head>
                    <title>Página de Registro</title>
                </Head>
                <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
                    <div className="container mx-auto">
                        <div className="grid grid-cols-12">
                            <div className="lg:col-span-4 col-span-0">

                            </div>
                            <div className="lg:col-span-4 col-span-10">
                                <div className={styles.loginCard}>
                                    <div className="basis-full text-center">
                                        <h3 className="block">Login</h3>
                                    </div>
                                    <h6 className="text-center font-bold mb-3 block">Your name</h6>
                                    <input placeholder="Your name..." className="block mb-5 w-full custom-input" type="text" autoComplete='false' autoSave='false' value={name} onChange={(e) => setName(e.target.value)} />
                                    <h6 className="text-center font-bold mb-3 block">Your e-mail</h6>
                                    <input placeholder="Your e-mail..." className="block mb-5 w-full custom-input" type="text" autoComplete='false' autoSave='false' value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <h6 className="text-center font-bold mb-3">Your password</h6>
                                    <input placeholder="Your password..." className="block mb-5 w-full custom-input" type="password" autoComplete='false' autoSave='false' value={password} onChange={(e) => setPass(e.target.value)} />
                                    <button className="submit-button" onClick={() => Register(name, email, password)}>Register</button>
                                    <button className="submit-button" onClick={() => router.push('/login')}>Go to login.</button>
                                </div>
                            </div>
                            <div className="lg:col-span-4 col-span-0">

                            </div>

                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}


export default publicPage(RegisterPage);