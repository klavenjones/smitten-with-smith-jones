import { createEvent } from 'ics';
import { saveAs } from 'file-saver';

// Set up event schedule details
const event: any = {
  start: [2023, 7, 28, 18, 0],
  duration: { hours: 5 },
  title: "Brittani & Klaven's Wedding Reception",
  description: "Brittani & Klaven's Wedding Reception\nJuliette Restaurant\n135 N. 5th Street\nBrooklyn NY, 11207",
  location: 'Juliette Restaurant',
  url: 'https://brittaniandklaven.com',
  categories: ['Wedding Reception'],
  organizer: { name: 'Brittani & Klaven', email: 'brittaniandklaven@gmail.com' },
};

const saveCalender = () => {
  createEvent(event, (error, value) => {
    const blob = new Blob([value], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'wedding-reception.ics');
  });
};

export { saveCalender };
