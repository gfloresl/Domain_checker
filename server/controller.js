import fetch from "node-fetch";
import { validateIp, validateUrl } from "./helper.js";
import * as dotenv from "dotenv";
dotenv.config();
const { API_KEY } = process.env;

const controller = {};

controller.validateQuery = (req, res, next) => {
  const { query } = req.params;
  const isQueryValidIp = validateIp(query);
  const isValidUrl = validateUrl(query);
  if (isQueryValidIp || isValidUrl) {
    return next();
  } else {
    return next({
      log: "Express error in validating input query",
      status: 403,
      message: {
        err: `Please enter a valid IP address or domain. `,
      },
    });
  }
};

controller.fetchToApi = (req, res, next) => {
  const { domainName } = req.params;
  if (!API_KEY)
    return next({
      log: "Express error in validating WHOIS API key",
      status: 502,
      message: {
        err: "API Key missing, please provide it using .env file.",
      },
    });

  const url = `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${API_KEY}&domainName=${domainName}&ipWhois=1&outputFormat=json&ip=1`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      res.locals.data = data;
      return next();
    })
    .catch((error) => {
      console.error(error);
      next({
        log: "Express error in handling fetch request to WHOIS API",
        status: 502,
        message: {
          err: "WHOIS request failed, please try again later.",
        },
      });
    });
};

export default controller;