import React, { useState } from "react";
function ChangeTheme() {
  const [theme, setTheme] = useState("light");

  const changeToDarkTheme = () => {
    setTheme("dark");
  };
  const changeToLightTheme = () => {
    setTheme("light");
  };

  return (
    <div
      style={{
        background: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
        height: "100vh",
      }}
    >
      <button
        style={{
          display: theme === "dark" ? "none" : "",
        }}
        className="btn-theme"
        onClick={changeToDarkTheme}
      >
        dark theme
      </button>
      <button
        style={{
          display: theme === "light" ? "none" : "",
        }}
        className="btn-theme"
        onClick={changeToLightTheme}
      >
        light theme
      </button>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        quibusdam minima atque eligendi quidem voluptatibus ex, possimus quasi
        id nemo tempora alias voluptatum officia dolor doloremque sit iste
        laudantium libero!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        quibusdam minima atque eligendi quidem voluptatibus ex, possimus quasi
        id nemo tempora alias voluptatum officia dolor doloremque sit iste
        laudantium libero!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        quibusdam minima atque eligendi quidem voluptatibus ex, possimus quasi
        id nemo tempora alias voluptatum officia dolor doloremque sit iste
        laudantium libero!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        quibusdam minima atque eligendi quidem voluptatibus ex, possimus quasi
        id nemo tempora alias voluptatum officia dolor doloremque sit iste
        laudantium libero!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        quibusdam minima atque eligendi quidem voluptatibus ex, possimus quasi
        id nemo tempora alias voluptatum officia dolor doloremque sit iste
        laudantium libero!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        quibusdam minima atque eligendi quidem voluptatibus ex, possimus quasi
        id nemo tempora alias voluptatum officia dolor doloremque sit iste
        laudantium libero!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        quibusdam minima atque eligendi quidem voluptatibus ex, possimus quasi
        id nemo tempora alias voluptatum officia dolor doloremque sit iste
        laudantium libero!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        quibusdam minima atque eligendi quidem voluptatibus ex, possimus quasi
        id nemo tempora alias voluptatum officia dolor doloremque sit iste
        laudantium libero!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        quibusdam minima atque eligendi quidem voluptatibus ex, possimus quasi
        id nemo tempora alias voluptatum officia dolor doloremque sit iste
        laudantium libero!
      </p>
      <br />
    </div>
  );
}

export default ChangeTheme;
