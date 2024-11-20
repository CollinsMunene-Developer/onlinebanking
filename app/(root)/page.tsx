import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Collins" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and Manage Your account and transactions efficienrly  "
          />
          <TotalBalanceBox 
          accounts={[]}
          totalBanks={10}
          totalCurrentBalance={1250.35}
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
