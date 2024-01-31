import "../assets/css/UserDashboard.css";
import CourseCard from "../pages/CourseCard";


function DashboardCourse() {

  return (
    <div className="dashboard-contents">
      
      <div className="contents">
        <div className="course-cont">
          <CourseCard />
        </div>
      </div>
    </div>
  );
}

export default DashboardCourse;
