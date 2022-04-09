import React from "react";

const Pagination = ({ prev, next, onPrevious, onNext }) => {

    const handlePrevious = () => {
        onPrevious();
    }

    const handleNext = () => {
        onNext();
    }

    return (
        <nav className="my-5">
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <button className="page-link btn" class="btn btn-primary" onClick={handlePrevious}>Anterior </button>
                </li>
                
                {next ? (
                    <li className="page-item">
                        <button className="page-link" class="btn btn-primary" onClick={handleNext}>Próximo</button>
                    </li>
                ) : null}
            </ul>
        </nav>
    )
}
export default Pagination;