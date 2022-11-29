import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  TabContainer,
  TabH2,
  TabImageBox,
  TabsImg,
  TabWrapper,
} from "./TablistElements";
import Img1 from "../../Images/w2.jpg";
import Img2 from "../../Images/p1.jpg";
import Img3 from "../../Images/e1.jpg";
import Img4 from "../../Images/e2.jpg";
import Img5 from "../../Images/p2.jpg";
import Img6 from "../../Images/w1.jpg";
import Img7 from "../../Images/f1.jpg";
import Img8 from "../../Images/p3.jpg";
import Img9 from "../../Images/f2.jpg";

const tabcontent = () => {
  return (
    <TabContainer id="portfolio">
      <TabH2> My Works</TabH2>
      <TabWrapper>
        <Tabs>
          <TabList>
            <Tab>All</Tab>
            <Tab>Personal</Tab>
            <Tab>Wedding</Tab>
            <Tab>Event</Tab>
            <Tab>Fashion</Tab>
          </TabList>

          <TabPanel>
            <TabImageBox>
              <TabsImg src={Img1} />
              <TabsImg src={Img4} />
              <TabsImg src={Img7} />
            </TabImageBox>
            <TabImageBox>
              <TabsImg src={Img2} />
              <TabsImg src={Img5} />
              <TabsImg src={Img8} />
            </TabImageBox>
            <TabImageBox>
              <TabsImg src={Img3} />
              <TabsImg src={Img6} />
              <TabsImg src={Img9} />
            </TabImageBox>
          </TabPanel>
          <TabPanel>
            <TabImageBox>
              <TabsImg src={Img2} />
            </TabImageBox>
            <TabImageBox>
              <TabsImg src={Img5} />
            </TabImageBox>
          </TabPanel>
          <TabPanel>
            <TabImageBox>
              <TabsImg src={Img1} />
            </TabImageBox>
            <TabImageBox>
              <TabsImg src={Img6} />
            </TabImageBox>
          </TabPanel>
          <TabPanel>
            <TabImageBox>
              <TabsImg src={Img3} />
            </TabImageBox>
            <TabImageBox>
              <TabsImg src={Img4} />
            </TabImageBox>
          </TabPanel>
          <TabPanel>
            <TabImageBox>
              <TabsImg src={Img7} />
            </TabImageBox>
            <TabImageBox>
              <TabsImg src={Img9} />
            </TabImageBox>
          </TabPanel>
        </Tabs>
        );
      </TabWrapper>
    </TabContainer>
  );
};

export default tabcontent;
