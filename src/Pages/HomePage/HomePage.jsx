import React from "react";
import Content from "../../components/content/content";
import DefaultLayout from "../../Layouts/DefaultLayout/DefaultLayout";
import Slidebar from "../../components/slidebar/slidebar";

function HomePage() {
  return (
    <DefaultLayout>
      <Slidebar />
      <Content />
    </DefaultLayout>
  );
}

export default HomePage;
