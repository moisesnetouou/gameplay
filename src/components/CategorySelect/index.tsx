import React from 'react';
import { View, ScrollView } from 'react-native';

import {styles} from './styles';

export function CategorySelect(){
  return(
    <ScrollView 
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingRight: 40}}
    >
      
    </ScrollView>
  );
}