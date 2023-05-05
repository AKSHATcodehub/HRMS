export const TICKET_HEADING = [
    { heading: 'Action', key: 'action', type: 'text'},
    { heading: 'Ticket Code', key: 'ticket_code', type: 'text' },
    { heading: 'Priority', key: 'priority', type: 'text' },
    { heading: 'Employee', key: 'employee', type: 'text'},
    { heading: 'Subject', key: 'subject', type: 'text'},
    { heading: 'Status', key: 'status', type: 'text' },
    { heading: 'Date', key: 'date', type: 'date'},
]

export const TICKET_TABLE_DATA = [
    {action:'1',ticket_code:7634527,priority:'final',employee:'Permanet',subject:'Angular',status:'pending',date:'3/04/2023'}
]
export const DROPDOWN_DATA =[
    {
        data:['IT','Admin'],
        placeholder:'Select Department',
        initialvalue:''
    },
    {
        data:['Ticket Category 1','Ticket Category 2'],
        placeholder:'Select Ticket Category',
        initialvalue:''
    },
    {
        data:['High','Low','Normal'],
        placeholder:'Select Priority',
        initialvalue:''
    },

]