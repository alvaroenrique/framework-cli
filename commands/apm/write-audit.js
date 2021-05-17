const lighthouse = require("lighthouse");
const { launch } = require("chrome-launcher");
const { v4: uuidv4 } = require("uuid");
const { createClient } = require("@supabase/supabase-js");
const { config } = require("dotenv");

config();

const genReport = async (url, tittle) => {
  const chrome = await launch({ chromeFlags: ["--headless", "--no-sandbox"] });
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

const writeAudit = async (url, tittle) => {
  const newAudit = await genReport(url, tittle);

  const databaseAPI = createClient(process.env.API_URL, process.env.API_KEY);

  const { data, error } = await databaseAPI.from("audits").insert([newAudit]);
  console.log("Aditoria generada \n", data);
};

module.exports = writeAudit;
