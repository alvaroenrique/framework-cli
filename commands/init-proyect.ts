import cproc from "child_process";

export default () => {
  const proc = cproc.spawn("git", [
    "clone",
    "https://github.com/alvaroenrique/framework-boilerplate.git",
  ]);

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
