import { useEffect, useState } from 'react';

export default function Footer({pageVisits}) {
    useEffect(() => {
        console.log(pageVisits);
    })
    return (
        <div className='footer-wrapper'>
            <p>© {new Date().getFullYear()} Ayomide Ishola.</p>
            <span>Site stats -- {pageVisits}</span>
        </div>
    )
}