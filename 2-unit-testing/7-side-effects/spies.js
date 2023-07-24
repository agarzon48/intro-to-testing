import path from "path";
import { promises as fs } from "fs";

export default function logRequest(request, filename = "requests.log") {
  const logPath = path.join(__dirname, "log", filename);
  return fs.writeFile(logPath, request + "\n", { flag: "a" });
}

export const logData = (logFn, data) => logFn(data);
