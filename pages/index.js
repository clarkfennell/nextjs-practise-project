import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>NextJS Practise Project</title>
        <meta name="description" content="Browse a huge list of highly reactive ReactJS meetups" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  )
}

// export async function getServerSideProps(context) {
// this generates data every time a request is sent to the server
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
    revalidate: 1
  }
}

export default HomePage;