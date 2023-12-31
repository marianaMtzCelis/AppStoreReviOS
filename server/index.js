// this file is used to start the server
import fetch from 'node-fetch'
import express from 'express'
import fs from 'fs';
import cors from 'cors'

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

// endpoint to get apps' general data
app.get("/api/getAppData", (_, res) => {
    const filePath = 'data/app-ids.json';
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          res.status(500).json({
              error: "Server error"
          });
        }
        res.json({ message: JSON.parse(data) });
      });
});

// endpoint to get an app´s review list
app.get("/api/getAppReviews", (req, res) => {
    const appId = req.query.appId;
    const filePath = `data/${appId}.json`;
    const fileExists = fs.existsSync(filePath);
    let shouldFetchData = true;

    // define if data is recent enough to reuse or fetch again
    if (fileExists) {
        const { birthtime } = fs.statSync(filePath);
        shouldFetchData = (Date.now() - birthtime) > 900000; // 900000 equals 15 minutes
    }

    // if endpoint was called more than 15 minutes ago, return newly fetched reviews
    if (shouldFetchData) {
        fetch(`https://itunes.apple.com/us/rss/customerreviews/id=${appId}/sortBy=mostRecent/page=1/json`, {
            method: "GET"
        })
        .then((res) => res.json())
        .then((json) => { 
            const entries = json.feed.entry;

            let entriesList = [];
            for (const index in entries) {
                const entry = entries[index];
                const reviewDateString = new Date(entry.updated.label);
                const reviewYear = reviewDateString.getFullYear();
                const currentDate = new Date();
                const currentYear = currentDate.getFullYear();
                if (reviewYear == currentYear) {
                    let entryDictionary = {
                        "reviewTitle": entry.title.label,
                        "reviewContent": entry.content.label,
                        "author": entry.author.name.label,
                        "rating": entry["im:rating"].label,
                        "date": entry.updated.label
                    };
                    entriesList.push(entryDictionary);
                }
            }

            const jsonString = JSON.stringify(entriesList);
            fs.writeFileSync(`data/${appId}.json`, jsonString);
            res.json({ message: JSON.parse(jsonString) });
        })
        .catch((_) => {
            res.status(502).json({
                error: "App store API service error" // error with external API service
            });
        })
        .catch((_) => {
            res.status(500).json({
                error: "Server error" // error in internal endpoint
            });
        })

    } else {

        // if endpoint was called less than 15 minutes ago, return cached reviews
        fs.readFile(`data/${appId}.json`, 'utf8', (err, data) => {
            if (err) {
                res.status(500).json({error: "Server error"});
            }
            res.json({ message: JSON.parse(data) });
          });
    }

});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});