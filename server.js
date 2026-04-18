const express = require('express');
const app = express();
app.use(express.json());

// 8.3.1 Login Customer 
app.post('/auth/login', (req, res) => {
    setTimeout(() => {
        res.json({ "token": "jwt_token_here", "role": "Customer" });
    }, 200); 
});

// 8.4.1 Create Reservation 
app.post('/reservations', (req, res) => {
    setTimeout(() => {
        res.json({ "reservationId": 5001, "status": "CONFIRMED" });
    }, 500); 
});

// 8.4.2 Cancel Reservation 
app.delete('/reservations/:id', (req, res) => {
    setTimeout(() => {
        res.json({ "message": "Reservation cancelled" });
    }, 300); 
});

// 8.5.1 Get Table List 
app.get('/tables', (req, res) => {
    setTimeout(() => {
        res.json({ "tableId": 1, "capacity": 4, "status": "AVAILABLE" });
    }, 200); 
});

// GET /reservations/my (อ้างอิงจากตารางข้อ 7.1) 
app.get('/reservations/my', (req, res) => {
    setTimeout(() => {
        res.json([{ "reservationId": 5001, "status": "CONFIRMED" }]);
    }, 400); 
});

app.listen(3000, () => console.log('Mock Server (API Spec Section 8) is running on port 3000'));