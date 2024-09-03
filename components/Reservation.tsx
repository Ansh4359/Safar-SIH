import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // For the default date picker styles

const ReservationSection: React.FC = () => {
    const [date, setDate] = useState<Date | null>(null);
    const [adults, setAdults] = useState<number>(1);
    const [children, setChildren] = useState<number>(0);

    // Handler functions
    const handleDateChange = (date: Date | null) => setDate(date);
    const incrementAdults = () => setAdults(adults + 1);
    const decrementAdults = () => setAdults(Math.max(adults - 1, 1));
    const incrementChildren = () => setChildren(children + 1);
    const decrementChildren = () => setChildren(Math.max(children - 1, 0));

    return (
        <div style={{ backgroundColor: '#343a40', color: '#f8f9fa', paddingTop: '30px', paddingBottom: '30px' }}>
            <div className="container" style={{ maxWidth: '1140px', margin: '0 auto' }}>
                <div className="row g-4 align-items-center">
                    <div className="col-lg-9">
                        <div className="row g-4 align-items-center">
                            <div className="col-md-3 text-lg-start text-center">
                                <h3 style={{ marginBottom: '0' }}>Reservation</h3>
                            </div>

                            <div className="col-md-3">
                                <div style={{ textAlign: 'center' }}>
                                    <h6 style={{ color: '#ff6f61', marginBottom: '1rem' }}>Choose Date</h6>
                                    <DatePicker
                                        selected={date}
                                        onChange={handleDateChange}
                                        className="form-control"
                                        dateFormat="MMMM d, yyyy"
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div style={{ textAlign: 'center' }}>
                                    <h6 style={{ color: '#ff6f61' }}>Adult</h6>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <button
                                            type="button"
                                            onClick={decrementAdults}
                                            style={{ fontSize: '24px', background: 'none', border: 'none', color: '#fff' }}
                                        >
                                            -
                                        </button>
                                        <input
                                            type="text"
                                            value={adults}
                                            readOnly
                                            style={{ width: '40px', textAlign: 'center', border: 'none', background: 'none', color: '#fff' }}
                                        />
                                        <button
                                            type="button"
                                            onClick={incrementAdults}
                                            style={{ fontSize: '24px', background: 'none', border: 'none', color: '#fff' }}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div style={{ textAlign: 'center' }}>
                                    <h6 style={{ color: '#ff6f61' }}>Children</h6>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <button
                                            type="button"
                                            onClick={decrementChildren}
                                            style={{ fontSize: '24px', background: 'none', border: 'none', color: '#fff' }}
                                        >
                                            -
                                        </button>
                                        <input
                                            type="text"
                                            value={children}
                                            readOnly
                                            style={{ width: '40px', textAlign: 'center', border: 'none', background: 'none', color: '#fff' }}
                                        />
                                        <button
                                            type="button"
                                            onClick={incrementChildren}
                                            style={{ fontSize: '24px', background: 'none', border: 'none', color: '#fff' }}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 text-lg-end text-center">
                        <a href="rooms.html" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#ff6f61', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>
                            Check Availability
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReservationSection;
