import React, { useState, useEffect } from 'react';
import { fetchProfiles } from '../api/services';

const ProfilesComponent = () => {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        fetchProfiles().then(response => {
            setProfiles(response.data);
        }).catch(error => console.error('Fetching profiles failed', error));
        }, []);

    return (
        <div>
            <h2>Profiles</h2>
            {profiles.map(profile => (
                <div key={profile.id}>
                <h3>{profile.name}</h3>
                <p><strong>Title:</strong> {profile.title}</p>
                <p><strong>Bio:</strong> {profile.bio}</p>
                {profile.profile_picture && (
                    <img src={profile.profile_picture} alt={`${profile.name}'s profile`} style={{ width: '100px', height: '100px' }} />
                )}
                <p><strong>Email:</strong> {profile.contact_email}</p>
                <p><strong>Phone:</strong> {profile.phone_number}</p>
                </div>
            ))}
        </div>
    );
};

export default ProfilesComponent;
