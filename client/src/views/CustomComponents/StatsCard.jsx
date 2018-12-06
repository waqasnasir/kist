import React from 'react'

// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import { cardTitle } from "assets/jss/material-kit-react.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "components/CustomButtons/Button.jsx";

const style = {
    ...cardTitle,
    textCenter: {
        textAlign: "center"
      }
}
const StatsCard = (props) => {
    const { classes, ...rest } = props;
    return <Card style={{ width: "15rem" }} className={classes.textCenter}>
        <CardHeader color="warning">Total Investment</CardHeader>
        <CardBody>
            <h4 className={classes.cardTitle} style={{ alignItems: "center" }}>$0</h4>
            <Button color="primary">Details</Button>
        </CardBody>
    </Card>
}

export default withStyles(style)(StatsCard)