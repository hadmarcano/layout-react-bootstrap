import React from 'react'
import '../assets/css/globalStyles.css';

const Main = () => (
    <main className='row'>
    <article className="col-12 col-md-8">
        <h3>Article</h3>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab reprehenderit vel, 
            delectus aspernatur voluptatibus iure, laborum deleniti aut qui, 
            officiis blanditiis sed dolore aliquid dolor voluptate alias facilis perferendis!</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab reprehenderit vel, 
            delectus aspernatur voluptatibus iure, laborum deleniti aut qui, 
            officiis blanditiis sed dolore aliquid dolor voluptate alias facilis perferendis!</p>
    </article>
    <aside className="col-12 col-md-4 align-self-center">
        <div>
            <h3>Sidebar</h3>
        </div>
    </aside>
    </main>
);

export default Main;