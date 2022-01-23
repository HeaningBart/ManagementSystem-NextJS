import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../styles/Default.module.scss';
import Layout from '../components/layout.js'
import Image from 'next/image';
import logo from '../public/images/logo.png'



const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    let router = useRouter();

    const createToken = () => {
        localStorage.setItem('user', 'heaningtest');
        router.push('/')
    }



    return (
        <>
            <Layout>
                <Head>
                    <title>Página de Login</title>
                </Head>
                <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
                    <div className="container mx-auto">
                        <div className="grid grid-cols-12">
                            <div className="lg:col-span-4 col-span-0">

                            </div>
                            <div className="lg:col-span-4 col-span-10">
                                <div className={styles.loginCard}>
                                    <div className="image-container flex justify-center p-5">
                                        <Image className="block" src={logo} height={300} />
                                    </div>
                                    <h6 className="text-center font-bold mb-3">Your e-mail</h6>
                                    <input placeholder="Your e-mail..." className="block mb-5 w-full custom-input" type="text" autoComplete='false' autoSave='false' value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <h6 className="text-center font-bold mb-3">Your password</h6>
                                    <input placeholder="Your password..." className="block mb-5 w-full custom-input" type="password" autoComplete='false' autoSave='false' value={password} onChange={(e) => setPass(e.target.value)} />
                                    <button className="submit-button" onClick={() => createToken()}>Login</button>
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


export default LoginPage;