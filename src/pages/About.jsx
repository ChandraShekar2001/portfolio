import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';
import { motion } from 'framer-motion';

// Animation variants
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

const About = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 8,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'left',
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Box sx={{ maxWidth: '1000px', marginX: 'auto', mb: 4, p: 3, border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
          <motion.div variants={itemVariants}>
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', textAlign: 'left', fontSize: '2.5rem' }}>
              About Me
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography variant="body1" paragraph sx={{ color: 'text.secondary', textAlign: 'left', fontSize: '1.2rem' }}>
              I'm a backend engineer with a passion for building scalable, efficient, and reliable systems. I have hands-on experience working with distributed architectures, microservices, event-driven systems, and cloud infrastructure. <br/>

              Currently at Cyware Labs, I've worked on high-impact projects involving Kafka-based data pipelines, CRM integrations, Elasticsearch-powered search systems, and scalable exports handling millions of records. I enjoy designing clean backend solutions, optimizing system performance, and solving real-world problems with technology.<br/>

              I believe great engineering is not just about writing code — it’s about building systems that scale, last, and create real value. I’m always eager to learn, collaborate, and contribute to teams building meaningful products.<br/>

              When I'm not coding, I love exploring new tech, improving system designs, and diving deep into distributed systems concepts.
            </Typography>
          </motion.div>
        </Box>
        
        <Box sx={{ maxWidth: '1000px', marginX: 'auto', p: 3, border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
          <motion.div variants={itemVariants}>
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', textAlign: 'left', fontSize: '2.5rem' }}>
              Education
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography variant="body1" paragraph sx={{ color: 'text.secondary', textAlign: 'left', fontSize: '1.2rem' }}>
              Indian institute of information technology Sri City, 2018 - 2022
            </Typography>
          </motion.div>
        </Box>
      </motion.div>
    </Container>
  );
};

export default About;