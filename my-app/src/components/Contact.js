import "./Contact.css";
import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  //gerer les erreurs et les validations
  const { register, handleSubmit } = useForm();

  const sendSubmit = (data) => {
    console.log(data);
  };

  return (
    <Card style={{ maxWidth: 750, margin: "30px auto", padding: "20px 20px" }}>
      <Typography
        variant="h5"
        align="center"
        style={{ margin: "10px auto 30px auto" }}
      >
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit(sendSubmit)}>
        <Grid container spacing={3}>
          <Grid xs={12} item>
            <TextField
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              autoComplete="off"
              required
              {...register("name")}
            />
          </Grid>

          <Grid xs={12} item>
            <TextField
              id="email"
              name="email"
              label="Your Email"
              variant="outlined"
              fullWidth
              autoComplete="off"
              required
              {...register("email")}
            />
          </Grid>

          <Grid xs={12} item>
            <TextField
              id="messg"
              name="messg"
              label="Your message"
              variant="outlined"
              fullWidth
              multiline={true}
              rows={3}
              autoComplete="off"
              required
              {...register("messg")}
            />
          </Grid>

          <Grid xs={12} item>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
};
export default Contact;
