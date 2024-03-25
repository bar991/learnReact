import { ContactMail, ForwardToInbox, HighlightOff } from "@mui/icons-material";
import "./ContactUs.css";
import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";

export function ContactUs(): JSX.Element {
    return (
        <div className="ContactUs">
            <Typography variant="h3">Contact Us &nbsp; <ContactMail fontSize="large" /> </Typography>
            <form>
                <TextField label="Name" className="TextBox" />

                <TextField type="email" label="Email" className="TextBox" />
                <TextField label="Message" className="TextBox" />
                <FormControlLabel label="send me promotional emails" control={<Checkbox />} />
                <ButtonGroup fullWidth variant="contained">
                    <Button color="primary">Send &nbsp; <ForwardToInbox /> </Button>
                    <Button color="secondary" type="reset">Clear &nbsp; <HighlightOff /> </Button>
                </ButtonGroup>
            </form>
        </div>
    );
}
