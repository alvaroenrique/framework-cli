import cproc from "child_process";

export default () => {
  const proc = cproc.spawn("npm", ["run", "build"]);

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
