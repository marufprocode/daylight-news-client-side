import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories]= useState([]);
    console.log(categories);

    useEffect(()=> {
        fetch('http://localhost:5000/news-ctegories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h3>All Category</h3>
            <div>
                {
                    categories.map(category => 
                        <p key={category.id}>
                            <Link to ={`/category/${category.id}`}> {category.name} </Link>
                        </p>
                    )
                }
            </div>
        </div>
    );
};

export default LeftSideNav;