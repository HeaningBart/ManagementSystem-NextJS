import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent) => {
    return (props) => {
        const [verified, setVerified] = useState(false);
        let router = useRouter();


        useEffect(() => {
            let token = localStorage.getItem('token');
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