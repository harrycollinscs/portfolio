import React from "react";
import { withTheme } from "styled-components";

const Title = ({ text, theme }: { text: string; theme: any }) => (
  <h1
    style={{
      textDecorationLine: "underline",
      textDecorationColor: `${theme.primary}`,
      paddingBottom: 20,
      textUnderlineOffset: 20,
      textDecorationThickness: 10,
    }}
  >
    {text}
  </h1>
);

export default withTheme(Title);
