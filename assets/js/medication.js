class MedicationSystem {
    constructor(careManagement) {
        this.careManagement = careManagement;
    }

    async displayMedicationSchedule(residentId) {
        const schedule = await this.careManagement.getMedicationSchedule(residentId);
        
        const scheduleHtml = schedule.map(med => `
            <div class="medication-item ${med.status}">
                <h4>${med.name}</h4>
                <p>Time: ${med.scheduledTime}</p>
                <p>Dosage: ${med.dosage}</p>
                <p>Instructions: ${med.instructions}</p>
                ${this.getActionButton(med)}
            </div>
        `).join('');

        document.getElementById('medicationSchedule').innerHTML = scheduleHtml;
    }

    getActionButton(medication) {
        if (medication.status === 'pending') {
            return `<button onclick="medicationSystem.administerMedication('${medication.id}')">
                Mark as Administered
            </button>`;
        }
        return `<span class="status">${medication.status}</span>`;
    }

    async administerMedication(medicationId) {
        try {
            await this.careManagement.recordMedicationAdministration(
                medicationId,
                {
                    status: 'administered',
                    administeredAt: new Date().toISOString(),
                    administeredBy: this.getCurrentStaffId()
                }
            );
            
            // Refresh the display
            await this.displayMedicationSchedule(this.getCurrentResidentId());
        } catch (err) {
            console.error('Failed to record medication:', err);
            alert('Failed to record medication administration');
        }
    }

    getCurrentStaffId() {
        // Get from auth system
        return sessionStorage.getItem('staffId');
    }

    getCurrentResidentId() {
        // Get from current context
        return document.getElementById('residentSelector').value;
    }
}