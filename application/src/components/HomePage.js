/**
 * Home page component
 * 
 * This is the main landing page for the application
 * 
 * @author Cristian Mitoi
 */

import './HomePage.css'
import bremen from './img/bremen.jpg';

function HomePage() {
    return (
        <div className='HomePage'>

            <h1>KF6012</h1>
            <br></br>
            <p>This picture was taken in Bremen, Germany where the conference was held.</p>
            
            <div class="imgcontainer"> 
            <img src={bremen} alt="Bremen by Dyana Wing So on Unsplash " />
            <section class="imgcredits">Photo by <a href="https://unsplash.com/@dyanawingso?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dyana Wing So</a> on <a href="https://unsplash.com/s/photos/bremen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></section>
        </div>

        </div>

    );
}
 
export default HomePage;