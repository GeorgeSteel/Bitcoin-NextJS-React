const Article = (props) => {
    const { urlToImage, url, description, source, title } = props.article;
    let img;

    if(urlToImage !== ''){
        img = <div className="card-image">
                    <img src={urlToImage} alt={title} className="card-img-top"/>
                </div> ;
    } else {
        img = null;
    }

    
    return (
        <div className="col-md-6 col-12 mb-4">
            <div className="card">
                { img }
                <div className="card-body">
                    <h3 className="card-title">{ title }</h3>
                    <p className="card-text">{ description }</p>
                    <p className="card-text">{ source.name }</p>
                    <a href={ url } target="__blank" className="btn btn-success d-block">Read</a>
                </div>
            </div>
        </div>
    );
};

export default Article;