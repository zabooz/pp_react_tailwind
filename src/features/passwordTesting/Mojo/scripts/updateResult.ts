export function updateAttempts(data: string[][], display: HTMLTableSectionElement | null) {
    const stars = '******';



    const mojoIcon = document.createElement('img');
    //eslint-disable-next-line
    const rowCount = Math.floor(Math.random() * 1000000);
    mojoIcon.src = '/assets/icons/eye-slash.svg';
    mojoIcon.addEventListener('click', () => {
        const target = document.getElementById(`td${rowCount}`)!;
        if (target.textContent === stars) {
            target.textContent = data[data.length - 1][0];
            mojoIcon.src = '/assets/icons/eye-slash.svg';
            target.append(mojoIcon);
        } else {
            target.textContent = stars;
            mojoIcon.src = '/assets/icons/eye.svg';
            target.append(mojoIcon);
        }
    });

    if (data.length === 1) {
        const hideArr = [stars, data[data.length - 1][0]];
        const mojoIconDisplay = document.createElement('img');
        mojoIconDisplay.src = '/assets/icons/eye.svg';
        //eslint-disable-next-line
        const rowCount = Math.floor(Math.random() * 1000000);
        mojoIconDisplay.addEventListener('click', () => {
            const target = document.getElementById(`td${rowCount}`)!;
            if (target.textContent === stars) {
                target.textContent = data[data.length - 1][0];
                mojoIconDisplay.src = '/assets/icons/eye-slash.svg';
                target.append(mojoIconDisplay);
            } else {
                target.textContent = stars;
                mojoIconDisplay.className = '/assets/icons/eye.svg';
                target.append(mojoIconDisplay);
            }
        });

        const displayTr = document.createElement('tr');
        data.forEach((item) => {
            item.forEach((item, index) => {
                const td = document.createElement('td');

                if (index === 0) {
                    td.textContent = hideArr[0];
                    td.id = `td${rowCount}`;
                    td.append(mojoIconDisplay);
                    td.classList.add('flex', 'justify-evenly', 'gap-1', 'items-center', 'py-2');
                } else {
                    td.textContent = item;
                    td.classList.add('text-center', 'py-2');
                }
                displayTr.appendChild(td);
                displayTr.classList.add('border-b-2', 'border-slate-700');
            });
        });

        // display!.innerHTML = "";
        display!.append(displayTr);
    }

    if (data.length > 1 && display) {
        data.forEach((item, rowIndex) => {
            const tr = document.createElement('tr');
            item.forEach((cellContent, colIndex) => {
                const td = document.createElement('td');
                const hideArr = [stars, data[rowIndex][0]]; // Verwende rowIndex statt index
                const mojoIcon = document.createElement('img');
                //eslint-disable-next-line
                const rowCount = Math.floor(Math.random() * 1000000); // Zufällige ID für jede Zeile
                mojoIcon.src = '/assets/icons/eye-slash.svg';

                mojoIcon.addEventListener('click', () => {
                    const target = document.getElementById(`td${rowCount}`)!;
                    if (target.textContent === stars) {
                        target.textContent = hideArr[1]; // Verwende das tatsächliche Passwort für die Zeile
                        mojoIcon.src = '/assets/icons/eye.svg';
                        target.append(mojoIcon);
                    } else {
                        target.textContent = stars;
                        mojoIcon.src = '/assets/icons/eye-slash.svg';
                        target.append(mojoIcon);
                    }
                });

                if (colIndex === 0) {
                    td.textContent = hideArr[0];
                    td.id = `td${rowCount}`;
                    td.append(mojoIcon);
                    td.classList.add('flex', 'justify-evenly', 'gap-1', 'items-center', 'py-2');
                } else {
                    td.textContent = cellContent;
                    td.classList.add('text-center', 'py-2');
                }
                tr.appendChild(td);
            });
            const rows = Array.from(display.getElementsByTagName('tr'));
            display.append(tr, ...rows);
        });
    }
}
