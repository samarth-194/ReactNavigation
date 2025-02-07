import React, { useLayoutEffect } from 'react';
import {
  Button,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import Tweet from '../Components/Tweet';

import { DrawerNavigationProp } from '@react-navigation/drawer';

import { tweets } from "../Data/Data";


type RootDrawerParamList = {
  Feed: undefined;
};

type FeedScreenNavigationProp = DrawerNavigationProp<RootDrawerParamList, 'Feed'>;

export default function Feed() {
  const navigation = useNavigation<FeedScreenNavigationProp>();

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <Pressable onPress={() => navigation.openDrawer()}>
  //         {/* <Image
  //           source={require("../../assets/beto.jpeg")}
  //           style={{ width: 40, height: 40, borderRadius: 100, marginLeft: 15 }}
  //         /> */}
  //       </Pressable>
  //     ),
  //   });
  // }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={tweets.slice(0, 30)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Tweet tweet={item} />}
        ListHeaderComponentStyle={{ backgroundColor: "#ccc" }}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#DDD",
  },
  header: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1DA1F2",
  },
  footer: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "#FFFFFF",
    padding: 8,
    borderRadius: 12,
    fontSize: 12,
  },
  footerTitle: {
    padding: 8,
    borderRadius: 12,
    fontSize: 12,
  },
  emptyComponentTitle: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  emptyComponentSubtitle: {
    color: "#808080",
    padding: 8,
    fontSize: 14,
    textAlign: "center",
  },
  emptyComponent: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});