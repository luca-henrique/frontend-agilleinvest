import React from "react";

import { Item, Description } from "./style";

import { ReactComponent as ArrowUp } from "~/assets/icons/arrow-up-description.svg";

import { data } from "~/constants/DuvidasFrequentes";

import Section from "~/layouts/Section";

const Index = () => {
  return (
    <Section title="Dúvidas frequentes">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        {data.map((item) => {
          return (
            <>
              <Item select={item.select}>{item.perg}</Item>
              {item.select && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ArrowUp />
                  <Description>{item.resposta}</Description>
                </div>
              )}
            </>
          );
        })}
      </div>
    </Section>
  );
};

export default Index;
