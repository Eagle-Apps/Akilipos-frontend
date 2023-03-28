import { ChevronsUp, Grid } from "react-feather";
import React from "react";
import { Link } from "react-router-dom";

function QuestionOrder() {
    return (<>

        <div className="card-view-ah pb-3 dropend" style={{ background: "white", borderBottom: "1px solid silver", width: "400px", height: "fit-content" }}>
            <div>
                <h4 className="px-4 pt-2">QUESTION ORDER</h4>
                <hr />
                <h5 className="px-4 pt-2"><Grid className="create-icon-ah" /> We do this when we are determining...</h5>
                <h5 className="px-4 pt-2"><Grid className="create-icon-ah" /> We do this when we are determining...</h5>
                <h5 className="px-4 pt-2"><Grid className="create-icon-ah" /> We do this when we are determining...</h5>
            </div>

            <button className="add-question-ah mx-4 mt-2"  data-bs-toggle="dropdown"
                aria-expanded="false"
            >Add Question
                <ChevronsUp className="create-icon-ah" />
            </button>
            <ul className="dropdown-menu _menue-down _fs-sm">
                <li className="fs-sm">
                    <Link className="dropdown-item" to="/re">
                        Single Choice
                    </Link>
                </li>
                <li className="fs-sm">
                    <Link className="dropdown-item" to="/ree">
                        Multiple Choice
                    </Link>
                </li>
            </ul>
        </div>
        <div className="flex px-4 pt-2 h6" style={{ width: "400px" }}>
            <p>Have Questions Ready? Let's  &nbsp; </p>
            <p style={{ color: "#35b468", textDecoration: "underline", cursor: "pointer" }}>import csv file </p>
        </div>


    </>


    );
}
export default QuestionOrder;
