import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Icon, Tile, Button, Image } from 'react-native-elements';

const list = [
  {
    id: 26,
    title: 'My Escape',
    thumbnail: 'https://i.imgur.com/og9GLHK.png',
    year: '2012',
    attachment: 'http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3',
    artist: {
      id: 15,
      name: 'Ravenscode',
      old: '30',
      type: 'Band',
      startCareer: '2003',
    },
  },
  {
    id: 25,
    title: "You Don't Know",
    thumbnail: 'https://i.imgur.com/2vRpOlP.jpg',
    year: '2021',
    attachment: 'http://www.hochmuth.com/mp3/Tchaikovsky_Rococo_Var_orch.mp3',
    artist: {
      id: 14,
      name: 'Nauval',
      old: '22',
      type: 'Solo',
      startCareer: '2021',
    },
  },
  {
    id: 19,
    title: 'Hello',
    thumbnail: 'https://i.imgur.com/YAo3Ewd.jpg',
    year: '2012',
    attachment: 'http://www.hochmuth.com/mp3/Tchaikovsky_Rococo_Var_orch.mp3',
    artist: {
      id: 10,
      name: 'Evanescence',
      old: '20',
      type: 'Band',
      startCareer: '2000',
    },
  },
  {
    id: 14,
    title: 'Over You',
    thumbnail: 'https://i.imgur.com/Xceah7i.png',
    year: '2006',
    attachment: 'http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3',
    artist: {
      id: 8,
      name: 'Chris Daughtry',
      old: '50',
      type: 'Solo',
      startCareer: '1997',
    },
  },
  {
    id: 13,
    title: 'Uptown Girl',
    thumbnail: 'https://i.imgur.com/X7IVopC.png',
    year: '2001',
    attachment: 'http://www.hochmuth.com/mp3/Vivaldi_Sonata_eminor_.mp3',
    artist: {
      id: 9,
      name: 'West Life',
      old: '47',
      type: 'Band',
      startCareer: '1989',
    },
  },
  {
    id: 12,
    title: 'Sugar',
    thumbnail: 'https://i.imgur.com/og9GLHK.png',
    year: '2012',
    attachment: 'http://www.hochmuth.com/mp3/Tchaikovsky_Rococo_Var_orch.mp3',
    artist: {
      id: 7,
      name: 'Maroon 5',
      old: '20',
      type: 'Band',
      startCareer: '2000',
    },
  },
  {
    id: 4,
    title: 'Kangen',
    thumbnail: 'https://i.imgur.com/fRiXtV9.png',
    year: '1998',
    attachment: 'http://www.hochmuth.com/mp3/Haydn_Adagio.mp3',
    artist: {
      id: 3,
      name: 'Dewa 19',
      old: '21',
      type: 'Band',
      startCareer: '1990',
    },
  },
  {
    id: 3,
    title: 'Broken Night',
    thumbnail: 'https://i.imgur.com/cPBGbcZ.png',
    year: '2018',
    attachment: 'http://www.hochmuth.com/mp3/Vivaldi_Sonata_eminor_.mp3',
    artist: {
      id: 2,
      name: 'Aimer',
      old: '25',
      type: 'Solo',
      startCareer: '2002',
    },
  },
  {
    id: 2,
    title: 'Torches',
    thumbnail: 'https://i.imgur.com/IrdCLD8.png',
    year: '2019',
    attachment: 'http://www.hochmuth.com/mp3/Tchaikovsky_Rococo_Var_orch.mp3',
    artist: {
      id: 2,
      name: 'Aimer',
      old: '25',
      type: 'Solo',
      startCareer: '2002',
    },
  },
  {
    id: 1,
    title: 'Never Say Good bye',
    thumbnail: 'https://i.imgur.com/IrdCLD8.png',
    year: '1986',
    attachment: 'http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3',
    artist: {
      id: 1,
      name: 'Bon Jovi',
      old: '42',
      type: 'Band',
      startCareer: '1983',
    },
  },
];

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Tile
        imageSrc={{ uri: 'https://i.ibb.co/7tfswCS/jumbotron.jpg' }}
        featured
        caption={
          <View>
            <Image
              style={{
                width: 200,
                height: 20,
                marginLeft: 5,
                marginBottom: 20,
              }}
              source={{ uri: 'https://i.ibb.co/cvFGrQg/logo.png' }}
            />
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 40 }}>
              <Button
                buttonStyle={styles.button}
                title="Register"
                onPress={() => props.navigation.navigate('Register')}
              />
              <Button buttonStyle={styles.button} title="Login" />
            </View>
          </View>
        }
      />

      <ScrollView>
        {list.map((l, i) => (
          <ListItem
            key={i}
            leftAvatar={{ source: { uri: l.thumbnail } }}
            title={l.title}
            subtitle={l.artist.name}
            bottomDivider
            chevron={<Icon name="play-arrow" size={30} />}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 5,
    width: 100,
    backgroundColor: '#b545ff',
  },
});

export default Home;
