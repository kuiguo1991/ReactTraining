import React from 'react';

import { Collapse } from 'antd';
import axios from "axios/index";

const Panel = Collapse.Panel;

function callback(key) {
    console.log(key);
}

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
        }
    }
    componentDidMount() {
        axios.get(`/api`)
            .then(res => {
                console.log(res.data.home);
                this.setState({
                    data:res.data.home,
                })
            });
    }
    render() {
        return (
            <div className="aHome">
                <Collapse defaultActiveKey={['1']} onChange={callback} accordion>
                    {
                        this.state.data.map((item)=>(
                            <Panel header={item.name} key={item.key}>
                                <p>{item.text}</p>
                            </Panel>
                        ))
                    }
                </Collapse>,
            </div>
        );
    }
}

export default Home