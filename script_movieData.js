// Construct an object called table
function tableObject(
    //Define parameters:
      movieTitle,
      plot,
      cast,
      runTime,
      rating,
      year,
     ){
      // Denfine porperties:
      this.movieTitle=movieTitle;
      this.plot=plot;
      this.cast=cast;
      this.runTime=runTime;
      this.rating=rating;
      this.year=year;
    }
  
  /** This movie data needs to be rendered into the html DOM**/
  let movieData = {
    "The Darjeeling Limited": {
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      year: 2007,
    },
    "The Royal Tenenbaums": {
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      rating: 7.6,
      year: 2001,
      cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
      runtime: 170,
    },
    "Fantastic Mr. Fox": {
      year: 2009,
      plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      cast: [
        "George Clooney",
        "Meryl Streep",
        "Bill Murray",
        "Jason Schwartzman",
      ],
      runtime: 147,
      rating: 7.9,
    },
    "The Grand Budapest Hotel": {
      rating: 8.1,
      runtime: 159,
      year: 2014,
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    },
  };
  
  /** I have created headings for the table**/
  const headings = ["Movie Titles", "Plot", "Cast", "Runtime", "Rating", "Year"];
  
  let table = document.querySelector("table");
  
  // The heading row is used to show that the row of td elements contained in it are the heading of the table
  // This is helpful for when you want to add styling to a heading that you don't want on the other table data.
  var headingRow = document.createElement("thead");
  // You only need to create on row (tr element) for the headings, then add a td element for each heading
  var headers = document.createElement("tr");
  // I've initialised the td variable here so it can be used, then overwritten in each loop and used again, 
  // that saves having to initialise the variable every time in the loop
  var td;
  for(let i = 0; i<headings.length; i++){
    td = document.createElement("td"); /** The <td> element represents a cell of data**/
    // Created a td element, now you have to add a text element to that by appending a child which is a text node of the heading name
    td.appendChild(document.createTextNode(headings[i]));
    // Add this heading to the heading row
    headers.append(td);
  }
  // We now have all the header elements so can add them to the heading row, then add that to the table
  headingRow.append(headers);
  table.append(headingRow);
  
  // Like the td elements above, I will initialise all variables once and just override them each time
  var newTr, plotTd, castTd, runtimeTd, ratingTd, yearTd;
  // The Object.entries() method allows us to retrieve an object's keys and values, which are transformed into movieTitle and data for the loop
  for (var [movieTitle, data] of Object.entries(movieData)) {
    newTr = document.createElement("tr");
    
    // Create the td elements and add their text content by creating text nodes
    titleTd = document.createElement("td");
    titleTd.appendChild(document.createTextNode(movieTitle));
    plotTd = document.createElement("td");
    plotTd.appendChild(document.createTextNode(data.plot));
    castTd = document.createElement("td");
    castTd.appendChild(document.createTextNode(data.cast));
    runtimeTd = document.createElement("td");
    runtimeTd.appendChild(document.createTextNode(data.runtime));
    ratingTd = document.createElement("td");
    ratingTd.appendChild(document.createTextNode(data.rating));
    yearTd = document.createElement("td");
    yearTd.appendChild(document.createTextNode(data.year));
  
    // We have created all the td elements which have their text added to them, add these all to the current row
    newTr.append(titleTd, plotTd, castTd, runtimeTd, ratingTd, yearTd);
    // Add this row to the table
    table.append(newTr)
  }
  
  /** User input updates the table **/
  
  
  let button = document.querySelector("button");
  button.addEventListener("click",(event)=>{ /** This creates an event listener for the element button**/
      var info = {} /** This is an object that will store user input from the browser **/
      info.movieTitle = document.getElementById("title").value;
      info.plot = document.getElementById("plot").value;
      info.cast = document.getElementById("cast").value;
      info.runTime = document.getElementById("run_time").value;
      info.rating = document.getElementById("rating").value;
      info.year = document.getElementById("year").value;
    
    /** Create a new row of data based on the users input**/
    newTr = document.createElement("tr");
    
    // Create the td elements and add their text content by creating text nodes
    titleTd = document.createElement("td");
    titleTd.appendChild(document.createTextNode(info.movieTitle));
    plotTd = document.createElement("td");
    plotTd.appendChild(document.createTextNode(info.plot));
    castTd = document.createElement("td");
    castTd.appendChild(document.createTextNode(info.cast));
    runtimeTd = document.createElement("td");
    runtimeTd.appendChild(document.createTextNode(info.runtime));
    ratingTd = document.createElement("td");
    ratingTd.appendChild(document.createTextNode(info.rating));
    yearTd = document.createElement("td");
    yearTd.appendChild(document.createTextNode(info.year));
  
    // We have created all the td elements which have their text added to them, add these all to the current row
    newTr.append(titleTd, plotTd, castTd, runtimeTd, ratingTd, yearTd);
    // Add this row to the table
    table.append(newTr)
  
  })
  
  
  
  