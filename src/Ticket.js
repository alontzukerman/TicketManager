import React from 'react';

function Ticket({ ticket, onClick }) {
  const classNameTicket = ticket.hide ? 'hiddenTicket' : 'ticket'; // changing className if hidden

  const creationDate = new Date(ticket.creationTime);

  return (
    <div className={classNameTicket}>
      <button
        onClick={() => onClick(ticket.id)}
        className="hideTicketButton"
      >
        {' '}
        Hide
        {' '}

      </button>
      <div className="ticket-title">{ticket.title}</div>
      <div className="ticket-content">{ticket.content}</div>
      <span className="ticket-userEmail">{`By ${ticket.userEmail}`}</span>
      <span> | </span>
      <span className="ticket-creationTime">{creationDate.toString()}</span>
      {
                ticket.labels
                && (
                <div className="ticket-labels">
                  {
                ticket.labels.map((label) => <div className="label">{label}</div>)
                }
                </div>
                )
            }

    </div>
  );
}

export default Ticket;
