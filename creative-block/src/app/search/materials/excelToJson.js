import {readSheet} from "read-excel-file/node";
import { parseData } from "read-excel-file/node";

export default async function readExcelData(filename) {

    const raw = await readSheet(filename);
    const schema = {
    id:{
        column: 'Material Id',
        type: Number
    },
    MaterialName: {
    column: 'Material Name',
    type: String
  },
    MaterialImage: {
    column: 'Material Image',
    type: String
  },
  Date: {
    column: 'Date Added',
    type: Date
    // An example of using `oneOf`
  },
  MaterialType: {
    column: 'Material Type',
    type: String
  },
  MaterialBrand: {
        column: 'Material Brand',
        type: String
      },
      MaterialColor: {
        column: 'Material Color',
        type: String
      },
      UsedIn: {
        column: '#Used In',
        type: Number
      }
    }
    const results = await parseData(raw,schema);
    const objects = [];
    const errors = [];

    let row = 1;

    for (const { errors: errorsInRow, object } of results) {
  if (errorsInRow) {
    for (const error of errorsInRow) {
      errors.push({ error, row })
    }
  } else {
    objects.push(object)
  }
  row++
}

if (errors.length > 0) {
  for (const { error, row } of errors) {
    console.error('Error in data row', row, 'column', error.column, ':', error.error, error.reason || '')
  }
} else {
  console.log('Objects', objects)
}

return objects;
  }
