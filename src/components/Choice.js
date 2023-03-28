import React, { useState } from "react";
import { Grid, PlusCircle, Trash2, UploadCloud, } from "react-feather";
import ReactQuill, { Quill } from 'react-quill';
import "react-quill/dist/quill.snow.css";

function Choice() {
    const [value, setValue] = useState('');
    let formats = [
        'bold', 'italic', 'underline', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image',
        'color',
        'background'
    ]
    let modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['image'],
            [{ color: ["red", "#785412"] }],
            [{ background: ["red", "#785412"] }]
        ],
    }
    return (<>
        <div className="choice-ah">
            <div className="flexbtw mb-2">
                <h5 style={{ display: "flex", alignItems: "center", fontSize: "16px" }}><Grid width="16px" style={{ marginRight: "10px", color: "#808CAD" }} /> Choice 1</h5>
                <Trash2 color="#FD4E59" />
            </div>

            <div>
                <ReactQuill theme="snow" value={value} onChange={setValue} style={{ borderRadius: "5px", height: "80px" }} modules={modules} formats={formats} placeholder="Input text here..." />
            </div>

            <div className="flex mt-5">
                <input style={{ marginRight: "10px" }} type="checkbox" id="check1" />
                <label for="check1">This is a correct answer</label>
            </div>

        </div>

        <div className="flex mt-2" style={{ color: "#AAAAAA" }} >
            <PlusCircle style={{ marginRight: "10px" }} />
            <label >Add more options</label>
        </div>

        <div>
            <button className="create-btn-ah"><UploadCloud /> Save Quiz</button>
        </div>

    </>
    )

}

export default Choice;