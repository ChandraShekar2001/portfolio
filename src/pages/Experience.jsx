import React from 'react';
import { Container, Typography, Box, Paper, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import Timeline from '@mui/lab/Timeline'; // Using MUI Lab for Timeline
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkIcon from '@mui/icons-material/Work'; // Example icon

// Animation variants (reuse or define specific ones)
const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const experienceData = [ // Replace with your actual experience
  {
    years: 'Jun 2024 - Present',
    title: 'Software Engineer I',
    company: 'Cyware Labs',
    description: 'At Cyware Labs, I focused on building scalable and efficient backend systems that directly improved platform performance and reliability. I redesigned the CSV ingestion pipeline using Redis, Kafka, and S3, increasing capacity from 500 to over 50,000 rows while cutting processing time by more than 80%. I also integrated Salesforce CRM into our License Management System, automating license provisioning and reducing manual workflows. To support large-scale data needs, I developed a high-performance threat intel export system capable of handling over 500,000 records with optimized Elasticsearch queries. Beyond engineering, I took ownership of backend feature architecture, system documentation, and led on-call operations, consistently resolving incidents within SLA and ensuring zero customer escalations.',
    icon: <WorkIcon />,
    color: 'primary',
    techStack: ['Django', 'Redis', 'Kafka', 'PostgreSQL'] // Add tech stack
  },
  {
    years: 'Dec 2023 - Jun 2024',
    title: 'Software Engineer Intern',
    company: 'Cyware Labs',
    description: 'During my internship at Cyware Labs, I worked on enhancing the threat intelligence platform by building scalable and high-impact backend solutions. I implemented a validation pipeline that reduced critical data misses by over 95%, ensuring higher data reliability. I designed and integrated an AI-powered summarization service that boosted analyst productivity by automatically generating concise summaries from raw threat intel. Additionally, I optimized the file-processing pipeline using multithreading, reducing average processing time by 60%. I also contributed to code quality by developing comprehensive unit tests across key microservices, increasing overall code coverage to over 90%. For these contributions, I was recognized with the Early Champion Award for delivering exceptional impact during my internship.',
    icon: <WorkIcon />,
    color: 'secondary',
    techStack: ['Django', 'Redis', 'Kafka', 'PostgreSQL'] // Add tech stack
  },
  {
    years: 'Feb 2022 - Apr 2023',
    title: 'Backend Engineer Intern',
    company: 'Apna Konnect',
    description: 'At Apna Konnect, I designed and implemented a secure authentication system using JWT, significantly improving session management and user access control. I built scalable APIs to enable role-based access control, supporting admin, sub-admin, and multi-admin functionality within the group chat modules. Additionally, I optimized backend queries and architecture, reducing server load and improving the feeds page response time from 1.8 seconds to just 400 milliseconds, enhancing overall user experience and system performance.',
    icon: <WorkIcon />,
    color: 'secondary',
    techStack: ['NodeJS', 'Redis', 'MongoDB'] // Add tech stack
  },
  // Add more experience items
];

const Experience = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <motion.div
        variants={pageVariants}
        initial="hidden"
        animate="visible"
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          align="center"
          sx={{
            fontWeight: 'bold',
            mb: 6,
            color: 'primary.main' // Use theme color
          }}
        >
          Work Experience
        </Typography>

        <Timeline position="alternate"> {/* Alternate position looks good */}
          {experienceData.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align={index % 2 === 0 ? "right" : "left"} // Align left for every other item
                variant="body2"
                color="text.secondary"
              >
                {item.years}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color={item.color || 'grey'}> {/* Use item color or default */}
                  {item.icon || <WorkIcon />} {/* Use item icon or default */}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                 <Paper elevation={3} sx={{ p: 3, backgroundColor: 'background.paper' }}> {/* Use paper background */}
                    <Typography variant="h6" component="span">
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary" sx={{ mb: 1 }}>{item.company}</Typography>
                    <Typography>{item.description}</Typography>
                    <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'flex-start' }}>
                      {item.techStack.map((tech, idx) => (
                        <Box key={idx} sx={{ p: 1, border: '1px solid', borderColor: 'divider', borderRadius: 1}}>
                          <Typography variant="body2">{tech}</Typography>
                        </Box>
                      ))}
                    </Box>
                 </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </motion.div>
    </Container>
  );
};

export default Experience;