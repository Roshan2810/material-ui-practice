import React from "react";
import "./App.css";
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start">
              <MenuIcon style={{ color: "white" }} />
            </IconButton>

            <Typography variant="h4" component="h5">
              Welcome To ReactWorld
            </Typography>

            <Button
              color="inherit"
              style={{ marginLeft: "auto", fontSize: "20px" }}
            >
              Login
            </Button>
          </Toolbar>
        </AppBar>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={3}>
              {[
                { id: 0, name: "Animal", desc: "This Card belongs to Animal" },
                {
                  id: 1,
                  name: "Flowers",
                  desc: "This Card belongs to Flowers",
                },
                { id: 2, name: "Food", desc: "This Card belongs to Food" },
              ].map((value) => (
                <Grid key={value} item>
                  <Card
                    style={{
                      maxWidth: "500px",
                      margin: "auto",
                      marginTop: "80px",
                    }}
                  >
                    <CardActionArea>
                      <CardContent>
                        <Typography variant="h4">{value.name}</Typography>
                        <Typography variant="h6" component="p">
                          {value.desc}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
