import React from "react";
import Choice from "../components/Choice";
import CreateBtn from "../components/CreateBtn";
import NavBar from "../components/Nav";
import QuestionOrder from "../components/QuestionOrder";
import QuizCard from "../components/QuizCard";
import TypeQuestion from "../components/TypeQuestion";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

function Sample() {
    return (
        <div className="m-3" style={{ background: "whitesmoke" }}>
            <TopBar />
            <CreateBtn />
            <div className="card-grid p-3" style={{ background: "white" }}>
                <QuizCard />
                <QuizCard />
                <QuizCard />
                <QuizCard />
                <QuizCard />
                <QuizCard />
            </div>

            {/* <QuestionOrder /> */}
            <br />
            <br />
            <br />
            {/* <TypeQuestion /> */}
            <br />
            <br />
            <br />
            <Footer />
            <br />
            <br />
            <br />
            <br />
            <NavBar />
        </div>
    )

}

export default Sample