import React from 'react';
import { Image, View } from 'react-native';

import {styles} from './styles';

export function GuildIcon(){
  const uri = "https://cdn2.iconfinder.com/data/icons/social-media-2304/64/02-discord-512.png"

  return(
    <Image 
      source={{uri}}
      style={styles.image}
      resizeMode="cover"
    />
  );
}