// utils/runner.js
import path from "path";
import { pathToFileURL } from "url";
import fs from "fs";

async function run() {
  const [, , folder, fileName, ...rest] = process.argv;

  if (!folder || !fileName) {
    console.log("❌ Usage: node utils/runner.js <folder> <filename> [args]");
    console.log("Example: node utils/runner.js recursion factorial 5");
    process.exit(1);
  }

  const filePath = path.resolve(process.cwd(), folder, `${fileName}.js`);

  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    process.exit(1);
  }

  console.log(`🚀 Running: ${folder}/${fileName}.js`);

  const module = await import(pathToFileURL(filePath).href);
  const func = module[fileName] || module.default || Object.values(module)[0];

  if (typeof func !== "function") {
    console.error("⚠️ No exported function found in the file.");
    process.exit(1);
  }

  // Convert extra args (if any)
  const args = rest.map(arg => {
  try {
      // Try to parse JSON arrays or objects
      return JSON.parse(arg);
    } catch {
      // Fallback: convert numeric strings to numbers
      return isNaN(arg) ? arg : Number(arg);
    }
  });

  console.log("🧩 Input:", args.length ? args : "(no args)");

  const output = args.length ? func(...args) : func();

  console.log("✅ Output:", output);
}

run();
