import Head from 'next/head';
import Nav from './Nav';

const Master = (props) => (
    <div>
        <Head>
            <title>Bitcoin NextJS/React App</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css"/>
        </Head>

        <Nav/>
        <div className="container mt-5">
            { props.children }
        </div>
    </div>
);

export default Master;