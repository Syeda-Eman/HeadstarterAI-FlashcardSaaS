"use client"; 
import { Box, Container, Typography, Button, Link ,AppBar,Toolbar,user} from '@mui/material';
import { useState } from 'react';
import { SignIn } from '@clerk/nextjs'; 
export default function SignUpPage() {
  return (
    <Container maxWidth="100 vw">
        <AppBar position="static" sx={{ backgroundColor: '#000000' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Galaxy Flashcards
          </Typography>
          <Button color ="inherit">
            <Link href="/sign_up" color="inherit">Sign Up</Link>
          </Button>
          <Button color ="inherit">
            <Link href="/sign_in" color="inherit">Login</Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Box
          display='flex'
          flexDirection='column'
          alignItems= 'center'
          justifyContent="center"
          >

          <Typography variant="h4">Sign In</Typography>
          <SignIn/>
      </Box>
    </Container>
    
  )
}    