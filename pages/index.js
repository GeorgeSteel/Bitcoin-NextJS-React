import MasterPage from '../components/Master';
import fetch from 'isomorphic-unfetch';
import Price from '../components/Price';
import News from '../components/News';

const Index = (props) => (
    <MasterPage>
        <div className="row">
            <div className="col-12">
                <h2>Bitcoin Price</h2>
                <Price
                    price={ props.priceBitcoin }
                />
            </div>

            <div className="col-md-8">
                <h2>Bitcoin News</h2>
                <News
                    news={ props.news }
                />
            </div>
            <div className="col-md-4">
                <h2>Bitcoin Future Events</h2>
            </div>
        </div>
    </MasterPage>
);

Index.getInitialProps = async () => {
    const price = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD');
    const news = await fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-03-30&sortBy=publishedAt&apiKey=2599b963f2b047bdbdc8da7d4ec77e7e');
    
    const respPrice = await price.json();
    const respNews = await news.json();


    return {
        priceBitcoin: respPrice.DISPLAY.BTC.USD,
        news: respNews
    }
}

export default Index;