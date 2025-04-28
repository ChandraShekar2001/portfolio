import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, CardActions, Typography, Button, Box, Chip, keyframes } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const projectData = [
  {
    title: 'FlowSync',
    description: 'Built a modular microservices-based workflow engine to handle post-form submission business logic, enabling scalable and customizable processing. I integrated Google Sheets for efficient data exports and real-time SMS notifications, significantly improving client communication and data accessibility. To enhance system flexibility, I implemented a plug-and-play architecture that allowed easy customization of response handling based on specific business logic. Additionally, I developed robust mechanisms for failure handling and data consistency, ensuring reliable operations even under high-load scenarios.',
    imageUrl: 'https://via.placeholder.com/600x400.png?text=Project+Image+1',
    tags: ['Nestjs', 'Git', 'Docker', 'RabbitMQ', 'Postgres', 'Prisma'],
    githubUrl: 'https://github.com/ChandraShekar2001/FlowSync',
  },
  {
    title: 'TaskNest',
    description: 'Developed a modular microservices architecture with five services to enhance system flexibility and scalability. This included designing a decoupled queuing mechanism in the Mailer Service, which effectively reduced registration bottlenecks and significantly improved throughput. Additionally, I implemented protocol translation at the Gateway, enabling seamless and scalable communication between services, ensuring smooth interaction across the system.',
    imageUrl: 'https://via.placeholder.com/600x400.png?text=Project+Image+2',
    tags: ['Nestjs', 'Git', 'Docker', 'RabbitMQ', 'MongoDB', 'Microservices'],
    githubUrl: 'https://github.com/ChandraShekar2001/TaskNest',
  },
  {
    title: 'InMemFS',
    description: 'Developed an in-memory file system that supports commands such as create, write, read, delete, and list, facilitating efficient file management. I also built a Unix-like shell leveraging threads for concurrent file operations, incorporating a task queue to streamline task processing. To optimize performance, I ensured thread safety by utilizing condition variables, mutexes, and atomic operations.',
    imageUrl: 'https://via.placeholder.com/600x400.png?text=Project+Image+3',
    tags: ['C++'],
    githubUrl: 'https://github.com/ChandraShekar2001/InMemFS',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 50, damping: 15 },
  },
};

const MotionGrid = motion(Grid);

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

const Projects = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        py: { xs: 4, md: 8 },
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 800, mx: 'auto' }}>
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              align="center"
              sx={{
                fontWeight: 'bold',
                mb: 6,
                color: 'primary.main',
              }}
            >
              My Projects
            </Typography>
          </motion.div>
          <Grid container spacing={4} direction="column" alignItems="center">
            {projectData.map((project, index) => (
              <MotionGrid
                item
                xs={12}
                key={index}
                sx={{ width: '100%' }}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Card
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRadius: 2,
                    backgroundColor: 'background.paper',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      boxShadow: '0 0 15px rgba(0,0,0,0.1)',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: -10,
                        left: -10,
                        right: -10,
                        bottom: -10,
                        background: 'rgba(255,255,255,0.2)',
                        borderRadius: '12px',
                        zIndex: -1,
                        filter: 'blur(8px)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease-in-out',
                      }
                    },
                    '&:hover::after': {
                      opacity: 1,
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    image={project.imageUrl}
                    alt={project.title}
                    sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
                  />
                  <CardContent sx={{ flexGrow: 1, position: 'relative', zIndex: 2 }}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'medium' }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {project.tags.map((tag) => (
                        <Chip label={tag} key={tag} size="small" variant="outlined" />
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions sx={{ px: 2, pb: 2, justifyContent: 'flex-start', position: 'relative', zIndex: 2 }}>
                    <Button
                      size="small"
                      startIcon={<GitHubIcon />}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      disabled={project.githubUrl === '#'}
                      variant="outlined"
                    >
                      GitHub
                    </Button>
                    {project.liveUrl && (
                      <Button
                        size="small"
                        startIcon={<LaunchIcon />}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        disabled={project.liveUrl === '#'}
                        variant="outlined"
                        color="secondary"
                      >
                        Live Demo
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </MotionGrid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Projects;