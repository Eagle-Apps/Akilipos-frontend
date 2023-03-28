import React from "react";
import { File, } from "react-feather";

function TypeQuestion() {
    return (
        <div className="input-quiz-ah">
            <p>Multiple choice question</p>
            <div className="flexbtw">
                <h5>01</h5>
                <span>
                    <input style={{ display: "none" }} type="file" id="image" />
                    <label for="image">
                        <File />
                    </label>
                </span>
            </div>

            <input placeholder="Type your question here..." />

        </div>
    )

}

export default TypeQuestion;