import React, { useState, useEffect } from 'react';
import twitterIcon from '../twitter.svg';
import tumblrIcon from '../tumblr.svg';
import axios from 'axios';

function Quotes() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getQuote()
  }, []);

  const getQuote = () => {
    axios.get(`https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`)
      .then(res => {
        let dataQuotes = res.data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      });
  }

  const handleClick = () => {
    getQuote();
  }

  return (
    <div id="quote-box">
      <div id="text"><p>{quote}</p></div>
      <div id="author"><p>- {author}</p></div>

      <div id="buttons">
        <div className="social-media">
          <a href="https://twitter.com/" id="twet-quote">
            <span><img src={twitterIcon} alt="" /></span>
          </a>
          <a href="https://www.tumblr.com" id="tumlr-quote">
            <span><img src={tumblrIcon} alt="" /></span>
          </a>
        </div>
        <button onClick={handleClick} id="new-quote">New Quote</button>
      </div>
    </div>
  )
}
export default Quotes;