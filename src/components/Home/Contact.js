import React from "react";
import Title from "../Globals/Title";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    button: {
        background: "#D38D5F",
        marginTop: "1em",
        "&:hover": {
            background: "#9c6846",
        },
    },
});

const Contact = () => {
    const classes = useStyles();
    return (
        <section className="contact">
            <Container maxWidth="md">
                <Title title="Contact us" />
                <form
                    action="https://getform.io/f/97be0e46-4f1b-4f24-ba27-4b3789ba4824"
                    method="POST"
                >
                    <TextField
                        className={classes.textField}
                        type="text"
                        id="name"
                        name="name"
                        label="Your name"
                        variant="filled"
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        className={classes.textField}
                        type="email"
                        id="email"
                        name="email"
                        label="Your email"
                        variant="filled"
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        className={classes.textField}
                        id="message"
                        label="Message"
                        name="message"
                        multiline
                        rows={7}
                        variant="filled"
                        fullWidth
                        margin="normal"
                    />

                    {/* SUBMIT */}
                    <Button
                        className={classes.button}
                        variant="contained"
                        type="submit"
                        fullWidth
                    >
                        Submit
          </Button>
                </form>
            </Container>
        </section>
    );
};

export default Contact;
