import './Home.css';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
        <main className='text-center d-flex flex-column justify-content-around '>
            <div className='p-4'>
                <span>SO, YOU WANT TO TRAVEL TO</span>
                <h1>SPACE</h1>
                <p>
                    Let’s face it; if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                    because we’ll give you a truly out of this world experience!
                </p>
            </div>
                <Link className='link' to='/destination'> 
                    <div className='btn-explore mx-auto'>Explore</div> 
                </Link>
        </main>
    </>
  )
}

export default Home