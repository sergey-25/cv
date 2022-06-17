import { Grid, Typography, Paper } from "@mui/material";
import React from "react";
import "./Resume.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import resumeData from "../../utils/resumeData";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../components/timeline/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

function Resume() {
  return (
    <>
      {/* About me */}
      <Grid container className="section pb_45 pt_45">
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
      {/* Education and experiences*/}
      <Grid container className="section pb_45">
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
      <Grid container className="section graybg pb_45 p_50">
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
      {/*Contact */}
      <Grid container className="section"></Grid>
    </>
  );
}

export default Resume;
