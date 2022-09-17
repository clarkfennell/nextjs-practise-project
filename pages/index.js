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

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />
}

// /**
//  * It's a function that runs on the server and returns an object with a property called props
//  * @param context - An object with the following properties:
//  */
// export async function getServerSideProps(context) {
//   // this generates data every time a request is sent to the server
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export async function getStaticProps() {
  // this generates data on initial request
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    // incremental static generation (meaning it will be regenerated on the sever by how many seconds added)
    // revalidate: 10
  }
}

export default HomePage;