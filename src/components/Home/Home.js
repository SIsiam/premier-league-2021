import { useEffect, useState } from 'react';
import Team from '../Team/Team';
import '../Home/Home.css'


const Home = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League")
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])
    return (
        <div className="football">
            <div className="team-headline">
                <h1>English Premier League</h1>
            </div>
            <section className="football-team-container">
                <div className="football-team container">
                    {
                        teams.map(team => <Team team={team} ></Team>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;