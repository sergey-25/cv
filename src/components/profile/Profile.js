import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import GetAppIcon from '@mui/icons-material/GetApp';
import "./Profile.css";
import resumeData from "../../utils/resumeData";
import CustomTimeline, { CustomTimelineSeparator } from "../timeline/Timeline";
import { Typography } from "@material-ui/core";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import CustomButton from "../button/CustomButton";
import html2canvas from 'html2canvas';
import {jsPDF} from 'jspdf'


const CustomTimelineItem = ({ title, text, link }) => {
  return(
    <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timeline_text">
          <span>{title}: </span>
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timeline_text">
          <span>{title}: </span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
  )
};

const Profile = ({rootElementId, downloadFileName}) => {
    const downloadFileDocument =() =>{
        const input = document.getElementById(rootElementId)
        html2canvas(input).then((canvas)=>{
            const imgData = canvas.toDataURL('image/png')
            const pdf = new jsPDF('p',"pt", [canvas.width, canvas.height])
            pdf.addImage(imgData, "JPEG",-10,-40)
            pdf.save(`${downloadFileName}`);
        })
    }

    return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>
      <figure className="profile_img">
        <img src={require("../../assets/images/me.jpg")} alt="" />
      </figure>
      <div className="profile_info">
        <CustomTimeline
          icon={<PersonOutlineOutlinedIcon />}
        >
            <CustomTimelineItem title='Name' text = {resumeData.name}/>
            <CustomTimelineItem title='Title' text = {resumeData.title}/>
            <CustomTimelineItem title='Email' text = {resumeData.email}/>
            {Object.keys(resumeData.socials).map((key, index) => (
                 <CustomTimelineItem  key={index} title={key} text = {resumeData.socials[key].text} link = {resumeData.socials[key].link}/>
            ))}
        </CustomTimeline>
        <br />
     <div className="button_container">
     <CustomButton onClick={downloadFileDocument} text = {'Download CV'} icon ={<GetAppIcon/>}>
     </CustomButton>
     </div>
      </div>
    </div>
  );
}

export default Profile;
