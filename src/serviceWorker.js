class ServiceWorker{
    myStorage = window.localStorage;
    constructor(){
       if(!this.myStorage.getItem("liked")){
        this.myStorage.setItem("liked","[]")
       }
    }
    get LikedPhoto(){
        return JSON.parse(this.myStorage.getItem("liked"));
    }
    addLiked(datestring){
        let toupdate = this.LikedPhoto;
        if(!toupdate.includes(datestring)){
            toupdate.unshift(datestring);
            this.myStorage.setItem("liked",JSON.stringify(toupdate))
        }

    }

    unLike(datestring){
        let toupdate = this.LikedPhoto;
        let index = toupdate.indexOf(datestring);
        if(index>=0){
            toupdate.splice(index,1);
            this.myStorage.setItem("liked",JSON.stringify(toupdate))
        }
    }
}

export default ServiceWorker;