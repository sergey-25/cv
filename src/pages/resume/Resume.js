import {Grid, Typography, Paper} from "@mui/material";
import React from "react";
import "./Resume.css";
import resumeData from "../../utils/resumeData";
import AboutMe from '../resume/sections/aboutMe/AboutMe'
import EduAndExp from "./sections/eduAndExp/EduAndExp";
import Skills from "./sections/skills/Skills";


function Resume() {
    return (
        <>
            {/* About me */}
            <AboutMe />

            {/* Education and experiences*/}
            <EduAndExp/>
            {/* Services */}
            <Grid container className="section pb_45">
                <Grid item className="section_title mb_30">
                    <span></span>
                    <h6 className="section_title_text">Services</h6>
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing={3} justify="space-around">
                        {resumeData.services.map((service, index) => (
                            <Grid key={index} item xs={12} sm={6} md={3}>
                                <div className="service">
                                    <Paper className="service_icon">
                                        {service.icon}{" "}
                                        <Typography variant="h6" className="service_title">
                                            {service.title}
                                        </Typography>
                                        <Typography variant="body2" className="service_description">
                                            {service.description}
                                        </Typography>
                                    </Paper>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            {/* Skils */}
            <Skills/>
            {/*Contact */}
            <Grid container className="section"></Grid>
        </>
    );
}

export default Resume;
