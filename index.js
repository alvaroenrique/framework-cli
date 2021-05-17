#!/usr/bin/env node
const inquier = require("inquirer");

const initProject = require("./commands/init-proyect");
const initDevelopmentMode = require("./commands/init-development-mode");
const buildProject = require("./commands/build-project");
const runApm = require("./commands/apm/index");

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
