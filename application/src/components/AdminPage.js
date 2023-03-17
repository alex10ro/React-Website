/**
 * Admin page component
 * 
 * This is the main landing page for the application
 * 
 * @author Cristian Mitoi
 */

import React, { useState, useEffect } from 'react';
import { Buffer } from 'buffer';
import UpdateAward from './UpdateAward';

function AdminPage(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(
        () => {
            if (localStorage.getItem('token')) {
                props.handleAuthenticated(true)
            }
        }
    ,[])
  
    const handleUsername = (event) => {
        setUsername(event.target.value);
    }
 
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSignOut = () => {
        props.handleAuthenticated(false);
        setPassword("");
        setUsername("");
        localStorage.removeItem('token');
}
 
    const handleClick = () => {

        const encodedString = Buffer.from(username + ":" + password).toString('base64');

        //Communicating with the API
        fetch("http://unn-w20010102.newnumyspace.co.uk/kf6012/assessment/api/auth",
        {
            method: 'POST',
            headers: new Headers( { "Authorization": "Basic " +encodedString })
        })
        .then(
            (response) => {   
                return response.json()
            }
        )
        .then(
            (json) => {
                console.log(json);
                if (json.message === 'succes') {
                    props.handleAuthenticated(true);
                    //storing the info into browser's local storage
                    localStorage.setItem('token', json.data.token);  
                  }
            }
        )
        .catch(
            (e) => {
                console.log(e.message)
            }
        )
    }

    const allPapers = props.papers.map(
        (value, key) => <p key={key}>
            <UpdateAward paper={value} handleUpdate={props.handleUpdate}/>
          </p>
      )


    return (
      <div>
        {/*When Signed In, show Paper info and a Sign Out Button*/}
            {props.authenticated && <div> <h2>Admin Page</h2>
                <input type="button" value="Sign out" onClick={handleSignOut} />
                {allPapers}
          </div>
          }
          
          {/*When Signed Out, show placeholders and a Log In button*/}
            {!props.authenticated && <div>
              <h2>Sign in</h2>
              <input type="text" placeholder="username" value={username} onChange={handleUsername} />
              <input type="password" placeholder="password" value={password} onChange={handlePassword}/>
              <input type="button" value="Log In" onClick={handleClick}/>
          </div>
          }
      </div>
    )
   
  }
  export default AdminPage;