import { useState } from "react";
import Navbar from "./components/navbar";

// enum SelectedPage {
//   Home = "home",
//   Benefits = "benefits",
//   OurClasses = "ourclasses",
//   ContactUs = "contactus",
// }

const App = () => {
const [selectedPage, setSelectedPage] = useState<string>("home")

  return <div className="app bg-gray-20">
    <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
  </div>;
};

export default App;
