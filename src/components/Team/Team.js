import React from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import '../Team/Team.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "../Team/Team.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 300,
        borderRadius: 10,
        margin: 20,
        padding: 20,
    },
});
const Team = (props) => {
    console.log(props.team);
    const { strTeam, strTeamBadge, idTeam } = props.team;
    // Another Way Try 
    /* 
    const history = useHistory();
    const handleClick = (teamInfo) => {
        const goPathUrl = `/team/${teamInfo}`;
        history.push(goPathUrl)
    }
    */
    const classes = useStyles();
    return (
        <div className="every-team">

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={strTeamBadge}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h4">
                            {strTeam}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions className="link-btn">

                    <Button size="small" variant="outlined" color="secondary">
                        <Link className="link-style" to={`/team/${idTeam}`}>  Explore More  <FontAwesomeIcon icon={faLocationArrow} /></Link>
                    </Button>

                    {/* <button onClick={() => handleClick(idTeam)}> click Me</button> */}

                </CardActions>
            </Card>
        </div>
    );
};

export default Team;