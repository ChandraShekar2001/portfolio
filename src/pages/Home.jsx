import React from 'react';
import { Container, Typography, Box, Button, Avatar, styled, keyframes } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import avatarImage from '../assets/avatar.png'; // Move this import to the top

// Enhanced Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 50, damping: 15 },
  },
};

// Styled component for gradient text
const GradientText = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.light} 30%, ${theme.palette.secondary.light} 90%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block',
}));

// Keyframes for the pulsing animation
const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

// Keyframes for the rotating border
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Styled Box for the button wrapper with rotating border effect
const AnimatedButtonWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  borderRadius: '50px',
  padding: 4,
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 'inherit',
    background: `conic-gradient(
      ${theme.palette.primary.main} 0deg,
      ${theme.palette.secondary.main} 90deg,
      ${theme.palette.primary.light} 180deg,
      ${theme.palette.secondary.light} 270deg,
      ${theme.palette.primary.main} 360deg
    )`,
    opacity: 0, // Start with opacity 0
    zIndex: 1,
    pointerEvents: 'none',
    transition: 'opacity 0.3s ease-in-out', // Smooth transition for opacity
  },
  '&:hover::before': {
    animation: `5s linear`, // Apply rotating animation on hover
    opacity: 0.8, // Make the border visible on hover
  },
}));


const AnimatedButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  borderRadius: '50px',
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(5),
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  fontSize: '1.1rem',
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.primary.main,
  border: `2px solid ${theme.palette.background.paper}`,
  minWidth: 0,
  width: 'auto',
  display: 'inline-block',
  boxShadow: 'none',
  transition: 'color 0.2s, border-color 0.2s', // Removed background transition
  animation: `${pulse} 2s ease-in-out`, // Removed infinite to make it transition only once
  '&:hover': {
    // Removed backgroundColor change
    color: theme.palette.primary.light,
    borderColor: theme.palette.background.default,
    boxShadow: 'none',
  },
  '& .MuiButton-endIcon svg': {
    color: 'inherit',
  }
}));


const Home = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        py: { xs: 4, md: 8 },
        overflow: 'hidden',
        position: 'relative',
        marginX: 'auto',
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ zIndex: 1 }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div variants={itemVariants}>
            <Avatar
              alt="[Your Name]"
              src={avatarImage} // Use the imported image
              sx={{
                width: { xs: 100, sm: 140 },
                height: { xs: 100, sm: 140 },
                mb: 3,
                border: '4px solid',
                borderColor: 'primary.main',
                boxShadow: (theme) => `0 0 20px ${theme.palette.primary.light}33`,
              }}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: 'text.primary',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              Hi there <WavingHandIcon sx={{ ml: 1, color: '#FFDA6A' }}/>, I'm&nbsp;
              <GradientText variant="h2" component="span" sx={{ fontWeight: 'bold' }}>
                Chandra Shekar
              </GradientText>
            </Typography>
          </motion.div>
        </Box>
        <motion.div variants={itemVariants}>
          <Typography
            variant="h5"
            color="text.secondary"
            paragraph
            sx={{ mb: 4, maxWidth: '600px', marginX: 'auto' }}
          >
            I craft scalable and resilient backend systems. Love working with distributed architectures, microservices, and cloud-native technologies.
          </Typography>
        </motion.div>
        <motion.div variants={itemVariants}>
          <AnimatedButtonWrapper>
            <AnimatedButton
              component={RouterLink}
              to="/projects"
              size="large"
              endIcon={<ArrowForwardIcon />}
            >
              Explore My Work
            </AnimatedButton>
          </AnimatedButtonWrapper>
        </motion.div>
        <motion.div variants={itemVariants}>
          <AnimatedButtonWrapper>
            <AnimatedButton
              component={RouterLink}
              to="/experience"
              size="large"
              endIcon={<ArrowForwardIcon />}
            >
              My Experience
            </AnimatedButton>
          </AnimatedButtonWrapper>
        </motion.div>
        <motion.div variants={itemVariants}>
          <AnimatedButtonWrapper>
            <AnimatedButton
              component={RouterLink}
              to="/contact"
              size="large"
              endIcon={<ArrowForwardIcon />}
            >
              Contact Me
            </AnimatedButton>
          </AnimatedButtonWrapper>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Home;