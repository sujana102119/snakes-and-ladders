const generateRandomNatualNumber = (limit) => Math.floor(Math.random() * limit) + 1;
const getMinMaxAvg = (values) => {
    return {
        MIN: Math.min(...values),
        MAX: Math.max(...values),
        AVERAGE: Math.round(values.reduce((sum, value) => sum + value, 0 ) / values.length)
    }
} 
module.exports = {
    generateRandomNatualNumber,
    getMinMaxAvg
}