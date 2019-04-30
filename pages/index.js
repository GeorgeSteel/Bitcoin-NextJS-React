import MasterPage from '../components/Master';

const Index = () => (
    <MasterPage>
        <div className="row">
            <div className="col-12">
                <h2>Bitcoin Price</h2>
            </div>

            <div className="col-md-8">
                <h2>Bitcoin News</h2>
            </div>
            <div className="col-md-4">
                <h2>Bitcoin Future Events</h2>
            </div>
        </div>
    </MasterPage>
)

export default Index;