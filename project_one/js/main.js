"use strict";

    const data_table = [{first_name:'Rose',
                        last_name:'Tyler',
                        home:'Earth'
                      },
                       {first_name:'Zoe',
                        last_name:'Heriot',
                        home:'Space Station W3'
                      },
                       {first_name:'Jo',
                        last_name:'Grant',
                        home:'Earth'
                      },
                       {first_name:'Leela',
                        last_name:null,
                        home:'Unspecified'
                      },
                       {first_name:'Romana',
                        last_name:null,
                        home:'Gallifrey'
                      },
                       {first_name:'Clara',
                        last_name:'Oswald',
                        home:'Earth'
                      },
                       {first_name:'Adric',
                        last_name:null,
                        home:'Alzarius'
                      },
                       {first_name:'Susan',
                        last_name:'Foreman',
                        home:'Gallifrey'
                      }];


  //makeTable function can be resused by passing in any data array
  //can insert table into any element id by passing in idname string

  function makeTable(data, idname) {

      //declare html elements
      const table = document.createElement('table');
      table.style.opacity = 0;
      const tContainer = document.getElementById(idname);
      const heading = document.querySelector('h1');
      heading.style.opacity = 0;

      //find table heading names from any keys in data
      let tColumn = [];
      for (let i=0; i<data.length; i++) {
        for (let key in data[i]) {
          if (tColumn.indexOf(key) === -1) {
            tColumn.push(key);
          }
        }
      }

      //create table headings
      let tRow = table.insertRow(-1);
      for (let i = 0; i <tColumn.length; i++) {
        const tableHeader = document.createElement('th');
        tableHeader.innerText = tColumn[i];
        tRow.appendChild(tableHeader);
      }

      //create table rows, insert data in cells
      for (let i=0; i<data.length; i++) {
        tRow = table.insertRow(-1);
        for (let j=0; j<tColumn.length; j++) {
          let tableCell = tRow.insertCell(-1);
          tableCell.innerText = data[i][tColumn[j]];
        }
      }

      //place on page
      tContainer.innerHTML = '';
      tContainer.appendChild(table);
      heading.innerText = 'Table is Here';

      //fade in for fun without jquery
      let increment = 0;
      let timer = setInterval(function() {
        increment++;
        table.style.opacity = 0.05 * increment;
        heading.style.opacity = 0.05 * increment;
        if (increment >= 20) {
          clearInterval(timer);
          timer = undefined;
        }
      }, 100);

  };
