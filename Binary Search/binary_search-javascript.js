function binarySearch(arr, val){
    var lo = 0;
    var hi = arr.length -1 ;
    var ctr = 0;
    var result = [];
    //REPLACE THIS CODE WITH YOUR binarySearch METHOD
    while(lo<=hi) {
        mid=parseInt((lo+hi)/2);
        ctr++;
        if(arr[mid]>val) {
            hi=mid-1;
        }
        else if(arr[mid]<val) {
            lo=mid+1;
        }
        else {
            result.push(mid);
            result.push(ctr);
            return result;
        }
    }
    return [-1 ,ctr];
}
