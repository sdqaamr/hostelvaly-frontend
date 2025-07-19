import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';

const ApiTesting = () => {
    const [hostels, setHostels] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    let fetchHostels = async() => {
        try {
            const hostelsRequest = await fetch('http://127.0.0.1:5000/hostels')
            if(!hostelsRequest.ok) {
                throw new Error("Network response was not ok")
            }
            const hostelsResponse = await hostelsRequest.json()
            setHostels(hostelsResponse.data)
        }
        catch(error) {
            setError(error);
        }
        finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchHostels();
    }, []);
    if (loading) {
        return <Text>Loading...</Text>
    }
    if (error) {
        return <Text>Error: {error.message}</Text>
    }
    if(!hostels) {
        return <Text>Hostels not found</Text>
    }
    return(
        <ScrollView>
            <View style={{margin: 50}}>
            <Text style={{marginBottom: 10, marginLeft: 50, fontWeight: "800"}}>Hostels 😊</Text>
            {hostels.map((hostel) => {
                return(
                <View key={hostel._id}>
                    <Text>name: {hostel.name}</Text>
                    <Text>city: {hostel.city}</Text>
                    <Text>address: {hostel.address}</Text>
                    <Text>---------------</Text>
                </View>
                );
            })}
        </View>
        </ScrollView>
    )

};
export default ApiTesting;
