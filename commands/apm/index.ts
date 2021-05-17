import { schedule } from "node-cron";
import writeAudit from "./write-audit";
import dotenv from "dotenv";

dotenv.config();

const task = schedule(
  "* * * * *",
  async () => {
    await writeAudit(process.env.SITE_URL);
    console.log("\n\nPreparando auditoría ...\n\n");
  },
  { scheduled: false }
);

export default task.start;

// (async () => {
//   let auditNumer = 1;
//   while (true) {
//     await writeAudit(process.env.SITE_URL);
//     console.log(`Nro Auditoria: ${auditNumer}`);
//     auditNumer = auditNumer + 1;
//   }
// })();
