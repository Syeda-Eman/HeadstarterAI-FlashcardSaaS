"use client";

import { useState, useEffect } from 'react';
import { Container, Grid, Card, CardActionArea, CardContent, Typography, Box } from '@mui/material';
import { collection, doc, getDocs } from 'firebase/firestore';
import { useUser } from '@clerk/nextjs';
import { useSearchParams } from 'next/navigation'; // Adjust import if needed
import { db } from '/HeadstarterAI-FlashcardSaaS/firebase.js';// Adjust import if needed

export default function Flashcard() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [flashcards, setFlashcards] = useState([]);
  const [flipped, setFlipped] = useState({});

  const searchParams = useSearchParams();
  const search = searchParams.get('id');

  useEffect(() => {
    async function getFlashcard() {
      if (!search || !user) return;

      const colRef = collection(doc(collection(db, 'users'), user.id), search);
      const docs = await getDocs(colRef);
      const flashcards = [];
      docs.forEach((doc) => {
        flashcards.push({ id: doc.id, ...doc.data() });
      });
      setFlashcards(flashcards);
    }
    getFlashcard();
  }, [search, user]);

  const handleCardClick = (id) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {flashcards.map((flashcard) => (
          <Grid item xs={12} sm={6} md={4} key={flashcard.id}>
            <Card
              sx={{
                width: '300px', // Adjust width
                height: '200px', // Adjust height
                backgroundColor: flipped[flashcard.id] ? '#104EB1' : '#333333', // Set colors for front and back
                transition: 'transform 0.6s', // Add flip animation
                transform: flipped[flashcard.id] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                perspective: '1000px',
              }}
              onClick={() => handleCardClick(flashcard.id)}
            >
              <CardActionArea>
                <CardContent>
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      transformStyle: 'preserve-3d',
                      transition: 'transform 0.6s',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backfaceVisibility: 'hidden',
                        display: flipped[flashcard.id] ? 'none' : 'block',
                      }}
                    >
                      <Typography variant="h5" component="div">
                        {flashcard.front}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        position: 'absolute',
                        width: '200%',
                        height: '200%',
                        backfaceVisibility: 'hidden',
                        display: flipped[flashcard.id] ? 'block' : 'none',
                        transform: 'rotateY(180deg)',
                      }}
                    >
                      <Typography variant="h5" component="div">
                        {flashcard.back}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
