import Article from "./Article";

const News = (props) => {
    return (
        <div className="row">
            { props.news.articles.map(article => (
                <Article
                    key={article.url}
                    article={ article }
                />
            )) }
        </div>
    );
};

export default News;