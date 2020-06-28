"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function helloWorld(req, res) {
    return res.json({ message: 'Hello from the function' });
}
exports.default = helloWorld;
