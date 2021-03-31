"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendRes = void 0;
const sendRes = (res, code, message) => {
    return res.status(code).json({ message });
};
exports.sendRes = sendRes;
exports.default = exports.sendRes;
