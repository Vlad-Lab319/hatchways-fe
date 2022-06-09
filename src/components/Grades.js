export default function Grades(props) {

  const { grades, withDetails } = props;

  const testResults = grades.map((test, i) =>
  <tr key={i}>
    <th>
      Test {i + 1}:
    </th>
    <th>
      {test}%
    </th>
  </tr>

)
  return (

    <div className="student-grades">
      {!withDetails ? (<div></div>)
        :
        (<table>
          <colgroup>
            <col style={{ width: '20%' }}></col>
            <col style={{ width: '80%' }}></col>
          </colgroup>
          <tbody>
            {testResults}

          </tbody>
        </table>)}

    </div>
  )
}