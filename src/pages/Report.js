import React, { useState, useContext, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import NavBar from "../components/Nav";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { Store } from "../context/store";
import { useCookies } from 'react-cookie';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function Analysis() {
    let store = useContext(Store);
    let [orderUrl] = store.order;
    let { id } = useParams();
    const [cookies, setCookie] = useCookies(['akili']);
    const [chartData, setChartData] = useState({
        datasets: []
    });
    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            }
        },
    };

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = async () => {
        try {
            const url = `${orderUrl}/store/orders/${id}`;
            const response = await fetch(url);
            const data = await response.json();


            if (Array.isArray(data)) {

                const ordersCount = data.filter((e) => e.orderType === 'order').length;
                const cartCount = data.filter((e) => e.orderType !== 'order').length;
                const initial = {
                    labels: ['orders', 'carts'],
                    datasets: [
                        {
                            label: 'Completed Order and Pending Order',
                            data: [ordersCount, cartCount],
                            backgroundColor: [
                                'rgba(255, 99, 132)',
                                'rgba(54, 162, 235)'
                            ]
                        }
                    ]
                }
                setChartData(initial);
            }
            else {
                console.error('Data is not an array:', data);
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return <>
        <Row>
            <Col lg="3">
                <NavBar class2="activeBar" color2="white" />
            </Col>
            <Col lg="9" className="content-wrapper">
                <div className="content-wrapper-card">

                    {/* header section */}
                    <div className="row page-titles">
                        <div className="col-md-5 align-self-center">
                            <h3>Analysis</h3>
                        </div>
                    </div>

                    <div className="pe-3">

                        {/* Analysis Overview Section */}
                        <div className="card card-default">
                            <div className="card-header" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", alignItems: "center" }}>
                                <h4 className="card-title m-b-0">Analysis</h4>
                            </div>
                            <div className="card-body collapse show">
                                <Bar data={chartData} options={options} />
                            </div>
                        </div>
                    </div>



                </div>
                <div>
                    <Footer />
                </div>
            </Col>
        </Row>

    </>
};

export default Analysis;