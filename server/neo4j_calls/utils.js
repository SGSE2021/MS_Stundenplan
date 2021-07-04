import Env from '../config/Env.js'

let neo4j = require('neo4j-driver');
let { creds } = require("./../config/credentials");
let driver = neo4j.driver(Env.DB_URL, neo4j.auth.basic(creds.neo4jusername, creds.neo4jpw));

exports.deleteNodesAndRelationships = async function () {
    let session = driver.session();
    let all = "Nothing deleted";
    try {
        all = await session.run('MATCH (n) DETACH DELETE n', {
        })
        let results = await all.records.map(row => {
            return row.get(0).properties;
        })
        return results;
    }
    catch (err) {
        console.error(err);
        return all;
    }
    finally {
        session.close();
    }
}