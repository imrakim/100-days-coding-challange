document.addEventListener('DOMContentLoaded', () => {
    const yearlyCalendar = document.getElementById('yearly-calendar');

    const renderCalendar = (year) => {
        const today = new Date();
        const currentYear = year !== undefined ? year : today.getFullYear();
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        for (let month = 0; month < 12; month++) {
            const monthContainer = document.createElement('div');
            monthContainer.classList.add('calendar-month');

            monthContainer.innerHTML = `
                <h2>${monthNames[month]} ${currentYear}</h2>
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

            const firstDay = new Date(currentYear, month, 1).getDay();
            const daysInMonth = new Date(currentYear, month + 1, 0).getDate();

            const tbody = monthContainer.querySelector('tbody');
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
                        if (date === today.getDate() && month === today.getMonth() && currentYear === today.getFullYear()) {
                            cell.classList.add('today');
                        }
                        date++;
                    }
                    row.appendChild(cell);
                }

                tbody.appendChild(row);
            }

            yearlyCalendar.appendChild(monthContainer);
        }
    };

    renderCalendar();
});
