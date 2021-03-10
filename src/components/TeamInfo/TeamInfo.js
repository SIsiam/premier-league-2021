import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const TeamInfo = (props) => {
    let { teamInfo } = useParams();
    const [team, setTeam] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamInfo}`
        fetch(url)
            .then(respo => respo.json())
            .then(data => setTeam(data.teams[0]))
    }, []);

    const { strTeam, strDescriptionEN , strTeamBanner } = team;

    return (
        <div>
            <img src={strTeamBanner} alt=""/>
            <h2>{strTeam} </h2>
            <p>{strDescriptionEN} </p>
        </div>
    );
};

export default TeamInfo;