import Link from 'next/link';
const Navbar = () => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{justifyContent:"space-between"}}>
            <Link href="/"><a className="ssr-link">Navbar</a></Link>
            <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link href="/"><a className="ssr-link">Home</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/route"><a className="ssr-link">Route</a></Link>
                    </li>
                </ul>
            </div>
        </nav>    
        <style jsx>
            {`
                .ssr-link {
                    color:#fff;
                    padding:10px;
                }
            `}
        </style>
    </div>
);
export default Navbar;