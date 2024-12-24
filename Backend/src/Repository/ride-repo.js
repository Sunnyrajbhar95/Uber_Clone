const Ride=require("../Model/ride")

class rideRepository{
    async createRide(data)
    {
        try{
         const ride=await Ride.create({
            user,
            source,
            destination,
            vehicalType
         })
         return ride;
        }
        catch(err){
        console.log(err);
         throw {err}; 
        }
    } 
}

module.exports={
    rideRepository
}