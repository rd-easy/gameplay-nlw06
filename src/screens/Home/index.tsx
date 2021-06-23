import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Appointments from '../../components/Appointments';
import ButtonAdd from '../../components/ButtonAdd';

import CategorySelect from '../../components/CategorySelect';
import ListDivider from '../../components/ListDivider';
import ListHeader from '../../components/ListHeader';
import Profile from '../../components/Profile';

import styles from './styles';

const Home: React.FC = () => {

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'      
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'      
    },
    
  ]
  
  const [category, setCategory] = useState('');

  function handleSetCategory(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <View>

      <View style={styles.header}>
        <Profile/>
        <ButtonAdd/>
      </View>

      <View>
        <CategorySelect
          categorySelect={category}
          setCategory={handleSetCategory}
        />
      </View>
    
      <View style={styles.content}>
        <ListHeader
          title='Partidas agendadas'
          subTitle='Total 6'
        />

        <FlatList
          data={appointments}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider/>}
          style={styles.matches}
          renderItem={({ item }) => (
            <Appointments
              data={item}
            />
          )}
        />
      </View>

    </View>
  );
}

export default Home;