import { schedule } from "node-cron";
import writeAudit from "./write-audit";
import dotenv from "dotenv";

dotenv.config();

// const task = schedule(
//   "* * * * *",
//   () => {
//     writeAudit(
//       "https://nextjs-cra.goldenshun.vercel.app/",
//       "http://localhost:3002/"
//     );
//   },
//   { scheduled: false }
// );

// const task2 = schedule(
//   "* * * * *",
//   () => {
//     writeAudit(
//       "https://nextjs-cra.goldenshun.vercel.app/nextjs",
//       "http://localhost:3002/server-side-rendering"
//     );
//   },
//   { scheduled: false }
// );

// task.start();
// task2.start();

(async () => {
  while (true) {
    await writeAudit(process.env.SITE_URL);
  }
})();
