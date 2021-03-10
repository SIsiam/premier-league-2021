import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../Team/Team.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import  "../Team/Team.css";
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});
const Team = (props) => {
    console.log(props.team);
    const { strTeam, strTeamBadge, idTeam } = props.team;
    const history = useHistory();
    const handleClick = (teamInfo) => {
        const goPathUrl = `/team/${teamInfo}`;
        history.push(goPathUrl)
    }
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

                        <Typography gutterBottom variant="h5" component="h2">
                            {strTeam}
                        </Typography>

                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <Button size="small" color="primary">
                        <Link to={`/team/${idTeam}`}>Click More Info {idTeam}
                            <br />
                            <br />
                            <button onClick={() => handleClick(idTeam)}> click Me</button>
                        </Link>
                    </Button>

                </CardActions>
            </Card>

        </div>
    );
};

export default Team;