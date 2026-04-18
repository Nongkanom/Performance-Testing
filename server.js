const express = require('express');
const app = express();
app.use(express.json());

app.post('/auth/login', (req, res) => {
    setTimeout(() => {
        res.json({ "token": "jwt_token_here", "role": "Customer" });
    }, 200); 
});

app.post('/reservations', (req, res) => {
    setTimeout(() => {
        res.json({ "reservationId": 5001, "status": "CONFIRMED" });
    }, 500); 
});

app.delete('/reservations/:id', (req, res) => {
    setTimeout(() => {
        res.json({ "message": "Reservation cancelled" });
    }, 300); 
});

app.get('/tables', (req, res) => {
    setTimeout(() => {
        res.json({ "tableId": 1, "capacity": 4, "status": "AVAILABLE" });
    }, 200); 
});

app.get('/reservations/my', (req, res) => {
    setTimeout(() => {
        res.json([{ "reservationId": 5001, "status": "CONFIRMED" }]);
    }, 400); 
});

app.listen(3000, () => console.log('Mock Server (API Spec Section 8) is running on port 3000'));