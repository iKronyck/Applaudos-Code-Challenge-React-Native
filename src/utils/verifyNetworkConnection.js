import React from 'react';
import NetInfo from '@react-native-community/netinfo';

async function checkConnectivity() {
  const connectToServer = await fetch('https://kitsu.io/api/edge/categories');
  if (connectToServer) {
    return true;
  }
  return false;
}

export default async function verifyNetworkConnection() {
  const verify = await NetInfo.fetch();
  if (verify) {
    return checkConnectivity();
  }
}
