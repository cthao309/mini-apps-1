const fs = require('fs');

const convertJson2csv = function(req, res) {
  console.log('console log from the json2csv file...', req.body);

  let jsonData = {};
  let csvValues = [];
  let csvFields = {};

  fs.readFile(__dirname + `/../samples/${req.body.jsonFile}`, 'utf8', (err, data) => {
    if(err) {
      console.log('err => ', err);
      res.status(500).send(err);
    } else {
      jsonData = JSON.parse(data);
      console.log('$$$ =>', jsonData)

      let getJSONpropertieAndValue = function(jsonData) {
        let userInfo = [];

        for(let key in jsonData) {
          if(key !== 'children') {
            csvFields[key] = true;
            userInfo.push(jsonData[key]);
          }
        }

        csvValues.push(userInfo);

        if(jsonData.children && jsonData.children.length > 0) {
          for(let i = 0; i < jsonData.children.length; i++) {
            getJSONpropertieAndValue(jsonData.children[i]);
          }
        }
      }

      getJSONpropertieAndValue(jsonData);

      //#############################################################
      // reformat the converted csv file to be save for download
      //#############################################################
      let csvCol = Object.keys(csvFields).join(',');
      let saveCSVRow = '';

      csvValues.forEach(el => {
        saveCSVRow += `${el.join(',')}\n`;
      });

      let saveCSVFile = `${csvCol}\n${saveCSVRow}`;

      let fileName = req.body.jsonFile.split('.')[0];

      console.log('file Name: ', fileName)
      console.log(saveCSVFile)

      fs.writeFile(__dirname + `/../samples/${fileName}.csv`, saveCSVFile, (err) => {
        if(err) throw err;
        console.log('\n$$$$$$ The file has been saved! $$$$$\n')
      })

      //#############################################################
      // reformat to be display csv file to the browser
      //#############################################################
      let csvRow = '';

      csvValues.forEach(el => {
        csvRow += `<p> ${el.join(',')} </p>`;
      });

      let csvResult = `<p>${csvCol}</p>${csvRow}`;

      let html = `
        <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>csv generator</title>
            <link rel="stylesheet" href="style.css" />
          </head>
          <body>
            <section class="content_container">
              <div class="heading">
                  <h2>CSV GENERATOR</h2>
                  <h4>By Charlie Thao</h4>
              </div>

              <!-- form tag for user input of json text -->
              <form class="form" method="POST" action="/json2csv">
                <label for="json">Select a json file to upload:</label>
                <input type="file" id="jsonfile" name="jsonFile" />
                <input type="submit" value="Submit" />
              </form>
            </section>

            <div class="data">
              ${csvResult}
              <a href="/download/${fileName}">Download CSV File</a>
            </div>

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
            <script src="app.js"></script>
          </body>
        </html>`

      res.status(201).send(html);
    }
  })


}

module.exports = convertJson2csv;