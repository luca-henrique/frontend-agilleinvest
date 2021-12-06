import React from "react";
import { withStyles } from "@material-ui/core/styles";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";

const GreenCheckbox = withStyles({
  root: {
    color: "#4DD784",
    "&$checked": {
      color: "#4DD784",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const Index = ({ label, setValue, value }) => {
  return (
    <FormControlLabel
      control={
        <GreenCheckbox
          onChange={(event) => setValue(event.target.checked)}
          value={value}
        />
      }
      label={
        <Typography
          variant="h6"
          style={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "18px",
            lineHeight: "21px",
            color: "#FFFFFF",
          }}
        >
          {label}
        </Typography>
      }
    />
  );
};

export default Index;
