import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

const LeaderSelection = () => {
  const totalData = useSelector(state => state?.entry);
  const [selectedWicketKeepers, setSelectedWicketKeepers] = useState([]);
  const [selectedBatsmans, setSelectedBatsmans] = useState([]);
  const [selectedAllRounders, setSelectedAllRounders] = useState([]);
  const [selectedBowlers, setSelectedBowlers] = useState([]);
  const [nonSelectedWicketKeepers, setNonSelectedWicketKeepers] = useState([]);
  const [nonSelectedBatsmans, setNonSelectedBatsmans] = useState([]);
  const [nonSelectedAllRounders, setNonSelectedAllRounders] = useState([]);
  const [nonSelectedBowlers, setNonSelectedBowlers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [nonSelectedPlayers, setNonSelectedPlayers] = useState([]);
  const filterPlayers = () => {
    let arr = [
      ...totalData?.wicketKeepers,
      ...totalData?.batsmans,
      ...totalData?.allRounders,
      ...totalData?.bowlers,
    ];

    const selectedPlayer = [];
    const nonSelectedPlayer = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].selected === true) {
        selectedPlayer.push(arr[i]);
      } else {
        nonSelectedPlayer.push(arr[i]);
      }
    }

    setSelectedPlayers(selectedPlayer);
    setNonSelectedPlayers(nonSelectedPlayer);

    const swk = selectedPlayer.filter((obj, idx) => obj?.playerType === 'wk');
    const nswk = nonSelectedPlayer.filter(
      (obj, idx) => obj?.playerType === 'wk',
    );

    const sbat = selectedPlayer.filter((obj, idx) => obj?.playerType === 'bat');
    const nsbat = nonSelectedPlayer.filter(
      (obj, idx) => obj?.playerType === 'bat',
    );

    const sar = selectedPlayer.filter((obj, idx) => obj?.playerType === 'ar');
    const nsar = nonSelectedPlayer.filter(
      (obj, idx) => obj?.playerType === 'ar',
    );

    const sbwl = selectedPlayer.filter((obj, idx) => obj?.playerType === 'bwl');
    const nsbwl = nonSelectedPlayer.filter(
      (obj, idx) => obj?.playerType === 'bwl',
    );

    setSelectedWicketKeepers(swk);
    setNonSelectedWicketKeepers(nswk);

    setSelectedBatsmans(sbat);
    setNonSelectedBatsmans(nsbat);

    setSelectedAllRounders(sar);
    setNonSelectedAllRounders(nsar);

    setSelectedBowlers(sbwl);
    setNonSelectedBowlers(nsbwl);
    // let swk = []
    // let nswk = []
    // let sbat =
    // for(let i=0;i<arr.length; i++){
    //   if(arr[i].playerType === 'wk'){
    //     if(arr[i].selected === true){

    //     }
    //   }
    // }
  };

  useEffect(() => {
    filterPlayers();
  }, []);
  return (
    <ScrollView
      contentContainerStyle={{
        padding: 20,
        backgroundColor: '#222222',
        // flex: 1,
        flexGrow: 1,
      }}
      // scrollEnabled={true}
    >
      <View>
        <Text
          style={{
            textAlign: 'center',
            marginBottom: 4,
            fontSize: 16,
            fontWeight: '600',
            color: '#fff',
          }}>
          Selected Players
        </Text>
        <View
          style={{
            width: 150,
            height: 2,
            backgroundColor: '#fff',
            marginBottom: 12,
            marginLeft: 110,
          }}></View>
        {selectedPlayers.map((player, idx) => {
          return (
            <View
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: 'lightblue',
                borderRadius: 4,
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                paddingVertical: 8,
                marginVertical: 4,
              }}>
              <Text style={{color: '#141414', fontWeight: '400'}}>
                {player.name}
              </Text>
              <Text style={{color: '#141414', fontWeight: '400'}}>
                {player.playerType.toUpperCase()}
              </Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default LeaderSelection;
