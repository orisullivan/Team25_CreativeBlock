import {readSheet} from "read-excel-file/node";
import { parseData } from "read-excel-file/node";

export default async function readExcelData(filename) {

    const raw = await readSheet(filename);
    const schema = {
    id:{
        column: 'Entry Id',
        type: Number
    },
    entryTitle: {
    column: 'Entry Title',
    type: String
  },
    User: {
    column: 'Poster',
    type: String
  },
  Date: {
    column: 'Date Added',
    type: Date
  },
  Comments: {
    column: 'Comments',
    type: Number
  },
  Tags: {
        column: 'Tags',
        type: String
      },
      Description: {
        column: 'Description',
        type: String
      },
      Links: {
        column: 'Links',
        type: [String]
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
