const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/task.routes');
const sentimentRouter = require('./routes/sentiment');


const app = express();

//
app.use(cors());


// Connect to MongoDB database
mongoose.connect('mongodb://172.23.0.2/my-database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err));


// Middleware
app.use(express.json());

// Routes
app.use('/api/tasks', taskRoutes);
app.use('/api/sentiment', sentimentRouter);

app.get('/', (req, res) => {
  res.send('Hello, the server is running!');
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
