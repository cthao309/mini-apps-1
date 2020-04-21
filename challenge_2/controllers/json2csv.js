
const convertJson2csv = function(req, res) {
  console.log('console log from the json2csv file...', req.body);
  let csvValues = [];
  let csvFields = {};

  let jsonData = JSON.parse(req.body.jsonData);
  console.log('data => ', jsonData)

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

  console.log(Object.keys(csvFields))
  console.log(csvValues)

  let csvCol = Object.keys(csvFields).join(',');
  let csvRow = '';
  csvValues.forEach(el => {
    csvRow += el.join(',') + '\n';
  });

  let csvResult = csvCol + '\n' + csvRow;

  console.log(csvResult)
  res.status(201).send(csvResult);
}

module.exports = convertJson2csv;