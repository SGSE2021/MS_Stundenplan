let Env = require("../config/Env");

let neo4j = require('neo4j-driver');
let driver = neo4j.driver(Env.DB_URL, neo4j.auth.basic(Env.DB_USER, Env.DB_PASSWORD));

exports.deleteNodesAndRelationships = async function () {
    let session = driver.session();
    let all = "Nothing deleted";
    try {
        all = await session.run('MATCH (n) DETACH DELETE n', {
        });
        return await all.records.map(row => {
            return row.get(0).properties;
        });
    }
    catch (err) {
        console.error(err);
        return all;
    }
    finally {
        session.close();
    }
}