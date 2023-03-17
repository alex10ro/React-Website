/**
 * Affiliation page component
 * 
 * This page will show information about institution and country
 * 
 * @author Cristian Mitoi
 */

import React, { useState, useEffect } from 'react';
 
function AuthorAffiliation(props) {
 
 
    const [affiliaiton, setAffiliation] = useState([]);
 
    useEffect( () => {
        fetch(
          "http://unn-w20010102.newnumyspace.co.uk/kf6012/assessment/api/affiliation?author_id=" + props.author_id + "&paper_id=" + props.paper_id)
          .then((response) => response.json())
          .then((json) => {
            setAffiliation(json.data);
          })
          .catch((err) => {
            console.log(err.message);
          });
    }, []);
 
 
  const listOfAffiliation = affiliaiton.map((value, key) => <p key={key}>
      <div className='affiliationInfo'>
            <p><strong>Institution: </strong>{value.institution}</p>
            <p><strong>Country: </strong>{value.country}</p>
      </div>
            </p>
        )
 
    return (
        <div>
            {listOfAffiliation}
        </div>
    )
}
 
 
export default AuthorAffiliation;