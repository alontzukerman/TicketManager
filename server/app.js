const express = require('express');

const app = express();
const fs = require('fs');

const path = './data.json';

app.use(express.json());


function filteredTicketsBySearch(tickets, searchValue) { // return filtered array of tickets.
  return tickets.filter(({ title }) => title.toLowerCase().includes(searchValue.toLowerCase()));
}

function changePropertyDoneOfTicket({ ticketId, done }) { // set done property of chosen ticket id
  const json = fs.readFileSync(path);
  const tickets = JSON.parse(json);
  const chosenTicket = tickets.find((ticket) => ticket.id === ticketId);
  if (done === 'done') { chosenTicket.done = true; }
  if (done === 'undone') { chosenTicket.done = false; }

  fs.writeFileSync(path, JSON.stringify(tickets));
}
// GET request => return all tickets.
// can be filter by query param 'searchText' =>
// return tickets that have title includes serachText value.
app.get('/api/tickets', (req, res) => {
  const json = fs.readFileSync(path);
  const tickets = JSON.parse(json);
  req.query.searchText
    ? res.send(filteredTicketsBySearch(tickets, req.query.searchText))
    : res.send(tickets);
});

// POST request => return message.
// set done property to true or false.
app.post('/api/tickets/:ticketId/:done', (req, res) => {
  changePropertyDoneOfTicket(req.params);
  res.send({ updated: true });
});

module.exports = app;
