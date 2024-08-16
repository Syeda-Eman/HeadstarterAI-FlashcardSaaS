import Image from "next/image";
import getStripe from "@/utils/get_stripe";
import { SignIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Container, Toolbar, Typography, Button,Link, IconButton, Grid, Avatar, Box,Paper } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';
import FeatureIcon1 from '@mui/icons-material/FlashOn';
import FeatureIcon2 from '@mui/icons-material/Storage';
import FeatureIcon3 from '@mui/icons-material/Security';


export default function Home() {
  const testimonials = [
    {
      name: 'John Doe',
      title: 'Software Engineer',
      image: '/path-to-image/john.jpg',
      feedback: 'This Flashcard SaaS has drastically improved my learning experience. The interface is intuitive and the features are exactly what I needed.',
    },
    {
      name: 'Jane Smith',
      title: 'Product Manager',
      image: '/path-to-image/jane.jpg',
      feedback: 'I love how easy it is to create and organize flashcards. The customer support is fantastic too!',
    },
    {
      name: 'Mike Johnson',
      title: 'UX Designer',
      image: '/path-to-image/mike.jpg',
      feedback: 'The design of this SaaS is top-notch. It’s fast, reliable, and the best tool I’ve used for studying.',
    },
  ];

  return (
    <>
      {/* Navigation Bar (App Bar) */}
      <AppBar position="static" sx={{ backgroundColor: 'var(--accent-color)' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Galaxy Flashcards
          </Typography>
          <Button color="inherit" href="/sign_in">Sign In</Button>
          <Button color="inherit" href="/sign_up">Sign Up</Button>
          <UserButton />
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url(/images/header.jpeg)', // Replace with your background image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'var(--text-color)',
          py: 8,
          height: '80vh', // Adjust the height as needed
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Box>
            <Typography variant="h2" gutterBottom>
            Unlock Learning with Galaxy Flashcards
           </Typography>
            <Typography variant="h5" paragraph>
            Revolutionize your study routine with our cutting-edge flashcard system. Engage, learn, and excel effortlessly

           </Typography>
            <Button
              variant="contained"
              sx={{ backgroundColor: 'var(--highlight-color)', mt: 4 }}
              href="/signup"
            >
              Join the Waitlist
            </Button>
          </Box>
        </Container>
      </Box>

      
      {/* Features Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          {/* Feature Section Heading */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" gutterBottom>
              Key Features
            </Typography>
            <Typography variant="h6">
              Discover what makes our Flashcard SaaS stand out.
            </Typography>
          </Box>

          {/* Feature Grid */}
          <Grid container spacing={4}>
            {/* Feature 1 */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  backgroundColor: 'var(--accent-color)',
                  color: 'var(--text-color)',
                  p: 4,
                  borderRadius: 2,
                  textAlign: 'center',
                  boxShadow: 3,
                }}
              >
                <FeatureIcon1 sx={{ fontSize: 60, color: 'var(--highlight-color)' }} />
                <Typography variant="h5" sx={{ mt: 2 }}>
                  Lightning Fast
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  Experience incredibly fast load times and smooth performance.
                </Typography>
              </Box>
            </Grid>

            {/* Feature 2 */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  backgroundColor: 'var(--accent-color)',
                  color: 'var(--text-color)',
                  p: 4,
                  borderRadius: 2,
                  textAlign: 'center',
                  boxShadow: 3,
                }}
              >
                <FeatureIcon2 sx={{ fontSize: 60, color: 'var(--highlight-color)' }} />
                <Typography variant="h5" sx={{ mt: 2 }}>
                  Secure Storage
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  Your data is safe with industry-leading encryption and security practices.
                </Typography>
              </Box>
            </Grid>

            {/* Feature 3 */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  backgroundColor: 'var(--accent-color)',
                  color: 'var(--text-color)',
                  p: 4,
                  borderRadius: 2,
                  textAlign: 'center',
                  boxShadow: 3,
                }}
              >
                <FeatureIcon3 sx={{ fontSize: 60, color: 'var(--highlight-color)' }} />
                <Typography variant="h5" sx={{ mt: 2 }}>
                  Reliable Support
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  Our team is here to help you 24/7 with any questions or issues.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* Testimonials Section */}
      <Box sx={{ py: 8, backgroundColor: 'var(--secondary-text-color)', color: 'var(--primary-color)' }}>
        <Container maxWidth="lg">
          {/* Testimonial Section Heading */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" gutterBottom>
              What Our Users Say
            </Typography>
            <Typography variant="h6">
              Hear from some of our satisfied users.
            </Typography>
          </Box>

          {/* Testimonial Grid */}
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  sx={{
                    p: 4,
                    backgroundColor: 'var(--accent-color)',
                    color: 'var(--text-color)',
                    borderRadius: 2,
                    textAlign: 'center',
                    boxShadow: 3,
                  }}
                >
                  <Avatar
                    alt={testimonial.name}
                    src={testimonial.image}
                    sx={{ width: 80, height: 80, margin: 'auto', mb: 2 }}
                  />
                  <Typography variant="h6" gutterBottom>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'var(--highlight-color)' }}>
                    {testimonial.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    {testimonial.feedback}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box sx={{ py: 8, backgroundColor: 'var(--accent-color)', color: 'var(--text-color)' }}>
      <Container maxWidth="lg">
        {/* Pricing Section Heading */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" gutterBottom>
            Choose Your Plan
          </Typography>
          <Typography variant="h6">
            Find the perfect plan for your learning needs.
          </Typography>
        </Box>

        {/* Pricing Grid */}
        <Grid container spacing={4}>
          {/* Basic Plan */}
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                backgroundColor: 'white',
                color: 'var(--primary-color)',
                p: 4,
                borderRadius: 2,
                textAlign: 'center',
                boxShadow: 3,
              }}
            >
              <Typography variant="h5" sx={{ mb: 2 }}>
                Basic Plan
              </Typography>
              <Typography variant="h4" sx={{ mb: 2 }}>
                $9.99 / month
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                Access to basic features and a limited number of flashcards.
              </Typography>
              <Button
                variant="contained"
                sx={{ backgroundColor: 'var(--highlight-color)' }}
                href="/signup"
              >
                Choose Plan
              </Button>
            </Box>
          </Grid>

          {/* Pro Plan */}
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                backgroundColor: 'white',
                color: 'var(--primary-color)',
                p: 4,
                borderRadius: 2,
                textAlign: 'center',
                boxShadow: 3,
              }}
            >
              <Typography variant="h5" sx={{ mb: 2 }}>
                Pro Plan
              </Typography>
              <Typography variant="h4" sx={{ mb: 2 }}>
                $19.99 / month
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                Includes advanced features, unlimited flashcards, and priority support.
              </Typography>
              <Button
                variant="contained"
                sx={{ backgroundColor: 'var(--highlight-color)' }}
                href="/signup"
              >
                Choose Plan
              </Button>
            </Box>
          </Grid>

          {/* Premium Plan */}
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                backgroundColor: 'white',
                color: 'var(--primary-color)',
                p: 4,
                borderRadius: 2,
                textAlign: 'center',
                boxShadow: 3,
              }}
            >
              <Typography variant="h5" sx={{ mb: 2 }}>
                Premium Plan
              </Typography>
              <Typography variant="h4" sx={{ mb: 2 }}>
                $29.99 / month
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                All Pro features plus personalized coaching and additional resources.
              </Typography>
              <Button
                variant="contained"
                sx={{ backgroundColor: 'var(--highlight-color)' }}
                href="/signup"
              >
                Choose Plan
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
    <Box sx={{ py: 8, backgroundColor: 'var(--text-color)', color: 'var(--primary-color)' }}>
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" gutterBottom>
            Why Choose Galaxy Flashcards?
          </Typography>
          <Typography variant="h6">
            Discover the unique features and benefits that set us apart.
          </Typography>
        </Box>

        {/* Features Grid */}
        <Grid container spacing={4}>
          {/* Feature 1 */}
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 4,
                borderRadius: 2,
                backgroundColor: 'var(--accent-color)',
                color: 'white',
                textAlign: 'center',
                boxShadow: 3,
              }}
            >
              <CheckCircleIcon sx={{ fontSize: 60, color: 'var(--highlight-color)', mb: 2 }} />
              <Typography variant="h5" sx={{ mb: 2 }}>
                Interactive Learning
              </Typography>
              <Typography variant="body1">
                Engage with interactive flashcards that make learning more dynamic and effective.
              </Typography>
            </Paper>
          </Grid>

          {/* Feature 2 */}
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 4,
                borderRadius: 2,
                backgroundColor: 'var(--accent-color)',
                color: 'white',
                textAlign: 'center',
                boxShadow: 3,
              }}
            >
              <CheckCircleIcon sx={{ fontSize: 60, color: 'var(--highlight-color)', mb: 2 }} />
              <Typography variant="h5" sx={{ mb: 2 }}>
                Customizable Flashcards
              </Typography>
              <Typography variant="body1">
                Personalize your flashcards to match your study needs and preferences.
              </Typography>
            </Paper>
          </Grid>

          {/* Feature 3 */}
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 4,
                borderRadius: 2,
                backgroundColor: 'var(--accent-color)',
                color: 'white',
                textAlign: 'center',
                boxShadow: 3,
              }}
            >
              <CheckCircleIcon sx={{ fontSize: 60, color: 'var(--highlight-color)', mb: 2 }} />
              <Typography variant="h5" sx={{ mb: 2 }}>
                Progress Tracking
              </Typography>
              <Typography variant="body1">
                Monitor your learning progress with detailed analytics and insights.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
    <Box
      sx={{
        backgroundColor: 'var(--accent-color)',
        color: 'var(--text-color)',
        py: 2,
        mt: 4,
        borderTop: `1px solid var(--subtle-color)`,
        textAlign: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2">
          © {new Date().getFullYear()} Galaxy Flashcards. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
    </>
  );
}
