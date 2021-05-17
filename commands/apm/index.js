const { schedule } = require("node-cron");
const writeAudit = require("./write-audit");
const { config } = require("dotenv");

config();

const task = schedule(
  "* * * * *",
  async () => {
    await writeAudit(process.env.SITE_URL);
    console.log("\n\nPreparando auditoría ...\n\n");
  },
  { scheduled: false }
);

module.exports = task.start;

// (async () => {
//   let auditNumer = 1;
//   while (true) {
//     await writeAudit(process.env.SITE_URL);
//     console.log(`Nro Auditoria: ${auditNumer}`);
//     auditNumer = auditNumer + 1;
//   }
// })();
