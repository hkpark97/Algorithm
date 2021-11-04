function maxDifference(px) {

    let maxD = -1;
    let tempD = px[0];

    for ( let i = 0; i < px.length; i++ ) {
        if (px[i] > tempD && maxD < px[i] - tempD) {
            maxD = px[i] - tempD;
        } 
        if (px[i] < tempD) {
            tempD = px[i];
        }
    } 

    return maxD;
}