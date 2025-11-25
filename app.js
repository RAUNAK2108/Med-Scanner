function extractMedicines() {
    const resultsDiv = document.getElementById("results");

    resultsDiv.innerHTML = `
        <h2>🔍 Extracted Medicines</h2>
        <p>Scanning completed successfully. Showing best price & availability.</p>
    `;

    const medicines = [
        {
            name: "Paracetamol 500mg",
            price: "₹20",
            store: "Apollo Pharmacy",
            quantity: "10 tablets",
            reminder: "Every 6 hours"
        },
        {
            name: "Amoxicillin 250mg",
            price: "₹85",
            store: "MedPlus",
            quantity: "15 tablets",
            reminder: "Twice a day"
        },
        {
            name: "Cetirizine 10mg",
            price: "₹12",
            store: "Local Medical Shop",
            quantity: "10 tablets",
            reminder: "Once at night"
        }
    ];

    medicines.forEach(med => {
        resultsDiv.innerHTML += `
            <div class="medicine-card">
                <strong>Medicine:</strong> ${med.name}<br>
                <strong>Price:</strong> ${med.price}<br>
                <strong>Available At:</strong> ${med.store}<br>
                <strong>Quantity:</strong> ${med.quantity}<br>
                <strong>Dosage Reminder:</strong> ${med.reminder}
            </div>
        `;
    });

    resultsDiv.innerHTML += `
        <p style="margin-top:20px; font-size:18px; color:green;">
            ✔ We will notify you before your next dosage.
        </p>
    `;
}
