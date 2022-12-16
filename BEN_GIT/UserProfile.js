
window.onload=()=>{
  document.querySelector("table > tbody > tr:nth-child(1) > td:nth-child(2)").innerHTML;
};

getUniqueValues();

function getUniqueValues(){
  var unique_col_values_dict = {};
  allFilters = document.querySelectorAll(".table-filter");
  allFilters.forEach(filter_i =>{
    col_index = filter_i.parentElement.getAttribute("col-index");

    const rows = document.querySelectorAll("#table tbody tr");
    rows.forEach((row)=>{
      cell_value = row.querySelector("td:nth-child(" + col_index +")").innerHTML;
      if(col_index in unique_col_values_dict){
        if(unique_col_values_dict[col_index].includes(cell_value)){

        }else{
          unique_col_values_dict[col_index].push(cell_value)
        }
      }else{
        unique_col_values_dict[col_index] = new Array(cell_value)
      }

    })

  })
  updateSelectOptions(unique_col_values_dict);
}

function updateSelectOptions(unique_col_values_dict){
  allFilters = document.querySelectorAll(".table-filter");

  allFilters.forEach((filter_i) =>{
    col_index = filter_i.parentElement.getAttribute('col-index');

    unique_col_values_dict[col_index].forEach((i) => {
      filter_i.innerHTML = filter_i.innerHTML + `\n<option value="${i}">${i}</option>`

    })
  })
}

function filterRows(){
  allFilters = document.querySelectorAll(".table-filter");
  var filter_value_dict={}

  allFilters.forEach((filter_i)=>{
    col_index = filter_i.parentElement.getAttribute('col-index');

    value= filter_i.value;
    if(value !="all"){
      filter_value_dict[col_index] = value;
    }
  })
  var col_cell_value_dict = {};

   const rows = document.querySelectorAll("#table tbody tr");
    rows.forEach((row)=>{
      var display_row = true;
      allFilters.forEach((filter_i)=>{
        col_index = filter_i.parentElement.getAttribute('col-index')
        col_cell_value_dict[col_index] = row.querySelector("td:nth-child(" + col_index + ")").innerHTML;
      })

      for (var col_i in filter_value_dict){
        filter_value = filter_value_dict[col_i];
        row_cell_value = col_cell_value_dict[col_i];

        if (row_cell_value.indexof(filter_value) === -1 && filter_value !== "all"){
          display_row = false;
          break;
        }
      }
      if (display_row === true){
        row.style.display = 'table-row';
      }else{
        row.style.display = 'none';
      }
    })

}

//
// function Filter() {
//   // Declare variables
//   var input, filter, table, tr, td, i, txtValue;
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   table = document.getElementById("table");
//   tr = table.getElementsByTagName("tr");
//
//   // Loop through all table rows, and hide those who don't match the search query
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
// }


// window.onload = ()=>{
//     var table ='';
//     var rows =
// }



//
// // Requiring the module
// const reader = require('xlsx')
//
// // Reading our test file
// const file = reader.readFile('./practices.xlsx')
//
// let data = []
//
// const sheets = file.SheetNames
//
// for(let i = 0; i < sheets.length; i++)
// {
//    const temp = reader.utils.sheet_to_json(
//         file.Sheets[file.SheetNames[i]])
//    temp.forEach((res) => {
//       data.push(res)
//    })
// }
