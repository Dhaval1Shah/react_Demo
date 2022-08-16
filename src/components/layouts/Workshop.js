import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./workshop.css";
import { Paper, TextareaAutosize } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Skype from "../shared/icons/Skype";
import Duo from "../shared/icons/Duo";
import Meet from "../shared/icons/Meet";

const Input = styled("input")({
  display: "none",
});

function Workshop() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <span className="Workshop__Title">Add New Workshop</span>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "100%",
            height: "100%",
          },
        }}
      >
        <Paper>
          <div style={{ padding: 10 }}>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <p className="Image__Title">Upload Image*</p>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    className="Upload__btn"
                  >
                    <label htmlFor="contained-button-file">
                      <Input
                        accept="image/*"
                        id="contained-button-file"
                        multiple
                        type="file"
                        required
                      />
                      <Button
                        variant="contained"
                        component="span"
                        className="buttonStyle"
                      >
                        Select File
                      </Button>
                    </label>

                    <div className="preview"></div>
                  </Stack>
                </Grid>
              </Grid>

              <Grid container spacing={5} style={{ padding: 10 }}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}></Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <TextField
                    id="standard-basic"
                    label="Event Title"
                    variant="standard"
                    placeholder="Enter Event Title"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControl variant="standard" sx={{ minWidth: "100%" }}>
                    <InputLabel id="demo-simple-select-standard-label" required>
                      Event Category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={age}
                      onChange={handleChange}
                      label="Event Category"
                      required
                    >
                      <MenuItem value="" placeholder="IT & Software">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="standard-basic"
                    label="Event Sub Category"
                    placeholder="IT Certifications"
                    variant="standard"
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>

              <Grid container spacing={5} style={{ marginBottom: 20 }}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}></Grid>
              </Grid>

              <div className="Tiket__Title">Ticket Manager :</div>

              <Grid container spacing={5} style={{ marginBottom: 20 }}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}></Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <FormControl
                    variant="standard"
                    sx={{ minWidth: "100%" }}
                    style={{ height: "48px" }}
                  >
                    <InputLabel id="demo-simple-select-standard-label" required>
                      Event Platform
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={age}
                      onChange={handleChange}
                      label="Event Platform"
                      required
                    >
                      <MenuItem value="" placeholder="Online">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={4}>
                  <span className="Event__Platform">Event Platform*</span>
                  <div style={{ margin: "5px", display: "flex" }}>
                    <button className="Skype__icon">
                      <Skype />
                    </button>

                    <button className="Duo__Icon">
                      <Duo />
                    </button>

                    <button className="Meet__Icon">
                      <Meet />
                    </button>
                  </div>
                </Grid>
              </Grid>

              <Grid container spacing={5} style={{ marginBottom: 20 }}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}></Grid>
              </Grid>

              <Grid container spacing={5}>
                <Grid item xs={4}>
                  <TextField
                    id="standard-basic"
                    label="Artist Name"
                    variant="standard"
                    placeholder="Enter"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="standard-basic"
                    label="Event Duration"
                    variant="standard"
                    placeholder="Enter"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="standard-basic"
                    label="Language"
                    variant="standard"
                    placeholder="Enter Event Title"
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>

              <Grid container spacing={5} style={{ marginBottom: 20 }}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}></Grid>
              </Grid>
              <Grid container spacing={5} style={{ marginBottom: 20 }}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}></Grid>
              </Grid>

              <Grid container spacing={5}>
                <Grid item xs={4}>
                  <TextField
                    id="standard-basic"
                    label="Enter Video URL"
                    variant="standard"
                    placeholder="Enter"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}></Grid>
              </Grid>

              <Grid container spacing={5} style={{ marginBottom: 20 }}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}></Grid>
              </Grid>
              <Grid container spacing={5}>
                <Grid item xs={4}>
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={3}
                    placeholder="Minimum 3 rows"
                    style={{ width: 495 }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={3}
                    placeholder="Minimum 3 rows"
                    style={{ width: 495 }}
                  />
                </Grid>
                <Grid item xs={4}></Grid>
              </Grid>
            </form>
          </div>
        </Paper>
      </Box>
    </div>
  );
}

export default Workshop;
