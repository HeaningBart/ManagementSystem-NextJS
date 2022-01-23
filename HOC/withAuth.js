import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent) => {
    let authorized = false;
    let name = "gustavo";
    return (props) => {
        const [verified, setVerified] = useState(false);
        let router = useRouter();


        useEffect(() => {
            let token = localStorage.getItem('user');
            if (token) {
                setVerified(true);
            } else {
                setVerified(false);
                router.push('/login')
            }
        })


        if (verified) {
            return <WrappedComponent name={name} {...props} />
        } else {
            return null;
        }
    }
}

export default withAuth;