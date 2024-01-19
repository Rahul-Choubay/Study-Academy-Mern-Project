import Homepage from './Homepage';
import Navbar from '../myrou/Navbar';
import CourseNavigation from './CourseNavigation'
import Testimonial from './Testimonial';
import Footer from './Footer';
import Learners from './Learners';
import JoinPage from './JoinPage';


function Mainpage() {
  return (
    <div style={{width:"98.5vw", overflow:"hidden"}}>
     <Navbar />
     <Homepage />
     <CourseNavigation />
     <Testimonial />
     <Learners />
     <JoinPage />
     <Footer />
    </div>
  );
}

export default Mainpage;