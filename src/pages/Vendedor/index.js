import React from "react";

import DashboardContainer from "~/containers/Dashboard";

const Index = () => {
  return (
    <DashboardContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "172px",
              background: "#2C303A",
              borderRadius: "20px",
              marginRight: "22px",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "172px",
              background: "#2C303A",
              borderRadius: "20px",
              marginLeft: "22px",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "100%",
            background: "#2C303A",
            borderRadius: "20px",
            marginTop: "22px",
            marginBottom: "40px",
          }}
        />
      </div>
    </DashboardContainer>
  );
};

export default Index;
