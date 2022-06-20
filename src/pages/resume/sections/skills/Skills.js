import React from 'react';
import {Grid, Paper, Typography} from "@mui/material";
import resumeData from "../../../../utils/resumeData";
import TimelineDot from "@material-ui/lab/TimelineDot";

function Skills (){
    return(
        <>
            <Grid container className="section graybg pb_45 p_50" id ="skills">
                <Grid item xs={12}>
                    <Grid container justify="space-between" spacing={3}>
                        {resumeData.skills.map((skill, index) => (
                            <Grid key={index} item xs={12} sm={6} md={3}>
                                <Paper elevation={0} className="skills">
                                    <Typography variant="6" className="skills_title">
                                        {skill.title}
                                    </Typography>
                                    {skill.description.map((el, index) => (
                                        <Typography
                                            key={index}
                                            variant="body2"
                                            className="skills_description"
                                        >
                                            <TimelineDot
                                                variant="outlined"
                                                className="timeline_dot"
                                            />
                                            {el}
                                        </Typography>
                                    ))}
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
export default Skills;
