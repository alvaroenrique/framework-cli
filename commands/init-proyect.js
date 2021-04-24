const { exec } = require("child_process");

module.exports = () => {
  exec(
    "git clone https://github.com/alvaroenrique/framework-boilerplate.git",
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    }
  );
};
