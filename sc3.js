var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
// given the array, display it into an HTML table
//id is the position
// elements to use: <table>, <th>, <tr>, <td>
// note: need to close table after the js script for the table to work

// for(var i = 11; i >= 0 ; i--){
//   document.write('<tr><td>'+(i+1)+'</td><td>'+ months[i] +'</td></tr>');
// }
//  if((i+1) % 2 === 0){
//   document.body.style.backgroundColor = 'gray';
// }

for(var i = 11; i >= 0 ; i--){
  if((i+1) % 2 === 0){
  document.write('<tr bgcolor ="gray"><td>'+(i+1)+'</td><td>'+ months[i] +'</td></tr>');
  } else {
  document.write('<tr><td>'+(i+1)+'</td><td>'+ months[i] +'</td></tr>');
}
}
