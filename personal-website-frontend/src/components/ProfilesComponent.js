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
        <div className="section">
            <h2>Profiles</h2>
            {profiles.map(profile => (
                <div key={profile.id} className="multiple-entry">
                <h3>{profile.name}</h3>
                <p><strong>Title:</strong> {profile.title}</p>
                <p><strong>Bio:</strong> {profile.bio}</p>
                {profile.profile_picture && (
                    <img src={profile.profile_picture} alt={`${profile.name}'s profile`} style={{ width: '100px', height: '100px' }} />
                )}
                <p><strong>Email:</strong> {profile.contact_email}</p>
                <p><strong>Phone:</strong> ({profile.phone_number.substring(0,3)}) {profile.phone_number.substring(3, 6)}-{profile.phone_number.substring(6, 10)}</p>
                </div>
            ))}
        </div>
    );
};

export default ProfilesComponent;
