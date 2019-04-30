

const Price = (props) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = props.price;

    return (
        <div className="card text-white bg-success mb-3">
            <div className="card-header">Bitcoin Price</div>
            <div className="card-body">
                <h4 className="card-title">Current Price: <span className="font-weight-bold">{ PRICE } USD</span></h4>
                <div className="d-md-flex justify-content-between">
                    <p className="card-text">
                        <span className="font-weight-bold">
                            Highest price today: 
                        </span>
                        { HIGHDAY }
                    </p>
                    <p className="card-text">
                        <span className="font-weight-bold">
                            Lowest price today: 
                        </span>
                        { LOWDAY }
                    </p>
                    <p className="card-text">
                        <span className="font-weight-bold">
                            Change last 24h: 
                        </span>
                        { CHANGEPCT24HOUR }%
                    </p>
                    <p className="card-text">
                        <span className="font-weight-bold">
                            Last Update: 
                        </span>
                        { LASTUPDATE }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Price;