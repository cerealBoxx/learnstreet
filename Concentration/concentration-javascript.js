//Memory Concentration Game
function populate(){ 
    // This method populates the concentration game board by
    // populating and returning a 5x4 two-dimensional array.
    // Initialize all the values to zero (0), then randomly populate
    // numbers from 1-10 in different cells of the array, making
    //sure each number is only used twice.
    //REPLACE THIS CODE WITH YOUR  populate METHOD
    var board=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
    
    
    for(var i=0;i<10;i++) {
        var j=0;
        while(j<2) {
           var x = Math.floor((Math.random()*5));
           var y = Math.floor((Math.random()*4));
           if(board[y][x] == 0){
            board[y][x] = i+1;
            j = j + 1;
            }
        }
    }
    
    return board;
}
function selectCard(x, y){
    // Select the card at position (x, y). Return a card object with
    // values for its x & y location coordinates (i.e., [row][column]).
    //REPLACE THIS CODE WITH YOUR  selectCard METHOD
    var card = {
        "x":x,
        "y":y
    }
    return card;
}
function isMatch(selectedCard1, selectedCard2, matrix){
    // Given two card objects (like those created with the selectCard()
    // method above) and a 5x4 game board matrix of 0-9 numbers
    // (like the one from the populate() method above), check if the
    // values of the two cards are the same. Use the [x][y] coordinates
    // from each card object (selectedCard1 and selectedCard2) to
    // reference the 'matrix' values at the coordinates for each.
    // Compare them for a possible match. If they match, return true.
    // Otherwise return false.
    // Also make sure that selectedCard1 and selectedCard2 are not the same card!
    //REPLACE THIS CODE WITH YOUR  isMatch METHOD
    
    if(matrix[selectedCard1.x][selectedCard1.y]===matrix[selectedCard2.x][selectedCard2.y]) {
        return true;
    }
    
    return false;
}    