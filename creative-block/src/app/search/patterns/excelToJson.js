import {readSheet} from "read-excel-file/node";
import { parseData } from "read-excel-file/node";

export default async function readExcelData(filename) {

    const raw = await readSheet(filename);
    const schema = {
    id:{
        column: 'Pattern Id',
        type: Number
    },
    User:{
        column: "Associated User",
        type: String
      },
    PatternName: {
        column: 'Listing Name',
        type: String
      },
    PatternImage: {
        column: 'Listing Image',
        type: String
      },
    Date: {
        column: 'Date Added',
        type: Date
      },
    CraftType: {
        column: 'Craft Type',
        type: String
    },
    PatternType: {
        column: 'Pattern Type',
        type: String
      },
    Difficulty: {
        column: 'Difficulty',
        type: String
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
