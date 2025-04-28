import React, { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme, useMediaQuery, IconButton, Typography, Divider, Tooltip } from '@mui/material'; // Added Divider, Tooltip, ListItemIcon
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home'; // Added Icons
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory'; // Import an icon for Experience
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const drawerWidth = 240; // Define drawer width

const navItems = [
  { name: 'Home', path: '/', icon: <HomeIcon /> },
  { name: 'About', path: '/about', icon: <PersonIcon /> },
  { name: 'Experience', path: '/experience', icon: <WorkHistoryIcon /> }, // Add Experience item
  { name: 'Projects', path: '/projects', icon: <CodeIcon /> },
  { name: 'Contact', path: '/contact', icon: <MailIcon /> }
];

// Animation Variants
const sidebarVariants = {
  hidden: { x: -drawerWidth },
  visible: { x: 0, transition: { duration: 0.5, ease: "easeInOut" } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } // Stagger children after sidebar opens
};


const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Use 'md' breakpoint for sidebar switch
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <motion.div initial="hidden" animate="visible" variants={isMobile ? {} : listVariants}> {/* Apply stagger only on desktop */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
         {/* You can add a logo or Avatar here */}
         <Typography variant="h6" sx={{ my: 2, color: 'primary.main', fontWeight: 'bold' }}>
           PV Chandra Shekar {/* Replace */}
         </Typography>
      </Box>
      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.12)' }}/>
      <List>
        {navItems.map((item) => ( // This loop now includes Experience
          <motion.div key={item.name} variants={isMobile ? {} : itemVariants}>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <Tooltip title={item.name} placement="right" disableHoverListener={!isMobile} /* Only show tooltip when collapsed/mobile? Or always? */>
                <ListItemButton
                  component={RouterLink}
                  to={item.path}
                  selected={location.pathname === item.path}
                  onClick={isMobile ? handleDrawerToggle : undefined} // Close drawer on mobile click
                  sx={{
                    minHeight: 48,
                    justifyContent: 'initial',
                    px: 2.5,
                    py: 1.5, // Increase padding
                    mb: 1, // Margin between items
                    borderRadius: theme.shape.borderRadius, // Use theme border radius
                    mx: 1.5, // Horizontal margin
                    '&.Mui-selected': {
                      backgroundColor: theme.palette.action.selected,
                      '&:hover': {
                        backgroundColor: theme.palette.action.hover,
                      },
                      // Add a visual indicator like a left border
                      // borderLeft: `3px solid ${theme.palette.primary.main}`,
                    },
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover,
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: 3, // Margin right icon
                      justifyContent: 'center',
                      color: location.pathname === item.path ? theme.palette.primary.main : theme.palette.text.secondary, // Active color for icon
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name} sx={{ opacity: 1, color: theme.palette.text.primary }} />
                </ListItemButton>
              </Tooltip>
            </ListItem>
          </motion.div>
        ))}
      </List>
    </motion.div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Mobile Menu Button */}
      {isMobile && (
         <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              position: 'fixed', // Fixed position
              top: 16,
              left: 16,
              zIndex: theme.zIndex.drawer + 1, // Ensure it's above the temporary drawer
              backgroundColor: 'rgba(18, 18, 18, 0.7)', // Dark background
              backdropFilter: 'blur(5px)',
              '&:hover': {
                backgroundColor: 'rgba(18, 18, 18, 0.9)',
              }
            }}
          >
            <MenuIcon />
          </IconButton>
      )}

      {/* Sidebar / Drawer */}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"} // Change variant based on screen size
        open={isMobile ? mobileOpen : true} // Control open state for mobile
        onClose={isMobile ? handleDrawerToggle : undefined} // Close handler for mobile
        ModalProps={{ // For temporary variant
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: isMobile ? 'block' : 'none', md: 'block' }, // Control display based on breakpoint
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
             width: drawerWidth,
             boxSizing: 'border-box',
             borderRight: 'none', // Remove default border
             backgroundColor: theme.palette.background.paper, // Use paper background
             overflowX: 'hidden', // Prevent horizontal scroll
          },
        }}
      >
        {/* Animate the permanent drawer */}
        {isMobile ? (
          drawerContent // Render directly for temporary drawer
        ) : (
          <motion.div
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            style={{ height: '100%' }} // Ensure motion div takes full height
          >
            {drawerContent}
          </motion.div>
        )}
      </Drawer>

      {/* The main content area will be rendered outside this component, adjusted in App.js */}
    </Box>
  );
};

export default Navbar; // Consider renaming to SidebarNav if preferred