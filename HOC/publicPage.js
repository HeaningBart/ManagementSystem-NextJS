import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const publicPage = (WrappedComponent) => {
    return (props) => {
        const [verified, setVerified] = useState(false);
        let router = useRouter();


        useEffect(() => {
            let token = localStorage.getItem('token');
            if (token) {
                setVerified(true);
                router.push('/')
            } else {
                setVerified(false);
            }
        })

        if (!verified) {
            return <WrappedComponent {...props} />
        } else {
            return null;
        }
    }
}

export default publicPage;