import { useState } from "react";
import Student from "./Student";

export default function StudentsList(props) {

  const {
    students,
    tags,
    setTags,
  } = props;

  const [searchByNameValue, setSearchByNameValue] = useState("");
  const [searchByTagValue, setSearchByTagValue] = useState("");

  const studentsToRender = students
    .filter((student) => { // Filter by name
      if (!searchByNameValue) {
        return student;
      } else if (
        student.firstName.toLowerCase().includes(searchByNameValue)
        ||
        student.lastName.toLowerCase().includes(searchByNameValue)
      ) {
        return student;
      }
    })
    .filter((student) => { // Filter by tag
      if (!searchByTagValue) {
        return student;
      } else if (
        tags[student.id].find(tag => tag.toLowerCase().includes(searchByTagValue))
      ) {
        return student;
      }
    })
    .map((student, i) => // Looping for render

      <Student
        key={student.id}
        id={student.id}
        firstName={student.firstName}
        lastName={student.lastName}
        img={student.pic}
        email={student.email}
        company={student.company}
        grades={student.grades}
        skill={student.skill}
        tags={tags}
        setTags={setTags}
      />

    );

  const handleSearchByName = (e) => {
    setSearchByNameValue(e.target.value.toLowerCase());
  }

  const handleSearchByTag = (e) => {
    setSearchByTagValue(e.target.value.toLowerCase());
  }

  return (

    <div className="student-list">
      <div className="student-search">

        <input
          className="student-search-by-name"
          type="text"
          placeholder="Search by name"
          onChange={handleSearchByName}
        />
        <input
          className="student-search-by-tag"
          type="text"
          placeholder="Search by tag"
          onChange={handleSearchByTag}
        />
      </div>
      <div className="student-container">
        {studentsToRender}
      </div>
    </div>
  )
}