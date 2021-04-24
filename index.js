const inquier = require("inquirer");

inquier
  .prompt([
    {
      type: "list",
      message: "¿Qué acción desea realizar?",
      name: "action",
      choices: [
        "Iniciar proyecto",
        "Iniciar entorno de desarrollo",
        "Compilar proyecto",
        "Crear la configuración del service worker",
        "Desplegar aplicación",
        "Iniciar APM",
      ],
    },
  ])
  .then((answers) => {
    console.log(answers);
    if (answers.action === "Iniciar proyecto") {
      const init = require("./commands/init-proyect");
      init();
    } else if (answers.action === "Iniciar entorno de desarrollo") {
      const init = require("./commands/init-development-mode");
      init();
    } else if (answers.action === "Compilar proyecto") {
      const init = require("./commands/build-proyect");
      init();
    }
  });
