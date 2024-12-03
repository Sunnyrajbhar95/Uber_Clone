
const bcrypt = require('bcrypt');
function Compare(planpassword,hashpassword)
{
    return bcrypt.compareSync(planpassword, hashpassword);
}

module.exports=Compare