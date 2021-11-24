class Backpack {
    constructor(
        id,
        name,
        volume,
        color,
        pocketNum,
        strapLengthL,
        strapLengthR,
        lidOpen,
        dateAcquired,
        image
    ){
        this.id = id;
        this.name = name;
        this.volume = volume;
        this.color = color;
        this.pocketNum = pocketNum;
        this.strapLength = {
            left: strapLengthL,
            right: strapLengthR,
        };
        this.lidOpen = lidOpen;
        this.dateAcquired = dateAcquired;
        this.image = image;
    };
    toggleLid(lidStatus) {
        this.lidStatus = lidStatus;
    }
    newstrapLength(strapLengthL, strapLengthR) {
        this.strapLength.left = strapLengthL;
        this.strapLength.right = strapLengthR;
    }
    backpackAge(){
        let now = new Date();
        let aquired = new Date(this.dateAcquired);
        let elapsed = now - aquired; //elapsed time in milliseconds
        let daysSinceAcquired = Math.floor(elapsed/ (1000 * 60 * 60 * 24));
        return daysSinceAcquired;
    }
}

export default Backpack;
