import { useEffect, useState } from 'react';

export default function Footer() {
    const [pageVisits, setPageVisits] = useState('')

    useEffect(() => {
        fetch('https://api.countapi.xyz/update/ay4codes/ay4codes/?amount=1')
        .then((res) => res.json())
        .then((result) => {
            setPageVisits(result.value)
        })
    }, [])
    return (
        <div className='footer-wrapper'>
            <p>© 2022 Ayomide Ishola.</p>
            <span>Site stats -- {pageVisits}</span>
        </div>
    )
}