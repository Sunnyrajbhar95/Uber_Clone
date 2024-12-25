const Ride=require("../Model/ride")

class rideRepository{
    async createRide({user,source,destination,fare,duration,distance,otp})
    {
        try{
         const ride=await Ride.create({
            user,
            source,
            destination,
            fare,
            duration,
            distance,
            otp
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