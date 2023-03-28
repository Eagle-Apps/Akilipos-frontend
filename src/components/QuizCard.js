import React from "react";
import { Clock, MoreVertical, ShoppingBag, Star } from "react-feather";
import { Link } from "react-router-dom";

function QuizCard() {
    return (
        <div className="card-view-ah py-3 px-4">
            <div className="dropdown">
                <span
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <MoreVertical />
                </span>
                <ul className="dropdown-menu _menue-down _fs-sm">
                    <li className="fs-sm">
                        <Link className="dropdown-item" to="/re">
                            Edit Product
                        </Link>
                    </li>
                    <li className="fs-sm">
                        <Link className="dropdown-item" to="/ree">
                            Delete Product
                        </Link>
                    </li>
                </ul>
            </div>

            <br />
            <br />
            <h3 className="mb-3">Carton of Indomie Noodles</h3>
            <p className="mb-3">
                A carton contains 40 pieces of 100g Noodles
            </p>
            <div className="flexbtw" style={{ marginTop: "30px" }}>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </div>
            <div className="flexbsl" style={{ marginTop: "35px" }}>
                <div className=" p-1">
                    <ShoppingBag /> 20 pieces
                </div>
                <h6 className="round-ah py-1 px-3">
                    Price: 6,000
                </h6>
            </div>

        </div>
    )

}

export default QuizCard;