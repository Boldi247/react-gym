import React from "react";

import { useState } from "react";
import { Box } from "@mui/material";

import HeroBannner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBannner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
