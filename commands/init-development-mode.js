const { spawn } = require("child_process");

module.exports = () => {
  const proc = spawn("npm", ["run", "dev"]);

  proc.stdout.on("data", function (data) {
    console.log(`${data}`);
  });

  proc.stderr.on("data", function (data) {
    console.log(`${data}`);
  });

  proc.on("close", function (code) {
    console.log(`Comando finalizado con código: ${code}`);
  });
};
