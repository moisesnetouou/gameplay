import React from 'react';
import { Image, Text, View } from 'react-native';
import {styles} from './styles';

import IllustrationImg from '../../assets/illustration.png';

export function SignIn(){
  return(
    <View style={styles.container}>
      <Image 
        source={IllustrationImg}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinhas {`\n`}
          facilmente
        </Text>

        <Text>
          Crie grupos para jogar seus games {`\n`} 
          favoritos com seus amigos
        </Text>
      </View>
    </View>
  );
}