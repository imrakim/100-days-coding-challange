document.addEventListener('DOMContentLoaded', () => {
    const calendar = document.getElementById('calendar');

    const renderCalendar = (month, year) => {
        const today = new Date();
        const currentMonth = month !== undefined ? month : today.getMonth();
        const currentYear = year !== undefined ? year : today.getFullYear();

        // Create the header with month and year
        calendar.innerHTML = `
            <h2>${today.toLocaleString('default', { month: 'long' })} ${currentYear}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        `;

        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        const tbody = calendar.querySelector('tbody');
        tbody.innerHTML = '';

        let date = 1;

        for (let i = 0; i < 6; i++) {
            const row = document.createElement('tr');

            for (let j = 0; j < 7; j++) {
                const cell = document.createElement('td');
                if (i === 0 && j < firstDay) {
                    cell.classList.add('empty');
                } else if (date > daysInMonth) {
                    cell.classList.add('empty');
                } else {
                    cell.textContent = date;
                    if (date === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
                        cell.classList.add('today');
                    }
                    date++;
                }
                row.appendChild(cell);
            }

            tbody.appendChild(row);
        }
    };

    renderCalendar();
});
