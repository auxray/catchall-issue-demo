const __dirname = import.meta.dirname;
process.env["NODE_CONFIG_DIR"] = __dirname + "/server/settings/";

import { register } from 'node:module';
import { pathToFileURL } from 'node:url';

register('ts-node/esm', pathToFileURL('./'));
