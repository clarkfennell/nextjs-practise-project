import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

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
  const client = await MongoClient.connect('mongodb+srv://admin:haBjUXh8qjDWM0xi@cluster0.iekjdnm.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();
  
  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    // incremental static generation (meaning it will be regenerated on the sever by how many seconds added)
    revalidate: 10
  }
}

export default HomePage;