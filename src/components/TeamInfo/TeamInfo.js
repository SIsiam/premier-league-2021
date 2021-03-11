import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamInfo.css'
// Conditionl rendaring Imges
import imagesBoy from "../Images/male.png";
import imagesGirl from "../Images/female.png";
// Font Awsome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faFacebook, faFontAwesomeFlag, faCreativeCommons, faUnity, faSteamSymbol, faInstagram } from '@fortawesome/free-brands-svg-icons';

const TeamInfo = (props) => {
    let { teamId } = useParams();

    const [team, setTeam] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
            .then(respo => respo.json())
            .then(data => setTeam(data.teams[0]))
    }, [teamId]);

    // distructuring 
    const { strDescriptionEN, strTeamLogo, strGender, strCountry, intFormedYear, strDescriptionPT, strSport, strLeague, strInstagram, strYoutube, strTwitter, strFacebook, strStadiumThumb, strTeamFanart1, strTeam } = team;

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


            <section className="team-info-container">

                <div className="team-details">
                    <div>
                        <p>{strLeague}</p>
                        <p><FontAwesomeIcon icon={faCreativeCommons} /> Journey: {intFormedYear}</p>
                        <p><FontAwesomeIcon icon={faFontAwesomeFlag} /> Country: {strCountry}</p>
                        <p><FontAwesomeIcon icon={faUnity} />Sport Type: {strSport}</p>
                        <p><FontAwesomeIcon icon={faSteamSymbol} /> Gender: {strGender}</p>
                    </div>

                    <div>
                        {ShowTeamPicture}
                    </div>
                </div>

                <div className="team-stadium-logo">
                    <div>
                        <h4> Logo : {strTeam}</h4>
                        <img src={strTeamFanart1} alt="" />
                    </div>
                    <div>
                        <h4> Stadium : {strTeam}</h4>
                        <img src={strStadiumThumb} alt="" />
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
                    <p className="twitter-Icon">
                        <a href={strTwitter}> <FontAwesomeIcon icon={faTwitter} /> </a>
                    </p>
                    <p className="facebook-Icon">
                        <a href={strFacebook}> <FontAwesomeIcon icon={faFacebook} /> </a>
                    </p>
                    <p className="youtube-Icon">
                        <a href={strYoutube}> <FontAwesomeIcon icon={faYoutube} /> </a>
                    </p>
                    <p className="instragram-Icon">
                        <a href={strInstagram}> <FontAwesomeIcon icon={faInstagram} /> </a>
                    </p>
                </div>

            </section>

        </section>
    );
};

export default TeamInfo;