import React, {useState} from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native';
import { AvaliationStyle } from './avaliationStyle';

export default function Avaliation  ()  {
  const [defaultRating, setDefaultRating] = useState(0);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  const RatingBar = () => {
    return (
      <View style={AvaliationStyle.ratingBarStyle}>
        {maxRating.map((item, _key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}>
              <Image
                style={AvaliationStyle.starImageStyle}
                source={
                  item <= defaultRating
                    ? require('../../src/img/star-full.png')
                    : require('../../src/img/star.png')
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={AvaliationStyle.container}>
      <View style={AvaliationStyle.container}>
        <RatingBar />      
      </View>
    </SafeAreaView>
  );
};
