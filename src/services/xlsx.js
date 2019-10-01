import * as XLSX from 'xlsx';
import axios from "axios";

export const urlXlsxGoogle = "https://docs.google.com/spreadsheets/d/1Oikpp2P8Tp4I8s4gIJEjK4rnR4WRIoG8SMyawtCifSs/export?format=xlsx";

export const getXLS = () => {
    return axios.request({
        url: urlXlsxGoogle,
        method: 'get',
        responseType: 'arraybuffer',
        headers: {
            Accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        },
    }).then((response) => {

        const data = new Uint8Array(response.data);
        const workbook = XLSX.read(data, {type: "array"});
        const typesWorksheet = workbook.Sheets[workbook.SheetNames[0]];
        const productsWorksheet = workbook.Sheets[workbook.SheetNames[1]];
        const types = XLSX.utils.sheet_to_json(typesWorksheet);
        const products = XLSX.utils.sheet_to_json(productsWorksheet);

        return {types: types, products: products}
    });
}

