import * as React from 'react';
import { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import './feed.scss';
import Post from '../../Components/Post/post'
import { Link, useNavigate } from "react-router-dom";

const Feed = () => {
    let pageName="Wordwide feed";
    const [array, setArray] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/post')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setArray([...array, ...data]);
            })
    }, [])

    console.log(array);
    return (
        <div className='feed'>
            <Header page={pageName} />
            <div className='feed__top'>
                <div className='feed__links'>
                    <Link to="/home">
                        <div className='feed__links--first'>
                            <img src="profile2.png" alt="Profile ikona"></img>
                            <p>My profile</p>
                        </div></Link>
                    <Link to="/search">  
                    <div className='feed__links--second'>
                        <img src="friends.png" alt="FRIENDS ikona"></img>
                        <p>Contact center</p>
                    </div></Link>
                    <div className='feed__links--third'>
                        <img src="editprofile.png" alt="EDIT ikona"></img>
                        <p>Profile costumization</p>
                    </div>
                </div>
                <img src="stilinspoconspiracymap.png" alt="Reklama"></img>
            </div>
            <div className='feed__bottom'>

                {array?.map(post => <Post key={post.id} post={post} />)}
            </div>
        </div >

    )
}
export default Feed;