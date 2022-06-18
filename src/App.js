import "./assets/styles/App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Portfolio from "./pages/portfolio/Portfolio";
import Resume from "./pages/resume/Resume";
import Footer from "./components/footer/Footer";
import ExportToPdf from "./utils/ExportToPdf"

function App() {
  return (
    <Container id="pagetodownload" className={"top_60"}>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
            <Profile rootElementId={"pagetodownload"} downloadFileName="Serhii_Kurylenko"/>

        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <div className="main-content">
              <Routes>
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/" element={<Resume />} />
              </Routes>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
