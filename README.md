Algo Used :-

// 1->1row -> width:100 <br/>
// 2->1row -> width:50 <br/>
// 3->1row -> width:33 <br/>
// 4->2row 2x2 -> width:50 <br/>
// 5->2row 3x2 or 2x3 width:33 <br/>
// 6->2row 3x3 width:33 <br/>
// 7->2row 3x4 or 4x3 width:25 <br/>
// 8->2row 4x4 width:25 <br/>
// 9->3row 3x3x3 width:33 <br/>
// 10->3row 3x3x4 width:25 --> 4x4x2 <br/>
// 11->3row 3x4x4 width:25 --> 4x4x3 <br/>

width used is in vw

n is number of attendees

 const findWidth = (n) => {
    let x = Math.ceil(n / Math.floor(Math.sqrt(n)));
    return parseInt(Math.floor(100 / x)); // assuming 100vw is the width of the container--->replace 100 by desired vw value
  };
  
 #Check Complete Code To know more.
