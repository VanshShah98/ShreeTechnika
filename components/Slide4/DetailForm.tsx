import { useState } from "react";
import { Container, Grid, TextField, Button, Typography, CircularProgress, IconButton } from "@mui/material";
import { LocationOn, Phone, Email, Twitter, Facebook, Instagram, LinkedIn } from "@mui/icons-material";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    requirement: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: { target: { id: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      alert("Thank you for contacting Shree Technika. We will surely call you back");

      // Reset the form fields after successful submission
      setFormData({
        name: '',
        phoneNumber: '',
        requirement: '',
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Container maxWidth="lg" className="py-12 md:py-20" >
      <div className="space-y-6 text-center">
        <Typography variant="h3" className="font-bold tracking-tighter">
          Get in Touch
        </Typography>
        <Typography variant="body1" className="max-w-xl mx-auto text-gray-500 dark:text-gray-400 md:text-xl">
          Have a question or want to work together? Fill out the form below and we&#39;ll get back to you as soon as possible.
        </Typography>
      </div>
      <Grid container spacing={8} className="mt-12">
        <Grid item xs={12} md={6}>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="name"
                  label="Name"
                  variant="outlined"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  variant="outlined"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="requirement"
                  label="Requirement"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={formData.requirement}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSending}
                  startIcon={isSending ? <CircularProgress size={20} /> : null}
                >
                  {isSending ? 'Sending...' : 'Submit'}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="space-y-6">
            <div className="space-y-2">
              <Typography variant="h5" className="font-bold">
                Contact Information
              </Typography>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <LocationOn className="text-gray-500 dark:text-gray-400" />
                  <Typography variant="body1" className="text-gray-500 dark:text-gray-400">
                  SHREE TECHNIKA, RS No. 215, Block No. 85, ZIN, Opp. APMC, At. Jhagadia Bharuch, Gujarat,
                  </Typography>
                </div>

                <div className="flex items-center space-x-2">
                  <Email className="text-gray-500 dark:text-gray-400" />
                  <Typography variant="body1" className="text-gray-500 dark:text-gray-400">
                    shreetechnika@gmail.com
                  </Typography>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Typography variant="h5" className="font-bold">
                Follow Us
              </Typography>
              <div className="flex items-center space-x-4">
                <IconButton className="text-black" href="#" aria-label="Twitter">
                  <Twitter />
                </IconButton>
                <IconButton className="text-black"  href="#" aria-label="Facebook">
                  <Facebook />
                </IconButton>
                <IconButton className="text-black" href="#" aria-label="Instagram">
                  <Instagram />
                </IconButton>
                <IconButton className="text-black"  href="#" aria-label="LinkedIn">
                  <LinkedIn />
                </IconButton>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
