const {rideRepository}=require("../Repository/ride-repo")


class rideServices{
    constructor()
    {
        this.rideRepo=new rideRepository();
    }


    async CreateRide(data){
       try{
           const ride=await this.rideRepo.createRide(data) ;
           return ride;
       }
       catch(err)
       {
          console.log(err)
          throw {err}
       }
    }
}