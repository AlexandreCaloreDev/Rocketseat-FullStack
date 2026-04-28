import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {

    await knex("courses").insert([
        { name: "BDE"},
        { name: "JS"},
        { name: "TS"},
        { name: "HTML"},
        { name: "GO"},
        { name: "RUST"},
        { name: "DELPHI"},
        { name: "NODE.JS"}

    ]);
};
