import './App.css';
import SignIn from "./pages/SignIn";
import MyAppBar from "./components/MyAppBar"
import RegisterStudent from "./pages/RegisterStudent";
import Curriculum from './pages/update_curriculum';
import TimeTable from './pages/updateTimeTable'
import AdminPage from './pages/AdminWelcome'
import GenerateNotice from "./pages/genNotice";
// import SignIn from "./pages/SignIn";
// import MyAppBar from "./components/MyAppBar"
// import RegisterStudent from "./pages/RegisterStudent";
// import RegisterTeacher from "./pages/RegisterTeacher";
import Attendance from "./pages/updateAttendance";
import Main from "./components/Main";


function App() {
  return (
    <div className="App">
      <Attendance/>
    </div>
  );
}
  
export default App;
