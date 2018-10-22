module.exports = function(reg){

  async function homeRoute(req, res){
    try {
        let townSelected = await reg.allTowns();
        let show = await reg.getRegistration();

        res.render('index',{
          show,
          townSelected
        });
    } catch(err){
        console.error('unable to get home', err);
    }
  }

  async function addRegistr(req, res) {
    try {
      //let regex = /^[a-zA-Z]{2,3}(\s)(?:([0-9]{3}[-][0-9]{2,3})|([0-9]{3,5}))$/;

      let inputReg = req.body.enterReg
      //.trim().toUpperCase();

      if (!inputReg && inputReg == '') {
        req.flash('error, Please enter a correct reg number')
        return res.redirect('/');
      } else {
        if (inputReg !== undefined) {
          let theReg = await reg.addReg(inputReg)
          if (theReg === 'success') {
            let showReg = await reg.getRegistration();
            req.flash('success', 'Registration number added');
            res.render('index', {
              showReg
            });
          } else {
            req.flash('error', 'Reg number should start with town ID or reg number already exists');
            res.redirect('/');
          }
        }
      }
    } catch(err){
        console.error('unable to add reg number', err);
    }
  }

  async function filtered(req, res){
    try {
      getTown = req.body.townNames;
      let townSelected = await reg.allTowns(getTown);
      let showFiltered = await reg.filter(getTown);
      townSelected = townSelected.map((moment) =>{
        if (moment.town_start === getTown) {
          moment['selected'] = 'selected';
        }
        return moment;
      });

      res.render('index', {
        townSelected,
        showFiltered
      });
    } catch(err){
        console.error('unable to show filtered reg numbers', err);
    }
  }

  async function deletedReg(req, res){
    try {
      if (await reg.getRegistration() == '') {
        req.flash('error', 'No registration numbers to delete');
        return res.redirect('/');
      } else {
        await reg.deletedReg()
        req.flash('success', 'Registration numbers have been deleted');
        res.redirect('/');
      }
    } catch(err){
        console.error('unable to delete reg numbers', err);
    }
  }

  return {
      homeRoute,
      addRegistr,
      filtered,
      deletedReg
  }
}
