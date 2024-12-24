
const db = require('../../Config/db');

const PersonsDetails = {
  getAllPersonsDetails: async () => {
    const data = await db.query('SELECT * FROM persons');
    return data.rows;
  },

  addPersons: async (persons) => {
    if (!Array.isArray(persons)) {
      throw new Error('Input must be an array of persons');
    }

    const values = persons.map(
      (person) => `(${person.personid}, '${person.lastname}', '${person.firstname}', '${person.address}', '${person.city}')`
    ).join(',');

    const query = `
      INSERT INTO persons (personid, lastname, firstname, address, city) 
      VALUES ${values} 
      RETURNING *;
    `;

    const result = await db.query(query);
    return result.rows;
  },


  addSinglePerson: async (person) => {
    const {  lastname, firstname, address, city } = person;
    const personid = Math.floor(Math.random() * 1000) + 1;
 
    const query = `
      INSERT INTO persons (personid, lastname, firstname, address, city) 
      VALUES ($1, $2, $3, $4, $5) 
      RETURNING *;
    `;

    const values = [personid, lastname, firstname, address, city];

    const result = await db.query(query, values);
    return result.rows[0];
  },
};



module.exports = PersonsDetails;

