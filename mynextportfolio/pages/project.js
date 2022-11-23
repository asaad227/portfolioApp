import React, { useState } from "react";
import myData from "../lib/files";
import Nav from "/src/Components/Nav/navbar";
import Footer from "../src/Components/footer";
import ProjectDisplay from "../src/Components/projectDisplay";

export default function Project() {
  const [data, setData] = useState(myData);

  console.log(data);
  return (
    <div>
      <header>
        <Nav />
        <Footer />
      </header>
      <ProjectDisplay data={data} />
    </div>
  );
}
