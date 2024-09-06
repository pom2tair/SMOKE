document.addEventListener('DOMContentLoaded', function() {
    const historyContent = document.getElementById('history-content');

    fetch('get-form-data.php') // Appel au serveur pour récupérer les données
        .then(response => response.json())
        .then(data => {
            data.forEach(form => {
                const formDiv = document.createElement('div');
                formDiv.className = 'form-entry';
                formDiv.innerHTML = `
                    <p><strong>Steam ID(s):</strong> ${form.steamID}</p>
                    <p><strong>Previous Clans:</strong> ${form.clans}</p>
                    <p><strong>Age:</strong> ${form.age}</p>
                    <p><strong>In-Game Hours:</strong> ${form.hours}</p>
                    <p><strong>Time Zone:</strong> ${form.timezone}</p>
                    <p><strong>Favorite thing to do in DoD:</strong> ${form.favorite}</p>
                    <p><strong>How you found out about SMOKE:</strong> ${form.found}</p>
                    <p><strong>Reason for wanting to join SMOKE:</strong> ${form.reason}</p>
                    <p><strong>Main Dragon:</strong> ${form.mainDragon}</p>
                    <p><strong>Do you need training?</strong> ${form.training}</p>
                    <p><strong>Do you understand spoken English:</strong> ${form.english}</p>
                    <p><strong>Are you able to join voice chat and speak if needed:</strong> ${form.voiceChat}</p>
                    <hr>
                `;
                historyContent.appendChild(formDiv);
            });
        })
        .catch(error => console.error('Error fetching form data:', error));
});