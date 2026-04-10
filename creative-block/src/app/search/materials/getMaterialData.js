"use server"
export async function getMaterialData()
  {
    const objects = readExcelData("./MaterialDatabase.xlsx")
    return {
        props: {
            data: objects
        }
    };
  }