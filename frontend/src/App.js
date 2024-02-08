import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Feedback from "./components/Feedback";
import Opportunity from "./components/Opportunity";
import OpportunityList from "./components/OpportunityList";
import Chatbot from "./components/Chatbot";
import Login from "./components/Login";
import { Signuppage } from "./components/Signup";
import KnowAboutYou from "./components/KnowAboutYou";
import ResumeForm from "./components/KnowMore/ResumeForm";
import TestLinks from "./components/Progress/TestLinks";
import MentorForm from "./components/Application";
import Room from "./components/Room";

function App() {
  return (
    <div className="">
      <Router>
          <Nav />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedback" element={<Feedback />} />

          <Route path="/application" element={<MentorForm />} />

          <Route path="/opportunity" element={<Opportunity />} />
          <Route path="/opportunityList" element={<OpportunityList />} />

          <Route path="/knowaboutyou" element={<KnowAboutYou />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/room/:roomId" element={<Room />} />
          <Route path="/resumeform" element={<ResumeForm />} />
          
          <Route path="/testlinks" element={<TestLinks />} />

          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signuppage />}></Route>
          </Routes>

      </Router>
    </div>
  );
}

export default App;
