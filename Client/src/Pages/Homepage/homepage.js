import * as React from 'react';
import { useState } from 'react';
import './homepage.scss';
import Header from '../../Components/Header/Header'
import ProfileBox from '../../Components/profile-box/profile'
import QuestionBox from '../../Components/Question-box/QuestionBox'
import Post from '../../Components/Post/post'
import reklamaHome from '../../Ads/Banner2.png';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
//C:\Users\Koshek\Desktop\ReactProjekt\Client\public\Reklame\Banner3.png

let index = 1;

const Homepage = () => {
    let pageName="My profile";
    const [users, setUsers] = useState([]);
    const date = new Date();
    const formatDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    const [value, setValue] = useState({
        title: "",
        date: formatDate,
        text: "",
        id: ""
    })

    React.useEffect(() => { //jos uvik mislim da je lipse importat, al evo malo React.
        const getUsers = async () => {
            try {
                const res = await axios.get('http://localhost:8080/users');
                console.log(res);
                console.log(res.data);
                setUsers([...res.data]);
                console.log(users.username);
            }
            catch (error) {
                console.log(error);
            }
        }
        getUsers();
    }, [])

    const [array, setArray] = useState([]);

    const onChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });

    }

    const submitPost = () => {
        index = index + 1;
        value.id = index;
        setValue({ ...value });
        console.log(value);
        setArray([value, ...array]); //glupo i disgusting HADFHJDFJHDSFJDDSFHHJ
        console.log(array);
    }

    return (
        <div>
            <Header page={pageName}/>
            <div className='home'>
                <div className='home__top'>
                    <div className='home__links'>
                        <Link to="/feed">
                            <div className='home__link1'>
                                <img src="computer icon.png" alt="WWF ikona"></img>
                                <p>Worldwide feed</p>
                            </div></Link>
                            <Link to ="/search">
                        <div className='home__link2'>
                            <img src="friends.png" alt="FRIENDS ikona"></img>
                            <p>Contact center</p>
                        </div></Link>
                        <div className='home__link3'>
                            <img src="editprofile.png" alt="EDIT ikona"></img>
                            <p>Profile costumization</p>
                        </div>
                    </div>
                    <img src={reklamaHome} alt="Reklama" class="ad1"></img>
                </div>
                <div className='home__bottom'>
                    <div className='home__left-side'>
                        <ProfileBox />
                        <QuestionBox />
                        <div className='home__reklama'>
                            <img src="krasvjevericakvadrat.png" alt="Kras"></img>
                        </div>
                        <Link to="/"><p>LOG OUT</p></Link>
                    </div>


                    <div className='home__right-side'>
                        <div className='home__create-post'>
                            <input onChange={onChange} type="text" placeholder="Enter blogpost title..." name="title" required></input>
                            <input onChange={onChange} type="text" placeholder="Create new blogpost..." name="text" required></input>
                            <button onClick={submitPost} type="button">Post it</button>
                        </div>
                        {array?.map((post, i) => <Post post={post} />)}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Homepage;