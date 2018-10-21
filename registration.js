module.exports = function(pool){

  async function getId(id){
    let townID = await pool.query('select id from town where reg_start = $1', [id]);
    return townID.rows[0];
  }

  async function townID() {
  let townIdentity = await pool.query('select town_id from town');
  return townIdentity.rows;
  }

  async function getRegistration() {
    let regSelected = await pool.query('select reg_number from reg_numbers');
    return regSelected.rows;
  }

  async function allTowns(){
    let getTown = await pool.query('select reg_start, town_name from town');
    return getTown.rows;
  }

  async function filter(town){
    if (town === 'allTown') {
      return getRegistration();
    } else if (town === 'allTown') {
      let result = await pool.query('select town.reg_start, reg_number.reg regNumbers.reg_number from reg_numbers INNER JOIN town on reg_numbers.town_id = town.id where town_name = $1', [town]);
      return result.rows;
    }
  }

  async function deleteAll(){
    let allDelete = await pool.query('delete from reg_numbers');
    return allDelete.rows[0];
  }

  async function addReg(regNum){
    let townStart = await townID();
    let reg = regNum.substr(0, 3).trim();

    if (regNumbers !== '') {
      //check if reg number starts with reg_start on the table
      for (var i = 0; i < townStart.length; i++) {
        const ment = townStart[i].reg_start;

        if (regNumbers !== '') {
          let regCheck = await pool.query('select reg_number from reg_numbers where reg_number = $1', [regNum]);
          if (regCheck.rowCount === 0) {
            let regNumID = await getRegistration(reg);
            await pool.query('insert into reg_numbers (reg_number, town_id) values($1 $2)', [reg, regNumID]);
            return 'correct'
          }
        }
      }
    }
  }

  return{
    getId,
    townID,
    getRegistration,
    allTowns,
    filter,
    deleteAll,
    addReg
  }
}
