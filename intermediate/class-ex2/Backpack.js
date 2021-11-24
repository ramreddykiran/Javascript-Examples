class Backpack {
    constructor(
        name,
        volume,
        color,
        pocketNum,
        strapLengthL,
        strapLengthR,
        isZipOpen,

) {
    this.name = name;
    this.volume = volume;
    this.color = color,
    this.pocketNum = pocketNum;
    this.strapLength  = {
        left : strapLengthL,
        right : strapLengthR
    } ;
    this.isZipOpen = isZipOpen;
}

toggleZip(isZipOpen) {
    this.isZipOpen = isZipOpen;
}
newStrapLength(strapLengthL, strapLengthR) {
    this.strapLength.left = strapLengthL;
    this.strapLength.right = strapLengthR;
}
}
export default Backpack;