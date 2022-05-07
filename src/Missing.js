import {Link} from 'react-router-dom';

const Missing = () => {
        return (
            <main className='Missing'>
                <h2>Page Not Found</h2>
                <p>Well, thats dissapointing</p>
                <p>
                    <Link to='/'>Home</Link>
                </p>
            </main>
        )
    }
 export default Missing;