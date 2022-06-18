import React, {useState} from 'react';
import html2canvas from 'html2canvas';
import {jsPDF} from 'jspdf'
import CustomButton from '../components/button/CustomButton'

const ExportToPdf = ({rootElementId, downloadFileName}) => {
    const downloadFileDocument =() =>{
        const input = document.getElementById(rootElementId)
        html2canvas(input).then((canvas)=>{
            const imgData = canvas.toDataURL('image/png')
            const pdf = new jsPDF("p", "pt", "a4")
            pdf.addImage(imgData, "JPEG", 10, 50)
            pdf.save(`${downloadFileName}`);
        })
    }
    return (
        <div>
            <CustomButton onClick={downloadFileDocument} text={"fsgdsgdsgdsf"}></CustomButton>

        </div>

    );
}

export default ExportToPdf;
