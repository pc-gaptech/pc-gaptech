import React from 'react'
import { Container, Tabs, Tab } from "react-bootstrap"
import {
    CasingHome, CpuColler, CpuHome,
    GpuHome, MotherBoard, PowerSupplay,
    RamHome, Storage
} from "./ListProduct"
import { useQuery } from "@apollo/client"
import { FECTH_ALL } from "../graphQl/query"

const Home = () => {
    const { loading, error, data } = useQuery(FECTH_ALL)
    console.log(data)
    if (loading) return <p>loading....</p>
    return (
        <div>
            {JSON.stringify(data)}
            <Container>
                <h1>List Product</h1>
                {JSON.stringify(data)}
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
            </Container>
        </div>
    )
}

export default Home
