function calculateScalePoints(dimension, answers) {
    let min = answers.filter(e => e.dimension === dimension).length;
    let max = min * 5;
    let difference = (max - min) / 3;
    let middleTop = Math.floor(max - difference);
    let middleBottom = Math.floor(middleTop - 1 - difference);
    let points = {
        Bajo: {
            min: min,
            max: middleBottom - 1
        },
        Medio: {
            min: middleBottom,
            max: middleTop - 1
        },
        Alto: {
            min: middleTop,
            max: max
        }
    }
    return points;
}

function calculatePorcentage(answers, dimension, scale, score) {
    let { min, max } = calculateScalePoints(dimension, answers)[scale];
    let porcentage = (100 / (min - max)) * (-score + min);
    return porcentage;
}

const { MongoClient } = require('mongodb');

async function connect() {
    const uri = "mongodb+srv://gazapus:jwMEJHc93nC8XVJN@cluster0.tswk6.mongodb.net/tesis?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        let answers = client.db("tesis2").collection("answers").find();
        //let answers = client.db("tesis").collection("answerembus").find();
        answers = await answers.toArray();
        for (let answer of answers) {
            console.log('Updating to ' + answer.alias + '.........')
            for (let dimensionResult of answer.results) {
                let percentage = calculatePorcentage(answer.answers, dimensionResult.dimension, dimensionResult.scale, dimensionResult.score);
                let result = await client.db("tesis").collection("answerembus").updateOne(
                    {
                        _id: answer._id,
                        results: { $elemMatch: { _id: dimensionResult._id } }
                    }, {
                    $set: { "results.$.percentage": percentage }
                });
                console.log(`${result.modifiedCount} document(s) was/were updated.`);
            }
        }
    } catch (e) {
        console.error(e);
    } finally {
        client.close();     //close connection
    }
}

connect();