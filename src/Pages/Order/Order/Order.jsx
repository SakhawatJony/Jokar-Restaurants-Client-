import Cover from "../../Shared/Cover/Cover";
import orderCoverImg from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import OrderTab from "../OrderTab/OrderTab";
import useMenu from "../../../hooks/useMenu/useMenu";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Order = () => {

    const categorys = ['salad','pizza','soup','dessert','drinks',]
    const {category} = useParams();
    const inatillIndex = categorys.indexOf(category)
    const [tabIndex,setTabIndex]= useState(inatillIndex);
    const [menu]=useMenu()

   
    // console.log(category)
    const soup = menu.filter(item=>item.category ==='soup')
    const salad = menu.filter(item=>item.category ==='salad')
    const pizza = menu.filter(item=>item.category ==='pizza')
    const dessert = menu.filter(item=>item.category ==='dessert')
    const drinks = menu.filter(item=>item.category ==='drinks')
    return (
        <div>
          <Helmet>
        <title>Jokar Resturent |Our Food</title>
      </Helmet>
            <Cover img={orderCoverImg} title={"Our Food"} ></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soups</Tab>
    <Tab>Desserts</Tab>
    <Tab>Drinks</Tab>
  </TabList>
  <TabPanel><OrderTab items={salad}  ></OrderTab></TabPanel>
  <TabPanel><OrderTab items={pizza}  ></OrderTab></TabPanel>
  <TabPanel><OrderTab items={soup}  ></OrderTab></TabPanel>
  <TabPanel><OrderTab items={dessert}  ></OrderTab></TabPanel>
  <TabPanel><OrderTab items={drinks}  ></OrderTab></TabPanel>
</Tabs>
            
        </div>
    );
};

export default Order;