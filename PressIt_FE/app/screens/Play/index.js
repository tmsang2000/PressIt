import React, { useState } from 'react';
import { View, SafeAreaView, TouchableOpacity } from 'react-native';
import {BaseStyle, BaseColor, useTheme} from '@config';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import {
  Header,
  Text,
  Icon,
  Button
} from '@components';

export default function Play(props) {
  const {t} = useTranslation();
  const [gameState, setGameState] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [gameTurn, setGameTurn] = useState('x');
  const [winner, setWinner] = useState(null);
  const { colors } = useTheme();

  const checkWinner = state => {
    
    for (let i = 0; i < 3; i++) {
      if (state[i][0] && state[i][0] == state[i][1] && state[i][1] == state[i][2]) return state[i][0];
      if (state[0][i] && state[0][i] == state[1][i] && state[1][i] == state[2][i]) return state[0][i];
      
    }
    if (state[0][0] && state[0][0] == state[1][1] && state[1][1] == state[2][2]) return state[0][0];
    if (state[0][2] && state[0][2] == state[1][1] && state[1][1] == state[2][0]) return state[0][2];

    let flag = false;
    for (let i = 0; i < 3; i++) {
      if (!state[i][0] || !state[i][1] || !state[i][2]) flag = true;
      if (!state[0][i] || !state[1][i] || !state[2][i]) flag = true;
    }
    if (flag) return null;
    return true;
  }

  const generateMap = () => {
    const mapJsx = [];
    for (let i = 0; i < gameState.length; i++) {
      const row =  gameState[i];
      const rowJsx = [];
      for (let j = 0; j < row.length; j++) {
        rowJsx.push(
          <TouchableOpacity 
            style={[styles.cell, {borderColor: colors.primary}]}
            key={`cell_${i}_${j}`}
            onPress={() => {
              let newGameState = gameState;
              newGameState[i][j] =  gameTurn;
              const winner = checkWinner(newGameState);
              setGameState(newGameState);
              setGameTurn(gameTurn == 'x' ? 'o' : 'x');
              setWinner(winner);
            }}
            disabled={  winner != null ||  gameState[i][j] != null ? true : false}
          >
            <Text title1>
              { gameState[i][j]}
            </Text>
          </TouchableOpacity>
        )
      }
      mapJsx.push(
        <View key={`row_${i}`} style={{flexDirection: 'row'}}>
          {rowJsx}
        </View>
      )
    }

    return mapJsx;
  }

  const restartGame = () => {
    setGameTurn('x');
    setGameState([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
    setWinner(null);
  }

  return (
    <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{top: 'always'}}>
      <Header 
        title="Play"
        renderLeft={() => {
          return (
            <Icon
              name="arrow-left"
              size={20}
              color={colors.primary}
            />
          )
        }}
        onPressLeft={() => {props.navigation.goBack()}}
      />

      <View style={{height: 50, alignItems: 'center', justifyContent: 'center', marginVertical: 20}}>
        { winner ? (
          <Text title1>
            { winner == true ? "DRAW" :  winner + " WINS!!"}
          </Text>
        ) : <></>}
      </View>

      <View style={styles.contain}>

        {generateMap()}

        <Button 
          style={{marginTop: 20, width: '50%'}}
          onPress={() => {restartGame()}}
        >
          {t("new_game")}
        </Button>
      </View>
      
    </SafeAreaView>
  );
}
