import React from 'react';
import { useQuery } from 'react-query';
import { fetchProfiles } from '../api/services';

const fetchProfilesData = async () => {
    const response = await fetchProfiles();
    return response.data;
};

const ProfilesComponent = () => {
    const { data: profiles, isLoading, error } = useQuery('profiles', fetchProfilesData);

    if (isLoading) return <div style={{ color: 'white' }}>Loading...</div>;
    if (error) return <div style={{ color: 'white' }}>Error: {error.message}</div>;

    return (
        <div className="section">
            <h2>Profiles</h2>
            {profiles?.map(profile => (
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
