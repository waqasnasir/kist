import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionPills from "../Components/Sections/SectionPills.jsx"
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import profile from "assets/img/faces/christian.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class DashboardPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          // color="transparent"
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        {/* <Parallax small filter  /> */}
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="left">
                <GridItem xs={12} sm={12} md={12} lg={12}>
                  <NavPills
                    color="rose"
                    horizontal={{
                      tabsGrid: { xs: 12, sm: 2, md: 2 },
                      contentGrid: { xs: 12, sm: 10, md: 10 }
                    }}
                    tabs={[
                      {
                        tabButton: "Dashboard",
                        tabIcon: Dashboard,
                        tabContent: (
                          <span>
                            <p>
                              Collaboratively administrate empowered markets via
                              plug-and-play networks. Dynamically procrastinate
                              B2C users after installed base benefits.
                          </p>
                            <br />
                            <p>
                              Dramatically visualize customer directed convergence
                              without revolutionary ROI. Collaboratively
                              administrate empowered markets via plug-and-play
                              networks. Dynamically procrastinate B2C users after
                              installed base benefits.
                          </p>
                            <br />
                            <p>
                              Dramatically visualize customer directed convergence
                              without revolutionary ROI. Collaboratively
                              administrate empowered markets via plug-and-play
                              networks. Dynamically procrastinate B2C users after
                              installed base benefits.
                          </p>
                          </span>
                        )
                      },
                      {
                        tabButton: "Schedule",
                        tabIcon: Schedule,
                        tabContent: (
                          <span>
                            <p>
                              Efficiently unleash cross-media information without
                              cross-media value. Quickly maximize timely
                              deliverables for real-time schemas.
                          </p>
                            <br />
                            <p>
                              Dramatically maintain clicks-and-mortar solutions
                              without functional solutions. Dramatically visualize
                              customer directed convergence without revolutionary
                              ROI. Collaboratively administrate empowered markets
                              via plug-and-play networks. Dynamically
                              procrastinate B2C users after installed base
                              benefits.
                          </p>
                          </span>
                        )
                      },
                      {
                        tabButton: "Schedule",
                        tabIcon: Schedule,
                        tabContent: (
                          <span>
                            <p>
                              Efficiently unleash cross-media information without
                              cross-media value. Quickly maximize timely
                              deliverables for real-time schemas.
                          </p>
                            <br />
                            <p>
                              Dramatically maintain clicks-and-mortar solutions
                              without functional solutions. Dramatically visualize
                              customer directed convergence without revolutionary
                              ROI. Collaboratively administrate empowered markets
                              via plug-and-play networks. Dynamically
                              procrastinate B2C users after installed base
                              benefits.
                          </p>
                          </span>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(DashboardPage);
