import './Home.css';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
        <main className='text-center d-flex flex-column justify-content-around justify-content-md-center flex-xl-row'>
            <div className='container-text p-4 mb-md-5 p-xl-0 align-self-xl-center'>
                <span>SO, YOU WANT TO TRAVEL TO</span>
                <h1>SPACE</h1>
                <p>
                    Let’s face it; if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                    because we’ll give you a truly out of this world experience!
                </p>
            </div>
                <Link className='link align-self-xl-center' to='/destinations'> 
                    <div className='btn-explore mx-auto'>
                        Explore
                    </div> 
                </Link>
        </main>
    </>
  )
}

export default Home