import NavBar from "./components/nav/navBar";
import AboutPage from "./pages/about/about";
import ContactPage from "./pages/contact/contact";
import FOOTER from "./pages/footer/footer";
import Gallery from "./pages/gallery/gallery";
import HomePage from "./pages/home/home";
import RoomsPage from "./pages/room/rooms";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <HomePage/>
      <RoomsPage/>
      <AboutPage/>
      <Gallery/>
      <ContactPage/>
      <FOOTER/>
    </div>
  );
}
