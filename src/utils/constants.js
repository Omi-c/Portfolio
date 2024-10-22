export const EMAIL    = "omaris.ti@gmail.com"
export const TECNOS_LIST = [
    'HTML',
    'CSS',
    'JavaScript',
    'React.js',
    'MySQL',
    'Nest.js',
    'Tailwind CSS',
    'Boostrap',
    'Diseño web responsive',
    'Python',
    'Java',
    'Git', 
    
]
export const PROJECTS_LIST = [
    {
        name                :"Clinical Laboratory Management Web System" ,
        repoLink            :"https://github.com/Omi-c/tesis.git",
        imgSrc              : "laboratorio.png",
        wil                 :"The most challenging project I've worked on so far is an administrative system for the Loma Linda clinical laboratory, which operates locally. The goal was to automate the laboratory's manual tasks by adding functionalities such as registering, deleting, and editing patient and inventory data, transcribing and sending results via email and Telegram, scheduling lab appointments, viewing price lists, and accessing patient and lab test records. The system featured two different types of users, doctor and staff, each with distinct permissions. I developed the web page using React for the frontend, Tailwind for styling, Nest for the backend, and MySQL for storing all the information.",
        type                : 4
    },

    {
        name                :"Weather App" ,
        repoLink            :"https://github.com/Omi-c/Clima",
        imgSrc              : "clima.png",
        wil                 :"In this weather application project in React, I learned how to consume and handle data from an external API (OpenWeather) to obtain real-time weather information from different cities. I implemented reusable components such as the search form and result cards, optimizing the use of hooks like useState to manage the state of weather data, the forecast, and the loading interface. I also handled errors in asynchronous requests and presented the data clearly, including a multi-hour forecast, improving my skills in API usage, state management, and UI/UX control.",
        type                : 1
    },
    {
        name                :"Task List" ,
        repoLink            :"https://github.com/Omi-c/To-do-list.git",
        imgSrc              : "listaTareas.png",
        wil                 :"In this task list project, I learned how to manage the state of tasks using React, allowing dynamic addition, editing, completion, and deletion of items in the list. I implemented controlled forms with the custom hook useForm to handle the input and updating of task descriptions, ensuring the form state resets properly. I also handled interactivity, including editing tasks with automatic focus and marking tasks as completed, while utilizing reusable components like TodoItem and TodoList to keep the code modular and organized.",
        mountedLink         :"https://listatareasomi.netlify.app",
        type                : 1
    },

    {
        name                : "Memory Game" ,
        repoLink            : "https://github.com/Omi-c/Calculadora",
        imgSrc              : "memoryGame.png",
        wil                 : "Memory card game built with React.js and Tailwind CSS. Through this project, I learned to manage state in React to control game flow, such as flipping cards, tracking moves, and determining when the game is over. I also implemented the board logic, shuffling cards and checking for matches, and used useEffect to initialize the game when the component mounts. Additionally, I enhanced the visual experience using Tailwind CSS to add smooth animations and transitions to the cards, and created reusable components like Card and Modal, allowing me to structure the code in a modular and efficient way.",
        mountedLink         :"https://dynamic-marshmallow-34f221.netlify.app",
        type                : 2
    },
    {
        name                :"Calculator" ,
        repoLink            :"https://github.com/PySanti/geome-man.git",
        imgSrc              : "calculadora.png",
        wil                 : "One of the first projects I worked on that tested my coding skills and logic. I learned to manage events and dynamically update the state of the interface, allowing the user to perform basic calculations such as addition, subtraction, multiplication, and division. I implemented features like clearing and backspacing characters, and handled errors to prevent calculations with empty inputs. Additionally, I integrated a dark/light mode by manipulating the DOM and CSS classes, which allowed me to practice dynamically changing themes with a style toggle.",
        mountedLink         :"https://calculadoraomi.netlify.app",
        type                : 0
    },
    {
        name                :"Laboratory Landing Page" ,
        repoLink            :"https://github.com/Omi-c/laboratorioLomaLinda",
        wil                 :"Landing page for a clinical bacteriology laboratory where the company’s requirements included a page displaying all the necessary information about the laboratory, such as who they are, the lab tests they perform, frequently asked questions, address, services, and some articles with relevant information. This page was built using HTML, CSS, and JavaScript.",
        mountedLink         :"https://laboratoriolomalinda.netlify.app",
        imgSrc              : "landingPageLab.png",
        type                : 1
    },
    


]