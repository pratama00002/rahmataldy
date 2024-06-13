// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Biodata form submission
    const biodataForm = document.getElementById('biodataForm');
    if (biodataForm) {
        biodataForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const biodata = {
                name: document.getElementById('name').value,
                nisn: document.getElementById('nisn').value,
                dob: document.getElementById('dob').value,
                address: document.getElementById('address').value
            };
            localStorage.setItem('biodata', JSON.stringify(biodata));
            alert('Biodata berhasil disimpan!');
            window.location.href = 'penilaian.html';
        });
    }

    // Penilaian form submission
    const penilaianForm = document.getElementById('penilaianForm');
    if (penilaianForm) {
        penilaianForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const penilaian = {
                indonesia: document.getElementById('indonesia').value,
                pkk: document.getElementById('pkk').value,
                agama: document.getElementById('agama').value,
                matematika: document.getElementById('matematika').value,
                pjok: document.getElementById('pjok').value,
                aij: document.getElementById('aij').value,
                wan: document.getElementById('wan').value,
                asj: document.getElementById('asj').value,
                inggris: document.getElementById('inggris').value,
                pkn: document.getElementById('pkn').value,
                tlj: document.getElementById('tlj').value,
                kehadiran: document.getElementById('kehadiran').value,
                tugas: document.getElementById('tugas').value,
                mid: document.getElementById('mid').value,
                semester: document.getElementById('semester').value
            };
            localStorage.setItem('penilaian', JSON.stringify(penilaian));
            alert('Penilaian berhasil disimpan!');
            window.location.href = 'output.html';
        });
    }

    // Load data to output table
    const outputTable = document.getElementById('outputTable');
    if (outputTable) {
        const biodata = JSON.parse(localStorage.getItem('biodata'));
        const penilaian = JSON.parse(localStorage.getItem('penilaian'));
        if (biodata && penilaian) {
            const tbody = outputTable.querySelector('tbody');
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${biodata.name}</td>
                <td>${biodata.nisn}</td>
                <td>${biodata.dob}</td>
                <td>${biodata.address}</td>
                <td>${penilaian.indonesia}</td>
                <td>${penilaian.pkk}</td>
                <td>${penilaian.agama}</td>
                <td>${penilaian.matematika}</td>
                <td>${penilaian.pjok}</td>
                <td>${penilaian.aij}</td>
                <td>${penilaian.wan}</td>
                <td>${penilaian.asj}</td>
                <td>${penilaian.inggris}</td>
                <td>${penilaian.pkn}</td>
                <td>${penilaian.tlj}</td>
                <td>${penilaian.kehadiran}</td>
                <td>${penilaian.tugas}</td>
                <td>${penilaian.mid}</td>
                <td>${penilaian.semester}</td>
            `;
            tbody.appendChild(row);
        }
    }
});
