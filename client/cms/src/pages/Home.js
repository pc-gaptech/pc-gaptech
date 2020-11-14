import React from 'react'
import { Breadcrumb, Container, Tabs, Tab } from "react-bootstrap"
import ListProduct from "../components/ListProduct"
import {
    CasingHome, CpuColler, CpuHome,
    GpuHome, MotherBoard, PowerSupplay,
    RamHome, Storage
} from "./ListProduct"
import { Route, Switch, Link } from "react-router-dom"



const Home = () => {

    function goToHome() {

    }
    return (
        <div>
            <Container>
                <h1>List Product</h1>
                <Tabs>
                    <Tab>
                        <Link to="/casing" >Casing </Link>
                    </Tab>
                </Tabs>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="cpu" title="CPU">
                        <CpuHome />
                    </Tab>
                    <Tab eventKey="cpucoller" title="CPU Coller">
                        <CpuColler />
                    </Tab>
                    <Tab eventKey="motherboard" title="Motherboard">
                        <MotherBoard />
                    </Tab>
                    <Tab eventKey="gpu" title="GPU">
                        <GpuHome />
                    </Tab>
                    <Tab eventKey="ram" title="RAM">
                        <RamHome />
                    </Tab>
                    <Tab eventKey="storage" title="Storage">
                        <Storage />
                    </Tab>
                    <Tab eventKey="powersupplay" title="Power Supplay">
                        <PowerSupplay />
                    </Tab>
                    <Tab eventKey="casing" title="Casing">
                        <CasingHome />
                    </Tab>
                </Tabs>
                {/* <Breadcrumb>
                    <Breadcrumb.Item >
                        <Link to="/cpu"> CPU </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item >
                        <Link to="/cpucoller" >CPU Coller </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item >
                        <Link to="/casing" >Casing </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item >
                        <Link to="/motherboard" >Motherboard </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item >
                        <Link to="/gpu" >GPU  </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item >
                        <Link to="/ram" > RAM </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item >
                        <Link to="/casing" >Casing </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item >
                        <Link to="/casing" >Casing </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item >
                        <Link to="/casing" >Casing </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                    <Switch>
                        <Route path="/cpu" component={CpuHome} />
                        <Route path="/cpucoller" component={CpuColler} />
                        <Route path="/motherboard" component={MotherBoard} />
                        <Route path="/gpu" component={GpuHome} />
                        <Route path="/ram" component={RamHome} />
                        <Route path="/storage" component={Storage} />
                        <Route path="/powersupplay" component={PowerSupplay} />
                        <Route path="/casing" component={CasingHome} />
                    </Switch>
                </Breadcrumb> */}
            </Container>
        </div>
    )
}

export default Home
