
// Official documentation: https://github.com/doubco/countries
// yarn add @doubco/countries

/* [ countryList return in this format ] */
/*
    [ { _id: 'AF', label: 'Afghanistan' },{ _id: 'AX', label: 'Åland Islands' }]
*/

/* [ countries return in this format ]  */
/*
    {
        "countries": {
            "AF": {
            "name": "Afghanistan",
            "flag": "🇦🇫",
            "code": "+93",
            "currency": "AFN",
            "capital": "Kabul",
            "languages": [
                "ps",
                "uz",
                "tk"
            ],
            "nativeName": "افغانستان"
        },
    }
*/

import { countries, countryList } from "@doubco/countries";

export default defineEventHandler( async(event) => {
    const body = await readBody(event);
    const { country } = body ;
    return {
        countries: countryList.filter( data => data.label.toLocaleLowerCase().includes(country))
    }
  })