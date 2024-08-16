import Image from "next/image";
import getStripe from "@/utils/get_stripe";
import { SignIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Container, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
export default function Home() {
  return (
    <>
      {/* Navigation Bar (App Bar) */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Flashcard SaaS
          </Typography>
          <Button color="inherit" href="/signin">Sign In</Button>
          <Button color="inherit" href="/signup">Sign Up</Button>
          <UserButton />
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
        <Typography variant="h2" gutterBottom>
          Welcome to Flashcard SaaS
        </Typography>
        <Typography variant="h5" paragraph>
          Improve your learning experience with our advanced flashcard system.
        </Typography>
        <Button variant="contained" color="primary" href="/signup">
          Join the Waitlist
        </Button>
      </Container>
    </>
  );
}

  

