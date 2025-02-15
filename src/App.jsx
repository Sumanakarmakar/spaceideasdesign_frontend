import "./Components.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Wrapper from "./Layout/Wrapper";
import Contact from "./Pages/Contact";
import Pricing from "./Pages/Pricing";
import About from "./Pages/About";
import TitaniumGrade from "./Components/TitaniumGrade";
import PremiumGrade from "./Components/PremiumGrade";
import StandardGrade from "./Components/StandardGrade";
import EconomyGrade from "./Components/EconomyGrade";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css/animate.min.css";
import Services from "./Pages/Services";

function App() {
  AOS.init();
  const queryclient = new QueryClient();
  const public_route = [
    {
      path: "/",
      component: <Home />,
    },
    {
      path: "/about",
      component: <About />,
    },
    {
      path: "/services",
      component: <Services />,
    },
    {
      path: "/testimonials",
      component: <Services />,
    },
    {
      path: "/contact",
      component: <Contact />,
    },
  ];

  const private_route = [
    {
      path: "/pricing",
      component: <Pricing />,
    },
    {
      path: "/titanium",
      component: <TitaniumGrade />,
    },
    {
      path: "/premium",
      component: <PremiumGrade />,
    },
    {
      path: "/standard",
      component: <StandardGrade />,
    },
    {
      path: "/economy",
      component: <EconomyGrade />,
    },
  ];

  return (
    <>
      <QueryClientProvider client={queryclient}>
        <Router>
          <Wrapper>
            <Routes>
              {public_route.map((route) => (
                <Route path={route.path} element={route.component} />
              ))}
              {private_route.map((route) => (
                <Route path={route.path} element={route.component} />
              ))}
            </Routes>
          </Wrapper>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
