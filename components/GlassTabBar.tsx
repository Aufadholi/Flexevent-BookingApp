import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React, { useEffect, useRef } from "react";
import {
    Animated,
    Dimensions,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function GlassTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const tabCount = state.routes.length;
  const BAR_MARGIN = 12; // matches styles.bar.marginHorizontal
  const BAR_PADDING = 6; // matches styles.bar.paddingHorizontal
  const innerBarWidth = width - BAR_MARGIN * 2; // available width inside the rounded bar
  const tabWidth = innerBarWidth / tabCount;
  const bubbleWidth = Math.max(0, tabWidth - BAR_PADDING * 2);
  const bubbleHeight = 56; // taller so it fills the tab area naturally

  const translateX = useRef(
    new Animated.Value(state.index * tabWidth + (tabWidth - bubbleWidth) / 2)
  ).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const toValue = state.index * tabWidth + (tabWidth - bubbleWidth) / 2;

    Animated.parallel([
      Animated.spring(translateX, {
        toValue,
        useNativeDriver: true,
        mass: 0.6,
        stiffness: 180,
        damping: 18,
      }),
      Animated.sequence([
        Animated.timing(scale, { toValue: 1.08, duration: 140, useNativeDriver: true }),
        Animated.timing(scale, { toValue: 1, duration: 220, useNativeDriver: true }),
      ]),
    ]).start();
  }, [state.index, tabWidth, translateX, scale]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.bar}>
        <Animated.View
          style={[
            styles.bubble,
            {
              width: bubbleWidth,
              height: bubbleHeight,
              borderRadius: bubbleHeight / 2,
              transform: [{ translateX }, { scale }],
            },
          ]}
        />

          {/* subtle inner highlight to make the bubble feel like water */}
          <Animated.View
            pointerEvents="none"
            style={[
              styles.highlight,
              {
                width: bubbleWidth * 0.36,
                height: bubbleHeight * 0.22,
                borderRadius: (bubbleHeight * 0.22) / 2,
                transform: [
                  { translateX: Animated.add(translateX, bubbleWidth * 0.14) },
                  { scale },
                ],
              },
            ]}
          />

        {state.routes.map((route, idx) => {
          const { options } = descriptors[route.key];
          const label = options.title ?? route.name;
          const focused = state.index === idx;
          const color = focused ? "#0EA5E9" : "#9CA3AF";

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!focused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          const icon = options.tabBarIcon ? options.tabBarIcon({ focused, color, size: 24 }) : null;

          return (
            <Pressable
              key={route.key}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tab}
              accessibilityRole="button"
            >
              {icon}
              <Text style={[styles.label, { color }]} numberOfLines={1}>
                {label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "transparent",
    paddingBottom: 10,
  },
  bar: {
    marginHorizontal: 12,
    borderRadius: 999,
    paddingHorizontal: 6,
    paddingVertical: 8,
    backgroundColor: "rgba(15,23,42,0.72)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    height: 72,
  },
  bubble: {
    position: "absolute",
    top: 8,
    left: 0,
    backgroundColor: "rgba(124,211,255,0.08)",
    borderWidth: 1,
    borderColor: "rgba(124,211,255,0.14)",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
    zIndex: 1,
  },
  highlight: {
    position: "absolute",
    top: 14,
    backgroundColor: "rgba(255,255,255,0.12)",
    opacity: 0.9,
    zIndex: 2,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
    zIndex: 2,
  },
  label: {
    fontSize: 11,
    marginTop: 4,
    fontWeight: "600",
  },
});
