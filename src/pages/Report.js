import React, { useState, useContext, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import NavBar from "../components/Nav";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { Store } from "../context/store";
import { useCookies } from 'react-cookie';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import randomColor from 'randomcolor';

function Analysis() {
    let store = useContext(Store);
    let [productUrl] = store.product;
    let [orderUrl] = store.order;
    let { id } = useParams();
    let [products, setProducts] = useState([]);
    const [cookies, setCookie] = useCookies(['akili']);
    const [chartData, setChartData] = useState({
        datasets: []
    });

    const [pieData, setPieData] = useState({
        datasets: []
    });

    const [productData, setProductData] = useState({
        datasets: []
    });

    const generateRandomColors = (count) => {
        return randomColor({
            count: count,
            luminosity: 'bright',
            format: 'rgba',
        });
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            }
        },
        plugins: {
            legend: {
                display: true
            }
        },
        // layout: {
        //     padding: {
        //         left: 50,
        //         right: 50,
        //         top: 0,
        //         bottom: 0
        //     }
        // },
        barPercentage: 0.5,
        categoryPercentage: 0.5
    };

    const pieOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    };

    useEffect(() => {
        loadOrders();
        loadProducts();
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
                    labels: ['Completed Orders', 'Pending Orders'],
                    datasets: [
                        {
                            label: 'Completed Order VS Pending Order',
                            data: [ordersCount, cartCount],
                            backgroundColor: generateRandomColors(2),
                        }
                    ]
                }
                setChartData(initial);
            }
            else {
                console.error('Data is not an array:', data);
            }

            if (Array.isArray(data)) {

                const storeCount = data.filter((e) => e.category === 'in-store').length;
                const appCount = data.filter((e) => e.category !== 'in-store').length;
                const initial = {
                    labels: ['In-Store', 'In-App'],
                    datasets: [
                        {
                            data: [storeCount, appCount],
                            backgroundColor: generateRandomColors(2),
                        }
                    ]
                }
                setPieData(initial);
            }
            else {
                console.error('Data is not an array:', data);
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const loadProducts = async () => {
        try {
            const url = `${productUrl}/products/${id}`;
            const response = await fetch(url);
            const data = await response.json();

            if (Array.isArray(data.products)) {
                let newData = data.products;
                let array = [];
                let arr = [];
                newData.map((e, i) => {
                    array.push(e.name);
                    arr.push(e.quantity);
                })
                const initial = {
                    labels: array,
                    datasets: [
                        {
                            data: arr,
                            backgroundColor: generateRandomColors(arr.length),
                        }
                    ]
                }
                setProductData(initial);
            }
            else {
                console.error('Data is not an array:', data);
            }

        }
        catch (error) {
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
                                <h4 className="card-title m-b-0">Completed Order vs Pending Order</h4>
                            </div>
                            <div className="card-body collapse show charts-section" >
                                <Bar data={chartData} options={options} />
                            </div>
                        </div>

                        <div className="card card-default">
                            <div className="card-header" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", alignItems: "center" }}>
                                <h4 className="card-title m-b-0">Purchases by Channel</h4>
                            </div>
                            <div className="card-body collapse show charts-section"  >
                                <Pie data={pieData} options={pieOptions} />
                            </div>
                        </div>

                        <div className="card card-default">
                            <div className="card-header" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", alignItems: "center" }}>
                                <h4 className="card-title m-b-0">Products VS Quantity</h4>
                            </div>
                            <div className="card-body collapse show charts-section" >
                                <Pie data={productData} options={pieOptions} />
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