import React from 'react'
import { Card, Carousel } from 'antd'
import './ui.css'

export default class Carousels extends React.Component {

    render() {
        return (
            <div>
                <Card>
                    <Carousel autoplay effect='fade'>
                        <div>
                            <h3>Antd Carousel 1</h3>
                        </div>
                        <div>
                            <h3>Antd Carousel 2</h3>
                        </div>
                        <div>
                            <h3>Antd Carousel 3</h3>
                        </div>
                        <div>
                            <h3>Antd Carousel 4</h3>
                        </div>
                    </Carousel>,
                </Card>
                <Card>
                    <Carousel autoplay effect='fade' className=''>
                        <div>
                            {/* img路径？ */}
                            <img src="/images/1.jpg" alt="樱木花道" />
                        </div>
                        <div>
                        <img src="./../../../images/2.jpg" alt="湘北" />
                        </div>
                    </Carousel>
                </Card>
            </div>
        );
    }
}