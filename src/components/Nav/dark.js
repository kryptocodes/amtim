import React, {useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import useDarkMode from "use-dark-mode";


const DarkToggle = () => {
    const darkMode = useDarkMode(false)
    return(
        <DarkModeToggle
        onChange={darkMode.toggle}
        checked={darkMode.value}
        size={60}
        speed={1.8}
      />
    )
}


export default DarkToggle