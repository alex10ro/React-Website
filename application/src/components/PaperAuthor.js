/**
 * Author page component
 * 
 * This page will show information about authors
 * 
 * @author Cristian Mitoi
 */

import React, { useState} from 'react';
import AuthorAffiliation from './Affiliation';
import './Conferences.css'
 
function PaperAuthor(props) {
 
    const [authors, setAuthors] = useState([]);
    const [visible, toggleVisible] = useState(false);
    const [loading, setLoading] = useState(true);
 
    //fetch helps to not load many things at once
    const fetchAuthors = () => {
        fetch("http://unn-w20010102.newnumyspace.co.uk/kf6012/assessment/api/authors?paper_id="+props.paper_id)
        .then( 
            (response) => response.json()
        )
        .then( 
            (json) => {
                setLoading(false);
                setAuthors(json.data);
            } 
        )
        .catch((err) => {
            console.log(err.message);
        });
    };

 
    const listOfAuthors = 
        authors.map(
            (value, key) => <section key={key}>
                <div className='authorNames'> 
                    <li>{value.first_name} {value.last_name}</li>
                    </div>
            <br></br>
            <AuthorAffiliation author_id={value.author_id} paper_id={props.paper_id}/>
            </section>
        );
 
// onClick will call this function. It sets the details visible and
// fetches the author data
const showDetails = () => {
        fetchAuthors();
        toggleVisible(!visible);
  }

    return (
        <div>
            <section className='authorsTitle'>
            <p><strong>Authors: </strong> {loading &&(<button onClick={showDetails}>Show Details</button>)} </p> 
            </section>
            <div className='listOfAuthors'>
                {listOfAuthors} 
                </div>
        </div>
    )
}
 
export default PaperAuthor;