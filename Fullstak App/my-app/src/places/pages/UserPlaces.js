import React from 'react';

import PlaceList from '../components/PlaceList';

const DUMMY_Places = [
	{
		id: '12',
		title: 'Empire State Building',
		description: 'One of the most famous sky scrapers in the world!',
		imageUrl:
			'https://images.unsplash.com/photo-1502104034360-73176bb1e92e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
		address: 'blablablab',
		creator: 'u1',
		location: {
			lon: -73.985428,
			lat: 40.748817
		}
	},
	{
		id: '13',
		title: 'Empire State Building',
		description: 'One of the most famous sky scrapers in the world!',
		imageUrl:
			'https://images.unsplash.com/photo-1502104034360-73176bb1e92e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
		address: 'blablablab',
		creator: 'u2',
		location: {
			lon: -73.985428,
			lat: 40.748817
		}
	}
];
function UserPlaces() {
	return <PlaceList items={DUMMY_Places} />;
}

export default UserPlaces;
