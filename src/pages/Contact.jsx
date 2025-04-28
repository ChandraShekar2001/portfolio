import React from 'react';
import { Container, Typography, Box, IconButton, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <Box
      sx={{
        minHeight: '80vh', // Adjust as needed for your layout
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 50, damping: 15 }}
        >
          <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            Contact Me
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 4 }}>
            Feel free to reach out via email or connect with me on GitHub and LinkedIn!
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
            <IconButton
              component={Link}
              href="mailto:your.email@example.com"
              color="primary"
              aria-label="Email"
              size="large"
            >
              <EmailIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              component={Link}
              href="https://github.com/your-github-username"
              color="primary"
              aria-label="GitHub"
              target="_blank"
              rel="noopener"
              size="large"
            >
              <GitHubIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              component={Link}
              href="https://linkedin.com/in/your-linkedin-username"
              color="primary"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener"
              size="large"
            >
              <LinkedInIcon fontSize="inherit" />
            </IconButton>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;