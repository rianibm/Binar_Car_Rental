"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const knex_1 = __importDefault(require("knex"));
const knexConfig = require("../../knexfile"); // Import your Knex configuration
const knex = (0, knex_1.default)(knexConfig.development);
objection_1.Model.knex(knex);
class Car extends objection_1.Model {
    static get tableName() {
        return "cars";
    }
    $formatJson(json) {
        json = super.$formatJson(json);
        return json;
    }
}
exports.default = Car;
