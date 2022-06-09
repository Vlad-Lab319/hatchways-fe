import './App.css';
import useApplicationData from '../hooks/useApplicationData';
import StudentsList from './StudentsList';

function App() {

  const {
    students,
    tags,
    setTags,
    
  } = useApplicationData();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Students</h1>
      </header>
      <main>
        <StudentsList
          students={students}
          tags={tags}
          setTags={setTags}
        />
        
      </main>
    </div>
  );
}

export default App;
