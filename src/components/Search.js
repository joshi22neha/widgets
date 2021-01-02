import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Search =() => {
    const [term,setTerm] = useState('');
    const [results,setResults] = useState([]);

    useEffect(()=>{
        const searchKeyword = async() => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params:{
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                },
            } );
            setResults(data.query.search);
        };
        const timeoutId= setTimeout(()=>{
            if(term){
            searchKeyword();
            }
        },500); // 500 ms timer

        return() => {
            clearTimeout(timeoutId);
        };
        
        
    }, [term] );

    const renderedList = results.map((result)=>{
        return(
        <div key={result.pageid} className='item' >
            <div className='right floated content'>
                <a className='ui button' href={`https://en.wikipedia.org?curid=${result.pageid}`} >Go</a>
            </div>
            <div className='content'>
                <div className='header'>
                    {result.title}
                </div>
                <span dangerouslySetInnerHTML = {{__html: result.snippet}}></span>
                
            </div>

        </div>);
    });

    return(
        <div>
            <div className='ui form'>
                <div className='ui field'>
                    <label> Enter Search term</label>
                    <input type='text' value={term} onChange={e => setTerm(e.target.value)} className='input' />
                </div>
            </div>
            <div className='ui celled list'>
                {renderedList}
            </div>
        </div>
    );
};

export default Search;