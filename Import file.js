// Modules only work with the HTTP(s) protocol.
// A web-page opened via the file:// protocol cannot use import / export.

import {name, email, age , favColor} from "./In-line individually";
import message from "./all in one export";
console.log(name, email, age , favColor)

console.log(message)