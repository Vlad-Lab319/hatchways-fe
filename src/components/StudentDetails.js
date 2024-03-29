export default function StudentDetails(props) {

  const {email, company, skill, grades} = props;

  const averageGrade = (grades ? grades.reduce((a, b) => a * 1 + b * 1) / grades.length : "N/A");

  return (
    <div className="student-details">
      Email: {email}
      <br />
      Company: {company}
      <br />
      Skill: {skill}
      <br />
      Average: {averageGrade}%
    </div>
  );
}