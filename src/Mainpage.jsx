import Homepage from './Homepage';
import Navbar from './Navbar';
import List from './List';
import CourseNavigation from './CourseNavigation'
import Testimonial from './Testimonial';

function Mainpage() {
  return (
    <div className="App">
     <Navbar />
     <Homepage />
     <List />
     <CourseNavigation />
     <Testimonial />
     
    </div>
  );
}

export default Mainpage;