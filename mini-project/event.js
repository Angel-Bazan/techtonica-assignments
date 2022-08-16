class Event {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this.text = ''; //added a text to modify the description 
      this.availableTickets = [];
    
   }

   //created new tickets type w/ name and price
   addAvailableTickets (typeName, typePrice) {
    const typeObj1  = new TicketType(typeName, typePrice);
    this.availableTickets.push(typeObj1);
    }

  //Printed all tickets and display tickets on HTML
   allTickets() {
    this.text += `<br><b>All tickets: </b></br>`;
    for(let i = 0; i < this.availableTickets.length; i++) {
        this.text += `<li>${i+1}. ${this.availableTickets[i].name}, ($${this.availableTickets[i].price}) <br>`;
      // console.log(text);
    }
    this.description += this.text;
    }

    //Searched tickets with lower and upper bound 
    searchTickets(lower, upper){
    let count = 1; //count all matching tickets
    this.text = `<br><b>Available tickets:</b></br>`; //default text 
    for(let i = 0; i < this.availableTickets.length; i++) { //iterates through available Tickets 
        if(this.availableTickets[i].price >= lower && this.availableTickets[i].price <= upper) { //if range for all tickets 
            count++; 
            this.text += `<li>${count}. ${this.availableTickets[i].name} ($${this.availableTickets[i].price}) <br>`;
        }
        else if(count === 1 && i === (this.availableTickets.length - 1)) { //if no match found and at the end of the array 
            this.text = "<br><b>No tickets available</b></br>" //set text to no tickets available 
        }

    }
    this.description += this.text;
    }

}

//ticket type constructor 
  class TicketType {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
}

//create new events with names and description 
const eventObj1 = new Event('KLOS Golden Gala','An evening with hollywood vampires');
const eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
const eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019'); 

//adding ticket types and prices 
eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);
eventObj2.addAvailableTickets("General Admission", 25)
eventObj2.addAvailableTickets("Floor Seating", 80)
eventObj3.addAvailableTickets("Orchestra", 300)
eventObj3.addAvailableTickets("Mezzanine", 200)
eventObj3.addAvailableTickets("Balcony", 100)
eventObj1.searchTickets(0, 250)
eventObj2.searchTickets(0, 250)
eventObj3.searchTickets(0, 250)

//creates new Array for events
const eventArray = new Array();


// pushing multiple objects to an array at once
eventArray.push(eventObj1, eventObj2, eventObj3);

console.log(eventArray); 


//tocall
eventObj1.allTickets();
eventObj2.allTickets();
eventObj3.allTickets();




document.addEventListener('DOMContentLoaded', () => {
    // Handler when the DOM is fully loaded
    let html = '';
    eventArray.forEach((item) => {
      html += `<li>${item.name} - ${item.description}`;
    });
    document.querySelector('#event').innerHTML = html;
  }); 