module.exports = function Registration(pool){

    async function checkRegistration(reg) {
        // dd
        let result = await pool.query('select * from town');
        
        if(result.rows.length === 1){
        let result = await pool.query('select * from town where reg_start = $1', [reg]);
        } else{
            
            // ...
            req.flash('info', 'Please enter a valid registration number');
        }
    }

    async function getTown() {
        let result = await pool.query('select * from town');
        return result.rows;
    }


    return {
        checkRegistration,
        getTown
        
    }
}