import lighthouse from "lighthouse";
import { launch } from "chrome-launcher";
import { v4 as uuidv4 } from "uuid";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const genReport = async (url: string, tittle?: string) => {
  const chrome = await launch({ chromeFlags: ["--headless"] });
  const options = {
    logLevel: "info",
    output: "json",
    onlyCategories: ["performance"],
    port: chrome.port,
  };
  const results = await lighthouse(url, options);

  await chrome.kill();

  return {
    id: uuidv4(),
    fcp: results.lhr.audits["first-contentful-paint"].numericValue,
    lcp: results.lhr.audits["largest-contentful-paint"].numericValue,
    fid: results.lhr.audits["max-potential-fid"].numericValue,
    cls: results.lhr.audits["cumulative-layout-shift"].numericValue,
    site: tittle || url,
  };
};

const writeAudit = async (url: string, tittle?: string) => {
  const newAudit = await genReport(url, tittle);

  const databaseAPI = createClient(process.env.API_URL, process.env.API_KEY);

  const { data, error } = await databaseAPI.from("audits").insert([newAudit]);
  console.log("Aditoria generada \n", data);
};

export default writeAudit;
