import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {

  const [students, setStudents] = useState([]);
  const [tags, setTags] = useState("");

  const urlStudents = `https://api.hatchways.io/assessment/students`;

  // Fetch remote data
  const initialFetch = async () => {

    try {
      const data = await Promise.all([
        axios.get(urlStudents)
      ]);

      const studentsData = data[0].data.students;

      return studentsData;

    } catch (err) {
      console.log(err);
    }
  };

  // Set initial states for students and tags
  useEffect(() => {
    initialFetch()
      .then((studentsData) => {

        const newTags = { ...tags }

        studentsData.map(
          student => newTags[student.id] = []
        )
        setStudents(studentsData);
        setTags(newTags);
      })
  }, []);

  return {
    students,
    tags,
    setTags,

  }
}