import MasterPage from '../components/Master';
import fetch from 'isomorphic-unfetch';

const Index = (props) => (
    <MasterPage>
        <div className="row">
            <div className="col-12">
                <h2>Bitcoin Price</h2>
                { console.log(props) }
            </div>

            <div className="col-md-8">
                <h2>Bitcoin News</h2>
            </div>
            <div className="col-md-4">
                <h2>Bitcoin Future Events</h2>
            </div>
        </div>
    </MasterPage>
);

Index.getInitialProps = async () => {
    const price = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD');
    const resp = await price.json();

    return {
        priceBitcoin: resp.DISPLAY.BTC.USD
    }
}

export default Index;