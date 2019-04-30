import Link from 'next/link';

const Nav = (props) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <Link href="/"><a className="navbar-brand">AllBitcoin</a></Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link href="/"><a className="nav-link">Home</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about"><a className="nav-link">About</a></Link>
                    </li>
                </ul>
            </div>
        </div>        
    </nav>
              
);

export default Nav;