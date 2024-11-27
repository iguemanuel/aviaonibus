import React from "react";
import { Stack } from "expo-router";
import Header from "./Header";

type HeaderWithTitleProps = {
  title: string;
};

export default function HeaderWithTitle({ title }: HeaderWithTitleProps) {
  return (
    <Stack.Screen
      options={{
        title,
        headerRight: () => <Header />,
      }}
    />
  );
}
