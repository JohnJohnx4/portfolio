import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { AboutText, AboutSubText } from "./AboutText";

const styles = theme => ({
	root: {
		flexGrow: 1
	},
	heading: {
		margin: "20px",
		fontSize: theme.typography.pxToRem(18),
		fontWeight: "bold"
	},
	secondaryHeading: {
		margin: "0 20px",
		fontSize: theme.typography.pxToRem(14),
		color: theme.palette.text.secondary
	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: "center",
		color: theme.palette.text.secondary
	},
	row: {
		display: "flex",
		justifyContent: "center"
	},
	bigAvatar: {
		margin: 10,
		width: 250,
		height: 250
	}
});

function Home(props) {
	const { classes } = props;

	return (
		<div className={classes.root + " home"}>
			<Grid container spacing={24} className="home__grid__container">
				<Grid item xs={12} className="home__grid">
        
					<Paper className={classes.paper + " home__paper"}>
						<div className={classes.row}>
							<Avatar
								alt="John C"
								src="https://i.imgur.com/3GTFHtB.jpg"
								className={classes.bigAvatar + " home__avatar"}
							/>
						</div>
						<Typography className={classes.heading + " home__header"}>
							<AboutText />
						</Typography>
					</Paper>

					<Paper className={classes.paper + " home__paper__sub"}>
						<Typography
							className={classes.secondaryHeading + " home__subheader"}
						>
							<AboutSubText />
						</Typography>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}

Home.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
