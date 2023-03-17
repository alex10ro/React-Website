/**
 * Documentation Page component
 * 
 * 
 * @author Cristian Mitoi
 */

import './Documentation.css'

function Documentation() {
    return (
        <div className='all'>
            <h1 className='title'>Documentation for API</h1>
            <p>&nbsp; Student ID: 20010102</p>
            <p>&nbsp; Name: Mitoi Cristian</p>

            <h4>Base Endpoint</h4>
            <p>&nbsp; Base endpoint allows either Get or Post methods, otherwise displays "Method not allowed" error.</p>
            <p>&nbsp; It shows the Conference name alongside with my student id and name.</p>
            <a className='link' href="http://unn-w20010102.newnumyspace.co.uk/kf6012/assessment/api">unn-w20010102.newnumyspace.co.uk/kf6012/assessment/api</a>

            <h4>Papers Endpoint</h4>
            <p>&nbsp; As the previous endpoint, it only allows Get and Post methods. To be more precise, all endpoints allow only the use of this two methods.</p>
            <p>&nbsp; This endpoint displays all the papers from the chiplay database.</p>
            <p><a className='link' href="http://unn-w20010102.newnumyspace.co.uk/kf6012/assessment/api/paper">unn-w20010102.newnumyspace.co.uk/kf6012/assessment/api/paper</a></p>
            <p>&nbsp; Paper endpoint supports the use of a track parameter, for example:</p>
            <a className='link' href="http://unn-w20010102.newnumyspace.co.uk/kf6012/assessment/api/paper?track=fullpapers">unn-w20010102.newnumyspace.co.uk/kf6012/assessment/api/paper<strong>?track</strong>=fullpapers</a>
            
            <h4>Authors Endpoint</h4>
            <p>&nbsp; Shows information about authors from the chiplay database.</p>
            <p><a className='link' href="http://unn-w20010102.newnumyspace.co.uk/kf6012/assessment/api/author">unn-w20010102.newnumyspace.co.uk/kf6012/assessment/api/author</a></p>
            <p>&nbsp; Author endpoint supports the use of a paper_id parameter, for example:</p>
            <a className='link' href="http://unn-w20010102.newnumyspace.co.uk/kf6012/assessment/api/author?paper_id=64460">unn-w20010102.newnumyspace.co.uk/kf6012/assessment/api/author<strong>?paper_id</strong>=64460</a>

            <h4>Affiliation Endpoint</h4>
            <p>&nbsp; This endpoint shows information about authors. Compared to the authors endpoint, it displays more information, such as its institution and country.</p>
            <p><a className='link' href="http://unn-w20010102.newnumyspace.co.uk/kf6012/assessment/api/affiliation">unn-w20010102.newnumyspace.co.uk/kf6012/assessment/api/affiliation</a></p>
            <p>&nbsp; Affiliaiton endpoint supports two parameters: author_id and paper_id, in order to return information for a specific paper author. For example:</p>
            <a className='link' href="http://unn-w20010102.newnumyspace.co.uk/kf6012/assessment/api/affiliation?author_id=64245&paper_id=64460">unn-w20010102.newnumyspace.co.uk/kf6012/assessment/api/author<strong>?author_id</strong>=64245<strong>&paper_id</strong>=64460</a>

            <h4>Authentication Endpoint</h4>
            <p>&nbsp; It only allows Post requests.</p>
            <p>&nbsp; This endpoint accepts two parameters: username and password.</p>
            <p>&nbsp; These parameters are posted to the API. If the username and password match a user in the database, then a valid JWT is returned, otherwise appropiate errors are returned.</p>
            <a className='link' href="http://unn-w20010102.newnumyspace.co.uk/kf6012/assessment/api/auth">unn-w20010102.newnumyspace.co.uk/kf6012/assessment/api/auth</a>

            <h4>Update Endpoint</h4>
            <p>&nbsp; This endpoint allows only Post requests alongside with two parameters: paper_id and award.</p>
            <p>&nbsp; Updating can only happen when signed in with a verified JWT.</p>
            <p>&nbsp; If the parameters are missing, a http response is returned (400), and if the token is invalid, then another http response is returned (401).</p>
            <a className='link' href="http://unn-w20010102.newnumyspace.co.uk/kf6012/assessment/api/update">unn-w20010102.newnumyspace.co.uk/kf6012/assessment/api/update</a>

            <h4>Defalut Endpoint</h4>
            <p>&nbsp; This one handles invalid endpoints by returning a 404 http response alongside with an appropiate message.</p>
            <a className='link' href="http://unn-w20010102.newnumyspace.co.uk/kf6012/assessment/api/wrongEndpoint">unn-w20010102.newnumyspace.co.uk/kf6012/assessment/api/wrongEndpoint</a>

            <h4>Optional Response Code</h4>
            <p>&nbsp; The 500 response code is returned when an exception occurs.</p>

        </div>

    );
}
 
export default Documentation;