import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  return (
    <MeetupDetail
      image={`https://upload.wikimedia.org/wikipedia/commons/a/a1/Florence_Cathedral.jpg`}
      title={`Our First Meetup`}
      address={`Florence, Italy`}
      description={'Our First Meetup'}
    />
  )
}

export default MeetupDetails;