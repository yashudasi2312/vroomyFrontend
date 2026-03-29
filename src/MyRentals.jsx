import { useEffect, useState } from "react";
import axios from "axios";
import "./css/MyRentalscss.css";

export default function MyRentals() {

    const [rentals, setRentals] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const token = localStorage.getItem("token");

    const fetchRentals = () => {
        axios.get(`http://localhost:8080/my-rentals?page=${page}&size=5`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                setRentals(res.data.content);
                setTotalPages(res.data.totalPages);
            })
            .catch(err => console.error(err));
    };

    useEffect(() => {
        fetchRentals();
    }, [page]);


    const handleComplete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/rental/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            fetchRentals();
        } catch (err) {
            console.error(err);
        }
    };


    const handleCancel = async (id) => {
        const confirmCancel = window.confirm("Are you sure you want to cancel this rental?");
        if (!confirmCancel) return;

        try {
            await axios.delete(`http://localhost:8080/rental/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            fetchRentals();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="my-rentals">
            <h2>My Rentals</h2>

            {rentals.length === 0 ? (
                <p className="no-rentals">No rentals yet</p>
            ) : (
                rentals.map((rental) => (
                    <div key={rental.id} className="rental-card">
                        <div className="rental-info">
                            <h3>{rental.brand} {rental.name}</h3>
                            <p className="price">₹{rental.price}</p>
                        </div>

                        <div className="rental-actions">
                            <button
                                className="complete-btn"
                                onClick={() => handleComplete(rental.id)}
                            >
                                Completed
                            </button>

                            <button
                                className="cancel-btn"
                                onClick={() => handleCancel(rental.id)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                ))
            )}
            <div className="pagination">
                <button
                    disabled={page === 0}
                    onClick={() => setPage(page - 1)}
                >
                    Prev
                </button>

                <span>Page {page + 1} of {totalPages}</span>

                <button
                    disabled={page === totalPages - 1}
                    onClick={() => setPage(page + 1)}
                >
                    Next
                </button>
            </div>

            
        </div>
    );
}