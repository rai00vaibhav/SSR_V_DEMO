import Navbar from './navbar';
import Head from 'next/head';

const Layout = (props) => (
    <div>
        <Head>
            <title>SSR Demo</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/cosmo/bootstrap.min.css"/>
        </Head>
        <Navbar/>
        <div>
            {props.children}
        </div>
    </div>
)
export default Layout;