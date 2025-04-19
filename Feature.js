// Add event listener to the button
document.getElementById("calculateButton").addEventListener("click", async function () {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerText = "Please enter valid numbers.";
        return;
    }

    try {
        // Send the numbers to the backend
        const response = await fetch('/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ num1, num2 }),
        });

        if (!response.ok) {
            throw new Error('Failed to calculate the sum.');
        }

        const data = await response.json();
        document.getElementById("result").innerText = `The sum is: ${data.result}`;
    } catch (error) {
        document.getElementById("result").innerText = `Error: ${error.message}`;
    }
});
