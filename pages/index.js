import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: ' A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Florence_Cathedral.jpg',
    address: 'Florence, Italy',
    description: 'This is the first meetup'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Cityscape_of_Florence_in_the_Night.jpg/1920px-Cityscape_of_Florence_in_the_Night.jpg',
    address: 'Florence, Italy',
    description: 'This is the second meetup'
  },
  {
    id: 'm3',
    title: 'A Third Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Palazzo_Pitti_Florence.jpg/800px-Palazzo_Pitti_Florence.jpg',
    address: 'Florence, Italy',
    description: 'This is the third meetup'
  }
]

function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);
    
  useEffect(() => {
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups} />
}

export default HomePage;