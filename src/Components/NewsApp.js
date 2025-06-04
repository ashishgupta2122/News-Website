import React, { useState } from 'react';
import './NewsApp.css';
import Card from './Card';

function NewsApp() {
    const [search, setSearch] = useState("Tesla");
    const [articles, setArticles] = useState([]);

    // Function to fetch news data
    async function fetchData() {
        try {
            const response = await fetch(
                `https://newsapi.org/v2/everything?q=${search}&from=2025-04-30&sortBy=publishedAt&apiKey=cce2917b0c1143f5b1ab6c14a068ad31`
            );
            const jsonData = await response.json();
            console.log(jsonData);
            setArticles(jsonData.articles); // store articles in state
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    }

    // Handle input change
    function handleInput(event) {
        setSearch(event.target.value);
    }

    return (
        <div>
            <nav>
                <div>
                    <h1>News App</h1>
                </div>
                <ul>
                    <a href="#">All News</a>
                    <a href="#">Trending</a>
                </ul>
                <div className='searchBar'>
                    <input
                        type="text"
                        placeholder="Search news..."
                        onChange={handleInput}
                        value={search}
                    />
                    <button onClick={fetchData}>Search</button>
                </div>
            </nav>

            <div>
                <p className='titleTrend'>Stay Updated with Trendy News</p>
            </div>

            <div className='categoryBtn'>
                <button onClick={() => setSearch("World")}>World</button>
                <button onClick={() => setSearch("Technology")}>Technology</button>
                <button onClick={() => setSearch("Sports")}>Sports</button>
                <button onClick={() => setSearch("Entertainment")}>Entertainment</button>
                <button onClick={() => setSearch("Health")}>Health</button>
            </div>

            <div className="card-wrapper">
                {articles.length > 0 ? (
                    articles.map((article, index) => (
                        <Card
                            key={index}
                            title={article.title}
                            description={article.description}
                            image={article.urlToImage}
                            url={article.url}
                        />
                    ))
                ) : (
                    <p style={{ textAlign: "center", marginTop: "2rem" }}>No articles yet. Try a search.</p>
                )}
            </div>
        </div>
    );
}

export default NewsApp;

