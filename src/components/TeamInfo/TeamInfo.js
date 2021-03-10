import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import imagesBoy from "../Images/male.png";
import imagesGirl from "../Images/female.png";
import './TeamInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';
const TeamInfo = (props) => {
    let { teamInfo } = useParams();
    const [team, setTeam] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamInfo}`
        fetch(url)
            .then(respo => respo.json())
            .then(data => setTeam(data.teams[0]))
    }, [teamInfo]);

    const { strDescriptionEN, strTeamLogo, strGender, strCountry, strDescriptionPT, strSport, strLeague, strInstagram, } = team;


    // Conditional Rendaring For Male And Female : 
    let ShowTeamPicture;
    const gender = team.strGender;

    if (gender === "Male") {
        ShowTeamPicture = <img className="img-fluid" src={imagesBoy} alt="" />
    }
    else if (gender === "Female") {
        ShowTeamPicture = <img src={imagesGirl} alt="" />
        console.log("unfortunately Female API ");
    }
    else {
        console.log("nothing Is Not Found ");
    }



    return (
        <section>

            <div className="team-images">
                <img className="img-fluid" src={strTeamLogo} alt="" />
            </div>


            <section className="team-info">


                <div className="team-details">
                    <div>
                        <p>{strLeague}</p>
                        <p>Country: {strCountry}</p>
                        <p>Sport Type : {strSport}</p>
                        <p>Gender: {strGender}</p>
                    </div>

                    <div>
                        {ShowTeamPicture}
                    </div>
                </div>

                <div className="team-discirption">
                    <div>
                        <p>{strDescriptionEN} </p>
                    </div>
                    <br />
                    <div>
                        <p>{strDescriptionPT}</p>
                    </div>

                </div>
                <div className="social-icon container">

                    <p> <a href={strInstagram}> <FontAwesomeIcon icon={faTwitter} /> </a> 
                    </p>
                    <p>
                        <a href={strInstagram}> <FontAwesomeIcon icon={faFacebook} /> </a>
                    </p>
                    <p>
                        <a href={strInstagram}> <FontAwesomeIcon icon={faYoutube} /> </a>
                    </p>

                </div>

            </section>



        </section>
    );
};

export default TeamInfo;