import * as React from 'react'
import {Grid, Typography} from "@mui/material";
import resumeData from "../../../../utils/resumeData";

function AboutMe (){
return(
    <>
        <Grid container className="section pb_45 pt_45" id="#About-me">
            <Grid item className="section_title mb_30">
                <span></span>
                <h6 className="section_title_text">About me</h6>
            </Grid>
            <Grid item className="" xs={12}>
                <Typography variant="body2" className="about_text">
                    {resumeData.about}
                </Typography>
            </Grid>
        </Grid>
    </>
)
}
export default AboutMe;
