#!/usr/bin/env node
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('usage: with-app-env <cmd> ...');
  process.exit(1);
}
const child = spawn(args[0], args.slice(1), { stdio: 'inherit', shell: false });
child.on('exit', (code) => process.exit(code ?? 1));
