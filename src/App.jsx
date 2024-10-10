import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "./data.json";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";
import ProfileSection from "./components/ProfileSection";

function App() {
  const [user, setUser] = useState({});
  const [userRepo, setUserRepo] = useState([]);
  const [contact, setContact] = useState({});
  const [texts, setTexts] = useState({});

  useEffect(() => {
    setUser(data.user);
    setUserRepo(data.userRepo);
    setContact(data.contact);
    setTexts(data.texts);
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div
      className="App text-dark bg-white font-inter"
      data-aos="fade-down"
      data-aos-duration="800"
    >
      <div className="py-4 w-full">
        <Header contact={contact} user={user} />
        <main>
          <ProfileSection user={user} texts={texts} />
          <ProjectSection userRepo={userRepo} texts={texts} />
        </main>
        <Footer contact={contact} />
      </div>
    </div>
  );
}

export default App;
