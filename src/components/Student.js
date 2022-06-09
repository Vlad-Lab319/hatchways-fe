import { useState } from "react";
import StudentDetails from "./StudentDetails";
import Grades from "./Grades";
import Tags from "./Tags";
import ToggleButton from "./ToggleButton";

export default function Student(props) {

  const { id, firstName, lastName, email, skill, company, grades, img, tags, setTags } = props;

  const [withDetails, setDetails] = useState(false);

  return (
    <li className="student">

      <img src={img} alt={firstName} className="student-img" />

      <div className="student-info">

        <div className="student-name">
          {firstName} {lastName}
        </div>

        <StudentDetails
          email={email}
          company={company}
          skill={skill}
          grades={grades}
        />

        <Tags
          id={id}
          tags={tags}
          setTags={setTags}
        />

        <Grades
          grades={grades}
          withDetails={withDetails}
        />

      </div>

      <ToggleButton
        className={"student-grades-button"}
        toggle={withDetails}
        handleToggle={setDetails}
        prop1={<>+</>}
        prop2={<>-</>}

      />

    </li>
  )
}