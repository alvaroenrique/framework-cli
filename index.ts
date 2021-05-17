#!/usr/bin/env node
import inquier from "inquirer";

import initProject from "./commands/init-proyect";
import initDevelopmentMode from "./commands/init-development-mode";
import buildProject from "./commands/build-project";
import runApm from "./commands/apm/index";

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
      initProject();
    } else if (answers.action === "Iniciar entorno de desarrollo") {
      initDevelopmentMode();
    } else if (answers.action === "Compilar proyecto") {
      buildProject();
    } else if (answers.action === "Iniciar APM") {
      console.log("\n\nPreparando auditoría ...\n\n");
      runApm();
    }
  });
