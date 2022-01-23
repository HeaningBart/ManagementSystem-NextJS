import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
    const router = useRouter();
    const location = router.pathname;

    useEffect(() => {
        window.scrollTo(0, 0);
        console.log(location)
    }, [location])

    return <>{children}</>
}