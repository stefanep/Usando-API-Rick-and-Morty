import { toBeInTheDOM } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

const characters = ({ characters = [] }) => {
    return (
        <div className="row">
            {characters.map((item, index) => (
                <div key={index} className="col mb-4">
                    <div className="card" style={{ minWidth: "200px" }}>
                        <img src={item.image} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{item.nome}</h5>
                            <hr />
                            <p>species: {item.species}</p>
                            <p>gender: {item.gender}</p>
                            <p>status: {item.status}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
};
export default characters