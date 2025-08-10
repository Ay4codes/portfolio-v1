export default function Footer({pageVisits}) {
    return (
        <div className='footer-wrapper'>
            <p>© {new Date().getFullYear()} Ayomide Ishola.</p>
            {/* <span>Site stats - {pageVisits}</span> */}
        </div>
    )
}