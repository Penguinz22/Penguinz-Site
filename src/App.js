import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Particles from "react-tsparticles";
import Projects from "./pages/Projects";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Particles
        id="tsparticles"
        width="100%"
        height="100%"
        options={{
          background: {
            color: {
              value: "#525054",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: {
                enable: true,
                mode: "repulse",
              },
              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 100,
                duration: 1,
                opacity: 0.8,
                size: 8,
              },
              push: {
                quantity: 10,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#d5aee8",
            },
            links: {
              color: "#d5aee8",
              distance: 100,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: true,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 1000,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 4,
            },
          },
          detectRetina: true,
        }}
        className="fixed -z-10 w-full h-full"
      />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
