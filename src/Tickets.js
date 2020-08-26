import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Ticket from './Ticket';
import Info from './Info';

function Tickets({ inputValue }) {
  const [tickets, setTickets] = useState();
  const [value, setValue] = useState(inputValue);
  const [hiddenCounter, setHiddenCounter] = useState(0);

  value !== inputValue && setValue(inputValue);
  async function getAllTickets() { // get all tickets from server => auto filter with search
    const { data } = await axios.get(`/api/tickets?searchText=${inputValue}`);
    setTickets(data);
  }

  function handleRestore() { // restore hidden tickets
    setHiddenCounter(0);
    setTickets(tickets.map((ticket) => {
      if (ticket.hide) { delete ticket.hide; }
      return ticket;
    }));
  }

  function handleHide(ticketID) { // hidding ticket
    setHiddenCounter(hiddenCounter + 1);
    setTickets(tickets.map((ticket) => {
      if (ticketID === ticket.id) {
        ticket.hide = true;
      }
      return ticket;
    }));
  }

  useEffect(() => {
    getAllTickets();
  }, [value]);
  return (
    <div className="TicketsCon">
      {
                tickets !== undefined
                && (
                <Info
                  onClick={() => handleRestore()}
                  ticketLength={tickets.length}
                  hiddenCounter={hiddenCounter}
                />
                )
            }
      {
                tickets !== undefined
                && tickets.map((ticket) => (
                  <Ticket
                    key={ticket.id}
                    ticket={ticket}
                    onClick={(e) => handleHide(e)}
                  />
                ))
            }
    </div>
  );
}

export default Tickets;
