import React from 'react';
import {Grid, Typography} from "@mui/material";
import CustomTimeline, {CustomTimelineSeparator} from "../../../../components/timeline/Timeline";
import WorkIcon from "@mui/icons-material/Work";
import resumeData from "../../../../utils/resumeData";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import SchoolIcon from "@mui/icons-material/School";


function EduAndExp (){
    return (
        <>
            <Grid container className="section pb_45" id="edu">
                <Grid item className="section_title mb_30">
                    <span></span>
                    <h6 className="section_title_text">Resume</h6>
                </Grid>
                <Grid item xs={12}>
                    <Grid container className="resume_timeline">
                        {/* Experence */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title="Work Experiens" icon={<WorkIcon />}>
                                {resumeData.experiences.map((experience, index) => (
                                    <TimelineItem key={index}>
                                        <CustomTimelineSeparator />
                                        <TimelineContent>
                                            <Typography className="timeline_title">
                                                {experience.title}
                                            </Typography>
                                            <Typography variant="caption" className="timeline_date">
                                                {experience.date}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                className="timeline_description"
                                            >
                                                {experience.description}
                                            </Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>
                        {/* Education */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title="Education" icon={<SchoolIcon />}>
                                {resumeData.education.map((edu, index) => (
                                    <TimelineItem key={index}>
                                        <CustomTimelineSeparator />
                                        <TimelineContent>
                                            <Typography className="timeline_title">
                                                {edu.title}
                                            </Typography>
                                            <Typography variant="caption" className="timeline_date">
                                                {edu.date}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                className="timeline_description"
                                            >
                                                {edu.description}
                                            </Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
export default EduAndExp;
